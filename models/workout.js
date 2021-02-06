const { model, Schema } = require("mongoose");

const WorkoutSchema = Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },

            name: {
                type: String,
                trim: true
            },

            weight: {
                type: Number,
                min: [0]
            },

            sets: {
                type: Number,
                min: [0]
            },

            reps: {
                type: Number,
                min: [0]
            },

            duration: {
                type: Number,
                min: [0]
            },

            distance: {
                type: Number,
                min: [0]
            }
        }
    ]
}, { toJSON: { virtuals: true } });

WorkoutSchema.virtual("totalDuration").get(function () {
    let totalDuration = 0;
    this.exercises.forEach(e => {
        totalDuration += e.duration;
    });
    return totalDuration;
});

const Workout = model("Workout", WorkoutSchema);

module.exports = Workout;