// Day 96 - MongoDB Introduction

require("dotenv").config();

const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URI;

const client = new MongoClient(url);

const databaseName = process.env.DATABASE_NAME;

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