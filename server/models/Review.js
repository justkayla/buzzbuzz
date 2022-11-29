const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema(
    {
        review: { type: String },
        user:
        {
            type: Schema.Types.String,
            ref: 'user'
        },
        quizname:
        {
            type: Schema.Types.String,
            ref: 'quiz'
        }
    },
    {
        toJSON: {
            getters: true
        },
    }
);

const Review = model("Review", ReviewSchema);
module.exports = Review;