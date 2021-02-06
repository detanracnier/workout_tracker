const mongoose = require("mongoose");
const Workout = require("../models/workout");

module.exports = function (app) {

    // connect to mongoDB
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useUnifiedTopology: true, useNewUrlParser: true });

    // declare and connect to database
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("mongoose connected to DB");
    });

    // returns all workouts
    app.get("/api/workouts/", async (req, res) => {
        try {
            const data = await Workout.find({});
            console.log("GET /api/workouts/ --");
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });

    // update workout based on ID
    app.put("/api/workouts/:id", async (req, res) => {
        let id = req.params.id;
        let info = req.body;
        console.log("PUT /api/workouts/:id --");
        try {
            const data = await Workout.updateOne({ _id: id }, { $push: { exercises: info} });
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });

    // insert empty workout, passed in {} as data and return the new workout ID
    app.post("/api/workouts/", async (req, res) => {
        const workout = req.body;

        try {
            const data = await Workout.create(workout);
            console.log("POST /api/workouts/ --");
            console.log(data);
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });

    // ????
    app.get("/api/workouts/range", async (req, res) => {
       try {
            const data = await Workout.find({});
            console.log("GET /api/workouts/ --");
            console.log(data);
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });

}