import React, { createContext, useContext } from "react";
import { QuizQuestionsContext } from "../Quiz";
import Question from "./Question/Question";
import { ToastContainer } from "react-toastify";
export const QuestionContext = createContext([]);
import "./Questions.css";
import "react-toastify/dist/ReactToastify.css";

const Questions = () => {
  const quizQuestions = useContext(QuizQuestionsContext);
  console.log(quizQuestions);
  return (
    <div className="questions-container">
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
