import pool from "@/lib/db";

export default async function StudentsPage() {
  const result = await pool.query(
    "SELECT * FROM student2"
  );
  return (
    <div>
      <h1>Students</h1>
      {result.rows.map((student:any) => (
        <div key={student.id}>
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
        </div>
      ))}
    </div>
  );
}