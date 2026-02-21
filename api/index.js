const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/microdb");

const Job = mongoose.model("Job", { task: String });

app.get("/", (req, res) => {
  res.send("Microservices API 🚀");
});

app.post("/jobs", async (req, res) => {
  const job = await Job.create(req.body);
  res.json(job);
});

app.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

app.listen(3000, "0.0.0.0");

