const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Mongo connected");

  app.listen(5000, () => {
    console.log("Server running on 5000");
  });
});
