# PostgreSQL Student Management App

A full-stack Student Management application built using **Next.js App Router**, **TypeScript**, and **PostgreSQL**. The application demonstrates how to perform database operations through API routes and display student records in a modern web interface.

## Project Overview

This project provides a simple example of integrating a PostgreSQL database with a Next.js application. It allows users to manage student information and demonstrates server-side database connectivity, API development, and frontend rendering.

The application uses:

- Next.js 15
- TypeScript
- PostgreSQL
- App Router
- Server-side API Routes

---

## Features

- Modern Next.js App Router architecture
- PostgreSQL database integration
- REST-style API endpoints
- View student records
- Database connection management
- Environment variable configuration
- TypeScript support
- Scalable folder structure

---

## Project Structure

```text
postgre-sql-app/
│
├── app/
│   ├── api/
│   │   └── students/
│   │       └── route.ts
│   │
│   ├── students/
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── lib/
│   └── db.ts
│
├── public/
│
├── .env
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- CSS

### Backend

- Next.js API Routes
- Node.js

### Database

- PostgreSQL

### Development Tools

- ESLint
- npm

---

## Prerequisites

Before running the project, ensure the following software is installed:

- Node.js (v18 or later)
- npm
- PostgreSQL
- Git

Verify installation:

```bash
node -v
npm -v
psql --version
```

---

## Database Setup

### Step 1: Create Database

Open PostgreSQL and run:

```sql
CREATE DATABASE studentdb;
```

---

### Step 2: Connect to Database

```sql
\c studentdb
```

---

### Step 3: Create Students Table

```sql
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    course VARCHAR(100),
    email VARCHAR(150)
);
```

---

### Step 4: Insert Sample Data

```sql
INSERT INTO students (name, course, email)
VALUES
('Rahul Kumar','MCA','rahul@example.com'),
('Anjali Sharma','MCA','anjali@example.com'),
('Amit Singh','BCA','amit@example.com');
```

---

## Environment Configuration

Create a `.env` file in the root directory.

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=studentdb
```

Replace the values with your PostgreSQL configuration.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/itzsonu/postgre-sql-app.git
```

Move into the project directory:

```bash
cd postgre-sql-app
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## API Endpoints

### Get Student Records

```http
GET /api/students
```

#### Example Response

```json
[
  {
    "student_id": 1,
    "name": "Rahul Kumar",
    "course": "MCA",
    "email": "rahul@example.com"
  }
]
```

---

### Future Enhancements

The project can be extended to support:

- Add Student
- Update Student
- Delete Student
- Search Student
- Pagination
- Authentication
- Role-Based Access Control
- Dashboard Analytics

---

## Database Connection Flow

```text
Browser
   │
   ▼
Next.js Page
   │
   ▼
API Route
   │
   ▼
db.ts
   │
   ▼
PostgreSQL Database
```

---

## Screenshots

Add screenshots of:

- Home Page
- Student List Page
- PostgreSQL Database
- API Response
- Project Structure

Example:

```md
![Home Page](screenshots/home.png)
![Students Page](screenshots/students.png)
```

---

## Learning Outcomes

Through this project, users will learn:

- Next.js App Router fundamentals
- API Route development
- PostgreSQL integration
- Database connectivity in Node.js
- Environment variable management
- TypeScript development
- Full-stack application architecture

---

## Author

**Sonu**

MCA Student, PES University Bengaluru

GitHub:

https://github.com/itzsonu

---

## License

This project is developed for educational and learning purposes.

MIT License
