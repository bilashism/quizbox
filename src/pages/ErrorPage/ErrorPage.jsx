import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="container mx-auto">
      <h2>ErrorPage</h2>
      {error.status || error.statusText}
    </div>
  );
};

export default ErrorPage;
