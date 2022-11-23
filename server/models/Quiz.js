const { Schema, model } = require("mongoose");

const QuizSchema = new Schema({
    questions: [
        { type: String }
    ],
    choices: [
        [
            { type: String }
        ]
    ],
    answers: [
        { type: String }
    ],
    reviews: [
        { type: String}
    ]
});

const Quiz = model("Quiz", QuizSchema);
module.exports = Quiz;