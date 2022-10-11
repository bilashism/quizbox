import React, { useContext, useState } from "react";
import { QuestionContext } from "../Questions";

const Question = () => {
  const questionData = useContext(QuestionContext);
  const { question, correctAnswer, options } = questionData;
  const [revealAnswer, setRevealAnswer] = useState(false);
  console.log(questionData);
  return (
    <article className="flex flex-col gap-6">
      <div className="flex flex-wrap">
        <h3 className="text-2xl">{question.replace(/<[^>]*>/gi, "")}</h3>
        <div className="">
          <button type="button" onClick={() => setRevealAnswer(!revealAnswer)}>
            👁‍🗨
          </button>
          {revealAnswer && <p>{correctAnswer}</p>}
        </div>
      </div>
      <div className="">
        {options.map(option => (
          <div>{option}</div>
        ))}
      </div>
    </article>
  );
};

export default Question;
