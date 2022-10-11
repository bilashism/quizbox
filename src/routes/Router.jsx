import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import Header from "../components/Header/Header";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";
import Topics from "../components/Topics/Topics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Quiz from "../components/Quiz/Quiz";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
    children: [
      {
        path: "/",
        element: (
          <>
            <Header />
            <Topics />
          </>
        )
      },
      {
        path: "home",
        element: (
          <>
            <Header />
            <Topics />
          </>
        )
      },
      { path: "blog", element: <Blog /> },
      { path: "statistics", element: <Statistics /> },
      { path: "topics", element: <Topics /> },
      {
        path: "quiz/:quizId",
        element: <Quiz />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          )
      }
    ],
    errorElement: <ErrorPage />
  }
]);
