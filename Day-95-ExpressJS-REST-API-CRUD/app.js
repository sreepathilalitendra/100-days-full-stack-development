// Day 95 - Express.js REST API (CRUD)

const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

// Sample Data

let students = [

    { id: 1, name: "Rahul", course: "HTML" },

    { id: 2, name: "Sai", course: "CSS" }

];

// GET - All Students

app.get("/students", (req, res) => {

    res.json(students);

});

// GET - Student by ID

app.get("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {

        return res.status(404).json({

            message: "Student not found"

        });

    }

    res.json(student);

});

// POST - Add Student

app.post("/students", (req, res) => {

    const newStudent = {

        id: students.length + 1,

        name: req.body.name,

        course: req.body.course

    };

    students.push(newStudent);

    res.status(201).json(newStudent);

});

// PUT - Update Student

app.put("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {

        return res.status(404).json({

            message: "Student not found"

        });

    }

    student.name = req.body.name;

    student.course = req.body.course;

    res.json(student);

});

// DELETE - Remove Student

app.delete("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    students = students.filter(student => student.id !== id);

    res.json({

        message: "Student deleted successfully"

    });

});

// Start Server

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});