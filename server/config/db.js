const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.ATLAS_URL;
const connectMongoDB = async () => {
  await mongoose
    .connect(uri)
    .then(() => console.log("MongoDB Connection Successful"))
    .catch((err) => console.log("MongoDB Connection Error", err));
};

module.exports = { connectMongoDB };
