import React, { useContext } from "react";
import { TopicsContext } from "../../pages/Main/Main";
import Topic from "./Topic/Topic";

const Topics = () => {
  const topics = useContext(TopicsContext);
  console.log(topics);
  return (
    <section className="px-4">
      <div className="container mx-auto py-24">
        <h2 className="text-6xl text-center pb-10 lg:pb-20">
          Take any quiz you want
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map(topic => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
