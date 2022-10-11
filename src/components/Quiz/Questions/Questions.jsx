import React, { createContext, useContext } from "react";
import { QuizQuestionsContext } from "../Quiz";
import Question from "./Question/Question";
import { ToastContainer } from "react-toastify";
export const QuestionContext = createContext([]);
import "./Questions.css";
import "react-toastify/dist/ReactToastify.css";

const Questions = () => {
  const quizQuestions = useContext(QuizQuestionsContext);
  return (
    <div className="questions-container grid grid-cols-1 gap-6 py-6">
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
