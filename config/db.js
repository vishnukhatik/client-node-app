const mongoose = require("mongoose");
const config = require("config");
const db =
  "mongodb://khatikvishnu111:admin@ac-2olohpq-shard-00-00.akfkbxi.mongodb.net:27017,ac-2olohpq-shard-00-01.akfkbxi.mongodb.net:27017,ac-2olohpq-shard-00-02.akfkbxi.mongodb.net:27017/devconnector?ssl=true&replicaSet=atlas-3285ul-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
