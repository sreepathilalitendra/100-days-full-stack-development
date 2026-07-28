// Day 96 - MongoDB Introduction

const { MongoClient } = require("mongodb");

// Replace with your MongoDB Connection String
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

const databaseName = "fullstackdb";

async function connectDatabase() {

    try {

        await client.connect();

        console.log("✅ Connected to MongoDB");

        const db = client.db(databaseName);

        console.log("Database Name:", db.databaseName);

    } catch (error) {

        console.log("Connection Error:", error);

    } finally {

        await client.close();

        console.log("MongoDB Connection Closed");

    }

}

connectDatabase();