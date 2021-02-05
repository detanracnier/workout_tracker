const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Type is required"
    },

    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },

    weight: {
        type: Number,
        min:[0]
    },

    sets: {
        type: Number,
        min:[0]
    },

    reps: {
        type: Number,
        min:[0]
    },

    duration: {
        type: Number,
        min:[0]
    },

    distance: {
        type: Number,
        min:[0]
    },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;