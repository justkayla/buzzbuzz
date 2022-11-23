const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema({
    review: { type: String },
    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Review = model("Review", ReviewSchema);
module.exports = Review;