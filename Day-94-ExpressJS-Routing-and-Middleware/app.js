const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();

const PORT = 3000;

// Middleware

app.use(express.json());

app.use((req, res, next) => {

    console.log(`${req.method} ${req.url}`);

    next();

});

// Home Route

app.get("/", (req, res) => {

    res.send("Welcome to Express Routing & Middleware");

});

// User Routes

app.use("/users", userRoutes);

// Query Parameter Example

app.get("/search", (req, res) => {

    const keyword = req.query.keyword;

    res.json({

        search: keyword

    });

});

// Start Server

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});