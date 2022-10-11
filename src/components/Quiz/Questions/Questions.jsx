import React, { createContext, useContext, useState } from "react";
import { QuizQuestionsContext } from "../Quiz";
import Question from "./Question/Question";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const QuestionContext = createContext([]);

const Questions = () => {
  const quizQuestions = useContext(QuizQuestionsContext);
  console.log(quizQuestions);
  return (
    <div className="">
      {quizQuestions.map(question => (
        <QuestionContext.Provider value={question} key={question.id}>
          <Question></Question>
        </QuestionContext.Provider>
      ))}
      <ToastContainer role="alert" />
    </div>
  );
};

export default Questions;
