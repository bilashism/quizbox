import React, { useContext } from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { TopicsContext } from "../../../pages/Main/Main";
const Chart = () => {
  const topics = useContext(TopicsContext);
  return (
    <div className="max-w-5xl aspect-video mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={topics}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
