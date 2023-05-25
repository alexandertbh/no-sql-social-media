const connection = require("../config/connection");
const { User, Post } = require("../models");
const { getRandomName } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await Post.deleteMany({});

  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 15; i++) {
    const userName = getRandomName();

    users.push({ userName });
  }

  await User.collection.insertMany(users);

  console.table(users);
  console.info("SEEDING IS DONE!");
  process.exit(0);
});
