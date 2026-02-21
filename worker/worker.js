const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo:27017/microdb");

const Job = mongoose.model("Job", { task: String });

setInterval(async () => {
  const jobs = await Job.find();
  console.log("Worker checking jobs:", jobs.length);
}, 5000);

