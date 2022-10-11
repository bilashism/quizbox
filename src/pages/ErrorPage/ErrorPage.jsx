import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="container mx-auto">
      <h2>ErrorPage</h2>
      {error.status || error.statusText}
      <div className="">
        <Link to="/home" className="hover:underline text-blue-600">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
