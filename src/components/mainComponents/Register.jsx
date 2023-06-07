import React, { useContext, useEffect } from "react";
import Lottie from "react-lottie";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import registerLottie from "../../assets/lotties/register.json";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { DataProvider } from "../providers/AuthProvider";
import { TitleChange } from "../../customHooks/titleChange";
import { useForm } from "react-hook-form";
import GoogleLogin from "../shared/GoogleLogin";

const Register = () => {
  TitleChange("Register | TasteTreasury");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { newUserCreate, userUpdate } = useContext(DataProvider);
  const onSubmit = (data, e) => {
    const form = e.target;
    if (validateCaptcha(data.captcha)) {
      newUserCreate(data.email, data.password)
        .then(() => {
          form.reset();
          userUpdate(data.name, data.photo)
            .then(() => {
              const user = { name: data.name, email: data.email};
              fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.insertedId) {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Account Created Successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate("/order");
                  }
                });
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
              });
            });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Captcha is not correct",
      });
    }
  };

  const defaultOptions = {
    loop: true, // Set it to true if you want the animation to loop
    autoplay: true, // Set it to true to start playing the animation as soon as it's ready
    animationData: registerLottie, // The imported animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Adjust the aspect ratio as needed
    },
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/2">
          <Lottie options={defaultOptions} />
        </div>
        <div className="card md:w-1/2 shadow-2xl bg-base-100">
          <h1 className="text-center text-3xl font-bold py-8 underline">
            Register Here
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="text-red-700">
                  Name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-700">
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                type="text"
                {...register("photo")}
                name="photo"
                placeholder="Your picture url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-700">
                  Password is required
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p role="alert" className="text-red-700">
                  Password should be in 20 charecters
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p role="alert" className="text-red-700">
                  Password must be atleast 6 charecters
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                {...register("captcha")}
                name="captcha"
                placeholder="Type Captcha here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline border-0 border-b-4 text-black hover:bg-black hover:border-none hover:text-white">
                Register
              </button>
              <GoogleLogin></GoogleLogin>
            </div>
            <p className="mt-8">
              All ready have an account{" "}
              <Link to="/login" className="text-blue-600">
                Login Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
