import React, { useContext } from "react";
import { QuestionContext } from "../Questions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Question = () => {
  const questionData = useContext(QuestionContext);
  const { question, correctAnswer, options } = questionData;
  const showAnswer = () =>
    toast.info(`Correct answer is: ${correctAnswer}`, {
      icon: "✅"
    });
  console.log(questionData);
  return (
    <article className="flex flex-col gap-6">
      <h3 className="text-2xl">{question.replace(/<[^>]*>/gi, "")}</h3>
      <div className="flex flex-wrap gap-8">
        <button type="button" onClick={showAnswer}>
          👁‍🗨
        </button>
        <ToastContainer role="alert" />
      </div>
      <div className="">
        {options.map((option, i) => (
          <div key={i + Math.random()}>{option}</div>
        ))}
      </div>
    </article>
  );
};

export default Question;
