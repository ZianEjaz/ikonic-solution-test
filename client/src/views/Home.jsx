import React, { useState } from "react";
import TextArea from "../components/FormComponent";
import PreviewComponent from "../components/PreviewComponent";
import OptionsComponent from "../components/OptionsComponent";

const Home = () => {
  // state hooks
  const [questionsText, setQuestionsText] = useState("");
  const [answersText, setAnswersText] = useState("");
  const [optionsArray, setOptionsArray] = useState([]);
  const [questionAnswerObjArr, setQuestionAnswerObjArr] = useState([
    {
      key: 0,
      question: "test question",
      options: [
        {
          1: "1",
          correct: true,
        },
        {
          2: "2",
          correct: false,
        },
        {
          3: "3",
          correct: false,
        },
        {
          4: "4",
          correct: false,
        },
      ],
    },
  ]);

  // const [questionsArray, setQuestionsArray] = useState([])
  // const [answersArray, setAnswersArray] = useState([])

  // functions
  const questionInputHandle = (event) => {
    setQuestionsText(event.target.value);
    // if (event.key === "Enter") {
    //   // setQuestionsArray([...questionsArray, event.target.value]);
    //   setQuestionsText("");
    // }
  };
  const answersInputHandle = (event) => {
    setAnswersText(event.target.value);
  };
  const addOption = () => {
    if(answersText !== ""){

 
    setOptionsArray([
      ...optionsArray,
      {
        option: answersText,
        correct: false,
      },
    ]);
    setAnswersText("");
}
else{
    alert("please enter option")
}
  };

  const submitQuestionAnswer = () => {
    setQuestionAnswerObjArr([
      ...questionAnswerObjArr,
      {
        key: questionAnswerObjArr.length,
        question: questionsText,
        options: optionsArray,
      },
    ]);
  };

  return (
    <div className="flex flex-wrap bg-gray-100 min-h-screen content-center">
      {console.log(
        "🚀 ~ file: Home.jsx ~ line 52 ~ submitQuestionAnswer ~ questionAnswerObjArr",
        optionsArray
      )}
      <aside className="w-full md:w-2/6  bg-gray-100 shadow-xl text-center h-screen md:sticky top-0  ">
        <h2 className="font-bold text-x p-3">Zian's Iknoic Test</h2>
        <div className=" p-5 items-stretch">
          <TextArea
            label="Questions"
            changeFunc={questionInputHandle}
            value={questionsText}
          />
        </div>
        <div className=" p-5">
          <TextArea
            label="Questions"
            changeFunc={answersInputHandle}
            value={answersText}
          />
          
          <button className="border bg-gray-300 rounded p-3 mt-5 w-full hover:bg-gray-400" onClick={addOption}>Add Option</button>
        </div>
      </aside>
      <section className="w-full md:w-4/6 p-5">
        <PreviewComponent
          heading="Question"
          text={questionsText}
          className=""
        />
        <OptionsComponent options={optionsArray} />
        <button className="border bg-gray-300 rounded p-3 mt-5 w-full hover:bg-gray-400" onClick={submitQuestionAnswer}>
          Submit Question and Options
        </button>
      </section>
    </div>
  );
};

export default Home;
