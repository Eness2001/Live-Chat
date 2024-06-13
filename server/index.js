const express = require("express");
const cors = require("cors");
const { connectMongoDB } = require("./config/db");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
connectMongoDB();

const port = process.env.PORT | 5000;
app.listen(port, (req, res) => {
  console.log(`Server running on port : ${port}`);
});
