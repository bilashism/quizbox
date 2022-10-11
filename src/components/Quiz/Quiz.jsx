import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions/Questions";
export const QuizQuestionsContext = createContext({});
const Quiz = () => {
  const { data: quizData } = useLoaderData();
  const { name, total, questions } = quizData;
  return (
    <QuizQuestionsContext.Provider value={questions}>
      <section className="px-4 pt-8 lg:pt-20 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto py-24">
          <h2 className="text-4xl lg:text-6xl text-center pb-10  ">
            Answer <span className="text-blue-600">{name}</span> quizzes
          </h2>
          <p className="text-center pb-8 text-lg">
            Total number of questions: <b className="text-blue-600">{total}</b>
          </p>
          <Questions></Questions>
        </div>
      </section>
    </QuizQuestionsContext.Provider>
  );
};

export default Quiz;
