import React, { useContext, useEffect } from "react";
import { TitleChange } from "../../titleChange";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Lottie from "react-lottie";
import loginLottie from "../../assets/lotties/login.json";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { DataProvider } from "../providers/AuthProvider";

const Login = () => {
  TitleChange("Login | TasteTreasury");
  const {userLogin} = useContext(DataProvider);

  const defaultOptions = {
    loop: true, // Set it to true if you want the animation to loop
    autoplay: true, // Set it to true to start playing the animation as soon as it's ready
    animationData: loginLottie, // The imported animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Adjust the aspect ratio as needed
    },
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;

    if (validateCaptcha(captcha)) {
      userLogin(email,password)
      .then(result => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User Login Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        form.reset();
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Captcha is not correct",
      });
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/2">
          <Lottie options={defaultOptions} />
        </div>
        <div className="card md:w-1/2 shadow-2xl bg-base-100">
          <h1 className="text-center text-3xl font-bold py-8 underline">
            Login Here
          </h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                placeholder="Type Captcha here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline border-0 border-b-4 text-black hover:bg-black hover:border-none hover:text-white">
                Login
              </button>
            </div>
            <p className="mt-8">New to TasteTreasury <Link to="/register" className="text-blue-600">Register Here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
