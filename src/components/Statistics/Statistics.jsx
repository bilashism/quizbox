import React, { useContext } from "react";
import { TopicsContext } from "../../pages/Main/Main";
import Chart from "./Chart/Chart";

const Statistics = () => {
  const topics = useContext(TopicsContext);
  console.log(topics);
  return (
    <section className="pt-8 lg:pt-20 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto py-24 md:flex-row flex-col items-center">
        <h2 className="text-4xl pb-12 text-center">
          Topics and Questions Statistics
        </h2>
        <Chart></Chart>
      </div>
    </section>
  );
};

export default Statistics;
