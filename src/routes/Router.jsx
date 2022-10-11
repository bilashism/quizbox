import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import Header from "../components/Header/Header";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Header /> },
      { path: "/home", element: <Header /> },
      { path: "/blog", element: <Blog /> },
      { path: "/statistics", element: <Statistics /> }
    ],
    errorElement: <ErrorPage />
  }
]);
