import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export const TopicsContext = createContext([]);
const Main = () => {
  const { data: topics } = useLoaderData();
  return (
    <TopicsContext.Provider value={topics}>
      <Navbar />
      <Outlet />
      <Footer />
    </TopicsContext.Provider>
  );
};

export default Main;
