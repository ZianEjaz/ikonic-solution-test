const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const QuestionAnswerObj = require("./models/questionsAnswersSchema");

const port = 3001;

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.mongoDbConnect)
  .then((res) => console.log("database connected"))
  .catch((err) => console.log("DB connecton error"));

let questions = [
  {
    key: 0,
    question: "test question",
    options: [
      {
        option: "1",
        correct: false,
      },
      {
        option: "2",
        correct: false,
      },
      {
        option: "3",
        correct: true,
      },
      {
        option: "4",
        correct: false,
      },
    ],
  },
  {
    key: 1,
    question: "test question",
    options: [
      {
        option: "1",
        correct: false,
      },
      {
        option: "2",
        correct: false,
      },
      {
        option: "3",
        correct: true,
      },
      {
        option: "4",
        correct: false,
      },
    ],
  },
  {
    key: 2,
    question: "test question",
    options: [
      {
        option: "1",
        correct: false,
      },
      {
        option: "2",
        correct: false,
      },
      {
        option: "3",
        correct: true,
      },
      {
        option: "4",
        correct: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.status(200).send("api working!!!");
});

app.get("/questions", (req, res) => {
  res.status(200).json(questions);
});

app.post("/questions", (req, res) => {
 const dataArray = {data : req.body}
 
  const postRes = new QuestionAnswerObj(dataArray);
  postRes
    .save()
    .then((res) => console.log("data saved"))
    .catch((err) => console.log("data not saved !!!ERROR", err.errors));
});

app.listen(port, () => console.log(`running on port ${port}`));
