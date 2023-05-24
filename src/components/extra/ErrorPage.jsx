import React from "react";
import { useRouteError } from "react-router-dom";
import errorImg from "../../assets/404.gif"

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={errorImg} alt="" />
      <p className="text-red-700 font-bold text-4xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
