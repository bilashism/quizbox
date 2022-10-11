import React, { createContext, useContext, useState } from "react";
import { QuizQuestionsContext } from "../Quiz";
import Question from "./Question/Question";
export const QuestionContext = createContext([]);
const Questions = () => {
  const quizQuestions = useContext(QuizQuestionsContext);

  return (
    <div className="">
      {quizQuestions.map(question => (
        <QuestionContext.Provider value={question} key={question.id}>
          <Question></Question>
        </QuestionContext.Provider>
      ))}
    </div>
  );
};

export default Questions;
