import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TopicContext } from "../Topics";

const Topic = () => {
  const topic = useContext(TopicContext);
  const { id, name, logo, total } = topic;
  return (
    <article className="bg-slate-300 p-6 flex flex-col gap-5">
      <img
        src={logo}
        alt={name}
        loading="lazy"
        width="312"
        height="312"
        decoding="async"
        fetchpriority="low"
      />
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <h3 className="text-4xl break-all">{name}</h3>
        <span className="">questions: {total}</span>
      </div>
      <Link
        to={`../quiz/${id}`}
        type="button"
        className="w-full p-4 text-center font-bold text-xl bg-blue-600 text-white hover:bg-slate-600 transition">
        Take a test
      </Link>
    </article>
  );
};

export default Topic;
