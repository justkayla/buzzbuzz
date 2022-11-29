const { Schema, model } = require("mongoose");

const QuizSchema = new Schema(
    {
        quizname: { type: String },
        questions: [{ type: Object }],
        reviews: [{ type: String }]
    },
    {
        toJSON: {
            getters: true
        },
    }
);

const Quiz = model("Quiz", QuizSchema);
module.exports = Quiz;