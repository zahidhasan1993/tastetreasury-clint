import React, { useContext } from "react";
import googlebtn from "../../assets/images.png";
import { DataProvider } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { userGoogleLogin } = useContext(DataProvider);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    userGoogleLogin()
      .then((result) => {
        const loggedUser = result.user;
        const user = { name: loggedUser.displayName, email: loggedUser.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
          
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <img src={googlebtn} onClick={handleGoogleLogin} alt="" />
    </>
  );
};

export default GoogleLogin;
