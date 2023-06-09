import React from "react";
import BannnerTitle from "../../banner/BannnerTitle";
import useMenu from "../../../customHooks/useMenu";
import { FaBuffer, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../customHooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
  const { items, refetch } = useMenu();
  const axios = useAxiosSecure();
  //   console.log(items);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/menu/${id}`).then((data) => {
          if (data.data.acknowledged) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          }
        });
        
      }
    });
  };
  return (
    <div className="w-full">
      <BannnerTitle
        mainText="MANAGE ALL ITEMS"
        smallText="Hurry Up"
      ></BannnerTitle>
      <div className="">
        <h1 className="text-3xl font-semibold my-10">
          Total Items: {items.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Edit Items</th>
                <th>Delete Items</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <>
                  <tr key={item._id}>
                    <th>
                      <p>{index + 1}</p>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <button className="btn btn-outline btn-circle btn-warning">
                        <FaBuffer></FaBuffer>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-outline btn-circle btn-error"
                      >
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
