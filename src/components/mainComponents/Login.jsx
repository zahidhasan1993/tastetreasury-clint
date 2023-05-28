import React from "react";
import { TitleChange } from "../../titleChange";
import Lottie from 'react-lottie';
import loginLottie from "../../assets/lotties/login.json"



const Login = () => {
  TitleChange("Login | TasteTreasury");

  const defaultOptions = {
    loop: true, // Set it to true if you want the animation to loop
    autoplay: true, // Set it to true to start playing the animation as soon as it's ready
    animationData: loginLottie, // The imported animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' // Adjust the aspect ratio as needed
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password);
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
        <Lottie options={defaultOptions} />
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
            <h1 className="text-center text-3xl font-bold py-8 underline">Login Here</h1>
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
            <div className="form-control mt-6">
              <button className="btn btn-outline border-0 border-b-4 text-black hover:bg-black hover:border-none hover:text-white">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
