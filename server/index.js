const express = require("express");
const app = express();
var cors = require("cors");

const port = 3001;

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
app.use(cors());

let questions = [
  {
    key: 0,
    question: "test question 1",
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
    question: "test question 2",
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
    question: "test question 3",
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
  questions = res.body;
  console.log(req.body);
});

app.listen(port, () => console.log(`running on port ${port}`));
