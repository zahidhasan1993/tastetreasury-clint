import React from "react";
import { useQuery } from "react-query";
import AllUsersTable from "./AllUsersTable";
import BannnerTitle from "../../banner/BannnerTitle";
import { TitleChange } from "../../../customHooks/titleChange";
import Swal from "sweetalert2";

const AllUsers = () => {
  TitleChange("Allusers | TasteTreasury");
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, Make ${user.name} Admin !!!` ,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount){
              Swal.fire(
                `${user.name} is now Admin`
              )
              refetch();
              
            }
          });
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, Delete This User` ,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire(
                'User Deleted'
              )
              refetch();
            }
          });
      }
    });
  }

  return (
    <div className="w-full">
      <BannnerTitle
        smallText="How many??"
        mainText="MANAGE ALL USERS"
      ></BannnerTitle>
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold">Total users: {users.length}</h1>
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <AllUsersTable
                key={user._id}
                data={user}
                handleMakeAdmin={handleMakeAdmin}
                index={index}
                handleDelete={handleDelete}
              ></AllUsersTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
