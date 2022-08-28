import React, { useState } from "react";
import TextArea from "../components/FormComponent";
import PreviewComponent from "../components/PreviewComponent";
import OptionsComponent from "../components/OptionsComponent";
import { ToastContainer, toast } from "react-toastify";
import AllQuestions from "../components/AllQuestions";

const Home = () => {
  // state hooks
  const [questionsText, setQuestionsText] = useState("");
  const [answersText, setAnswersText] = useState("");
  const [submitBtnText, setSubmitBtnText] = useState(
    "Submit Question and Options"
  );
  const [edit, setEdit] = useState(false);
  const [editKey, setEditKey] = useState();
  const [questionAnswerObjArr, setQuestionAnswerObjArr] = useState([
    // {
    //   key: 0,
    //   question: "test question",
    //   options: [
    //     {
    //       option: "1",
    //       correct: false,
    //     },
    //     {
    //       option: "2",
    //       correct: false,
    //     },
    //     {
    //       option: "3",
    //       correct: true,
    //     },
    //     {
    //       option: "4",
    //       correct: false,
    //     },
    //   ],
    // },
  ]);
  const [optionsArray, setOptionsArray] = useState(
    // questionAnswerObjArr[0].options
    []
  );

  // const [questionsArray, setQuestionsArray] = useState([])
  // const [answersArray, setAnswersArray] = useState([])

  // functions
  const questionInputHandle = (event) => {
    setQuestionsText(event.target.value);
  };
  const answersInputHandle = (event) => {
    setAnswersText(event.target.value);
  };
  const addOption = () => {
    if (answersText !== "") {
      setOptionsArray([
        ...optionsArray,
        {
          option: answersText,
          correct: false,
        },
      ]);
      setAnswersText("");
    } else {
      alert("please enter option");
    }
  };

  const getCorrectOption = (value) => {
    setOptionsArray(
      optionsArray.map((item) => {
        if (item.option === value) {
          item.correct = true;
          return item;
        } else {
          item.correct = false;
          return item;
        }
      })
    );
  };

  const submitQuestionAnswer = () => {

// edit logic
if(edit === true){
  
  questionAnswerObjArr[editKey] = {
    key: questionAnswerObjArr.length,
    question: questionsText,
    options: optionsArray,
  }
  setEdit(false)

}
else if (questionsText === "" || optionsArray.length < 1) {
      toast.error("Please fill all Fields", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setQuestionAnswerObjArr(() => [
        ...questionAnswerObjArr,
        {
          key: questionAnswerObjArr.length,
          question: questionsText,
          options: optionsArray,
        },
      ]);

      toast.success("Question Added", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      
    }
    // setting default values
    setQuestionsText("");
    setOptionsArray([]);
  };

  const getEditKey = (key) => {
    setEdit(true);
    setEditKey(key);
    const selectedObj = questionAnswerObjArr[key];
    setSubmitBtnText("Save Edited Question");
    setQuestionsText(selectedObj.question);
    setOptionsArray(selectedObj.options);
  };

  return (
    <div className="flex flex-wrap bg-gray-100 min-h-screen content-center">
      <ToastContainer />
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
            label="Options"
            changeFunc={answersInputHandle}
            value={answersText}
          />

          <button
            className="border bg-gray-300 rounded p-3 mt-5 w-full hover:bg-gray-400"
            onClick={addOption}
          >
            Add Option
          </button>
        </div>
      </aside>
      <section className="flex md:w-4/6">
        <div className="w-full  p-5">
          {" "}
          Total questions : {questionAnswerObjArr.length}
          <PreviewComponent
            heading="Question"
            text={questionsText}
            className="border-b mb-5"
          />
          <h2 className="font-bold text-x p-3">
            Please Choose a correct answer
          </h2>
          <OptionsComponent options={optionsArray} func={getCorrectOption} />
          <button
            className="border bg-green-500 rounded-xl p-3 mt-5 enabled:hover:bg-gray-400 disabled:disabled disabled:cursor-not-allowed disabled:bg-red-500"
            onClick={submitQuestionAnswer}
            disabled={
              questionsText === "" || optionsArray.length < 1 ? true : false
            }
          >
            {questionsText === "" || optionsArray.length < 1
              ? "Please fill all the fields"
              : submitBtnText}
          </button>
        </div>
        <div className="p-5 shadow-xl w-1/3 overflow-scroll h-screen">
          <h2 className="font-bold text-x p-3">Questions Added</h2>
          <AllQuestions data={questionAnswerObjArr} getEditKey={getEditKey} />
        </div>
      </section>
    </div>
  );
};

export default Home;
