const User = require("../models/User");
const connection = require("../config/connection");

const seedUsers = [
  {
    username: "marySmith",
    email: "msmith@gmail.com",
    password: "msmith"
  },
  {
    username: "joeDoe",
    email: "jdoe@gmail.com",
    password: "jdoe"
  },
  {
    username: "ronJones",
    email: "rjones@gmail.com",
    password: "rjones"
  },
  {
    username: "harryMiles",
    email: "hmiles@gmail.com",
    password: "hmiles"
  },
  {
    username: "benSchmidt",
    email: "bschmidt@gmail.com",
    password: "bschmidt"
  },
];

const seed = async () => {
  const queryFirst = await User.find({});
  if (queryFirst && queryFirst.length === 0) {
    console.log("seeding users...");

    const seed = await Promise.all(
      seedUsers.map(async (user) => await User.create(user))
    );

    console.log("seeding done");
    process.exit();
  } else {
    console.log("no seeding needed");
    process.exit();
  }
};

seed();
