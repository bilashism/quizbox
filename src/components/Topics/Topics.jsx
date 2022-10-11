import React, { createContext, useContext } from "react";
import { TopicsContext } from "../../pages/Main/Main";
import Topic from "./Topic/Topic";
export const TopicContext = createContext({});

const Topics = () => {
  const topics = useContext(TopicsContext);
  return (
    <section className="px-4 pt-8 lg:pt-20 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto py-24">
        <h2 className="text-6xl text-center pb-10 lg:pb-20">
          Take any quiz you want out of{" "}
          <b className="text-blue-600">{topics.length}</b> quizzes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* passing dynamic data to topic */}
          {topics.map(topic => (
            <TopicContext.Provider key={topic.id} value={topic}>
              <Topic />
            </TopicContext.Provider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
