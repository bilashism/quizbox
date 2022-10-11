import React, { createContext, useContext } from "react";
import { QuestionContext } from "../Questions";
import { toast } from "react-toastify";
import Options from "./Options/Options";
export const QuestionOptionsContext = createContext([]);

const Question = () => {
  const questionData = useContext(QuestionContext);
  const { question, correctAnswer, options } = questionData;
  const showAnswer = () =>
    toast.info(`Correct answer is: ${correctAnswer}`, {
      icon: "✅"
    });

  return (
    <article className="flex flex-col gap-6 bg-slate-200 px-4 py-6">
      <div className="flex gap-8 justify-between">
        <h3 className="text-2xl question-heading">
          {question.replace(/<[^>]*>/gi, "").replace(/\&nbsp;/gi, " ")}
        </h3>
        <div className="">
          <button
            type="button"
            onClick={() => showAnswer()}
            aria-label="Reveal answer"
            title="Reveal answer">
            <span className="sr-only">Reveal answer</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8 fill-blue-600"
              viewBox="0 0 16 16">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
          </button>
        </div>
      </div>
      <QuestionOptionsContext.Provider value={options}>
        <Options></Options>
      </QuestionOptionsContext.Provider>
    </article>
  );
};

export default Question;
