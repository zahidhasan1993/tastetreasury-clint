import React from "react";
import { useForm } from "react-hook-form";
import BannnerTitle from "../../banner/BannnerTitle";
import { TitleChange } from "../../../customHooks/titleChange";

const AddItems = () => {
  TitleChange("Additem | TasteTreasury");
  const imgAPI = import.meta.env.VITE_imgapikey;
  const { register, handleSubmit } = useForm();
  const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${imgAPI}`
  console.log(imgAPI);
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0])
    fetch(`${imgUploadUrl}`,{
      method:'POST',
      body: formData
    })
    .then(res => res.json())
    .then(image => console.log(image))
  };

  return (
    <div className="w-full">
      <BannnerTitle mainText="ADD AN ITEM" smallText="whats new"></BannnerTitle>
      <div className=" bg-[#F3F3F3] p-10 rounded-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:grid md:grid-cols-2 md:gap-10"
        >
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text font-bold">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Pick Food Category</span>
            </label>
            <select
              className="select select-bordered text-base"
              defaultValue='Pick One'
              {...register("category", { required: true })}
            >
              <option disabled>
                Pick one
              </option>
              <option>Salad</option>
              <option>Pizza</option>
              <option>Soups</option>
              <option>Desserts</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Price*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
          </div>
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text font-bold">Recipe Details</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
              {...register("recipe", { required: true })}
            ></textarea>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full md:col-span-2 max-w-sm"
            {...register("image", { required: true })}
          />
          <input
            type="submit"
            className="btn bg-amber-700 hover:bg-amber-600 w-[100px]"
            placeholder="Add Items"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
