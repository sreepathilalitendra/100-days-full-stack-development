const express = require("express");

const router = express.Router();

// Get All Users

router.get("/", (req, res) => {

    res.json({

        message: "All Users",

        users: ["Rahul", "Sai", "Ajay"]

    });

});

// Get User by ID

router.get("/:id", (req, res) => {

    res.json({

        message: "User Details",

        userId: req.params.id

    });

});

module.exports = router;