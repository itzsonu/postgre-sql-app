"use client";

import { useEffect, useState } from "react";

interface Student {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  // READ - Display students
  async function loadStudents() {
    try {
      const res = await fetch("/api/students");

      if (!res.ok) throw new Error("Failed to load students");

      const data: Student[] = await res.json();
      setStudents(data);
    } catch {
      setMessage("Unable to load students");
    }
  }

  useEffect(() => {
    void loadStudents();
  }, []);

  // CREATE OR UPDATE
  async function saveStudent() {
    if (!name.trim() || !email.trim()) {
      setMessage("Enter Name and Email");
      return;
    }

    const method = editId === null ? "POST" : "PUT";

    try {
      const res = await fetch("/api/students", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editId,
          name: name.trim(),
          email: email.trim(),
        }),
      });

      if (!res.ok) throw new Error("Failed to save student");

      setName("");
      setEmail("");
      setEditId(null);
      setMessage("Student saved successfully");

      await loadStudents();
    } catch {
      setMessage("Failed to save student");
    }
  }

  // SELECT STUDENT FOR EDITING
  function editStudent(student: Student) {
    setName(student.name);
    setEmail(student.email);
    setEditId(student.id);
    setMessage("");
  }

  // DELETE STUDENT
  async function deleteStudent(id: number) {
    try {
      const res = await fetch("/api/students", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error("Delete failed");

      setMessage("Student deleted successfully");
      await loadStudents();
    } catch {
      setMessage("Failed to delete student");
    }
  }

  // CANCEL EDIT
  function cancelEdit() {
    setName("");
    setEmail("");
    setEditId(null);
    setMessage("");
  }

  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Student Management System</h1>

      <h2>{editId === null ? "Add Student" : "Update Student"}</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <br /><br />

      <button onClick={saveStudent}
      style={{ marginLeft: "10px" }}
      >
        {editId === null ? "Add Student" : "Update Student"}
      </button>

      {editId !== null && (
        <button onClick={cancelEdit}>Cancel</button>
      )}

      <p>{message}</p>

      <h2>Student List</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>

              <td>
                <button onClick={() => editStudent(student)}>
                  Edit
                </button>

                <button onClick={() => deleteStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}