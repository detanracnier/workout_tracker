const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// import models here
const Workouts = require("./models/workouts");

//create express app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup public static pages
app.use(express.static("public"));

// connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

app.get("/", (req, res) => {
    
});

// returns all workouts
app.get("/api/workouts/", (req, res) => {


    // res placeholder
    res.json({});
});

// update workout based on ID
app.put("/api/workouts/:id", (req, res) => {

    // res placeholder
    res.json({});
});

// insert empty workout, passed in {} as data and return the new workout ID
app.post("/api/workouts/", (req, res) => {

    // res placeholder
    res.json({});
});

// ????
app.get("/api/workouts/range", (req, res) => {

    // res placeholder
    res.json({});
});

app.listene(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})