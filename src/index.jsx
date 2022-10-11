import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Route } from "react-router-dom";
import { router } from "./routes/Router";
import "./index.css";
// import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
