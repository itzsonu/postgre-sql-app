import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

// READ - Display all students
export async function GET() {
  try {
    const result = await pool.query(
      "SELECT * FROM students ORDER BY id"
    );

    return NextResponse.json(result.rows);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch students" },
      { status: 500 }
    );
  }
}

// create add student
// CREATE - Add student
export async function POST(request: NextRequest) {
    try {
        const { name, email } = await request.json();

        if (
            typeof name !== "string" ||
            !name.trim() ||
            typeof email !== "string" ||
            !email.trim()
        ) {
            return NextResponse.json(
                { error: "Name and Email are required" },
                { status: 400 }
            );
        }

        const result = await pool.query(
            "INSERT INTO students (name, email) VALUES ($1, $2) RETURNING *",
            [name.trim(), email.trim()]
        );

        return NextResponse.json(result.rows[0], { status: 201 });

    } catch {
        return NextResponse.json(
            { error: "Failed to add student" },
            { status: 500 }
        );
    }
}