import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'

const DcartTable = ({cart,refetch}) => {
  // console.log(refetch);
  const {image,name,price} = cart;
  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${item._id}`,{
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          refetch()
          if (data.acknowledged) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })       
      }
      
    })

  }
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </div>
      </td>
      <td>
        {name}
        
      </td>
      <td>${price}</td>
      <th>
        <button onClick={() => handleDelete(cart)} className="btn btn-outline btn-circle btn-error "><FaTrashAlt></FaTrashAlt></button>
      </th>
    </tr>
  );
};

export default DcartTable;
