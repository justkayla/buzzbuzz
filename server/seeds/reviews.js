const Review = require("../models/Review");
const connection = require("../config/connection");

const seedReviews = [
    {
        "review": "This quiz is awesome!",
        "user": "marySmith",
        "quizname": "Movie Quiz"
    },
    {
        "review": "This quiz is OK.",
        "user": "joeDoe",
        "quizname": "Movie Quiz"
    },
    {
        "review": "This quiz is awful!",
        "user": "ronJones",
        "quizname": "Movie Quiz"
    },
    
];

const seed = async () => {
  const queryFirst = await Review.find({});
  if (queryFirst && queryFirst.length === 0) {
    console.log("seeding reviews...");

    const seed = await Promise.all(
      seedReviews.map(async (review) => await Review.create(review))
    );
    
    //const seed = await Review.create({ questions: seedReviews })
      
    console.log("seeding done");
    process.exit();
  } else {
    console.log("no seeding needed");
    process.exit();
  }
};

seed();

