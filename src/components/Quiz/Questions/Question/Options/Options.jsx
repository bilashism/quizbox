import React, { useContext } from "react";
import { QuestionContext } from "../../Questions";
import { QuestionOptionsContext } from "../Question";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Options = () => {
  const questionOptions = useContext(QuestionOptionsContext);
  const { correctAnswer, id } = useContext(QuestionContext);
  const rightAnswer = () =>
    toast.info(`Your answer is right`, {
      icon: "👏"
    });

  const wrongAnswer = () =>
    toast.info(`Your answer is wrong`, {
      icon: "👎"
    });

  return (
    <div className="pl-6 list-decimal flex flex-col gap-2">
      {questionOptions.map((option, i) => (
        <label
          key={i + Math.random()}
          className="cursor-pointer hover:text-blue-600 transition-colors flex flex-wrap gap-3 items-center">
          <input
            type="radio"
            name={`option-${id}`}
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            onChange={option === correctAnswer ? rightAnswer : wrongAnswer}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Options;
