import React from "react";
import { FaTrashAlt, FaUserShield, FaUsers } from "react-icons/fa";
const AllUsersTable = ({ data, index, handleMakeAdmin,handleDelete }) => {
  const { email, name } = data;
  
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {data.role === "admin" ? (
          <button className="btn btn-outline btn-square btn-warning">
            <FaUserShield></FaUserShield>
          </button>
        ) : (
          <button onClick={() => handleMakeAdmin(data)} className="btn btn-outline btn-square btn-warning">
            <FaUsers></FaUsers>
          </button>
        )}
      </td>
      <td>
        <button onClick={() => handleDelete(data._id)} className="btn btn-outline btn-circle btn-error">
          <FaTrashAlt></FaTrashAlt>
        </button>
      </td>
    </tr>
  );
};

export default AllUsersTable;
