import React from "react";
import { Link } from "react-router-dom";

const Topic = props => {
  const { id, name, logo, total } = props.topic;
  return (
    <article className="bg-slate-300 p-6 flex flex-col gap-5">
      <img src={logo} alt={name} />
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <h3 className="text-4xl break-all">{name}</h3>
        <span className="">quiz: {total}</span>
      </div>
      <Link
        to={`../quiz/${id}`}
        type="button"
        className="w-full p-4 bg-blue-600 text-white hover:bg-slate-600 transition">
        take a test
      </Link>
    </article>
  );
};

export default Topic;
