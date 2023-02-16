import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../useApi";
// import UpdateData from "./UpdateData";
function HomePage() {
  const { productData, setProductData, isLoading, error } = useApi(
    "http://localhost:3000/posts"
  );

  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.clear();
    navigate('/login')

  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        // Filter the deleted row from the data and update the state
        setProductData(productData.filter((row) => row.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting row:", error);
      });
  };
  return (
    <div>
      <h1 className="text-center text-2xl text-bold m-5">
        These are products:
      </h1>
      <div className="flex justify-center align-center">
        <button
          className="bg-red-500 hover:bg-red-700 items-center justify-center  text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productData.map((val) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={val.id}
              >
                <td className="px-6 py-4">{val.id}</td>
                <td className="px-6 py-4">{val.title}</td>
                <td className="px-6 py-4">{val.category}</td>
                <td className="px-6 py-4">{val.price}</td>
                <td>
                  <div className="flex">
                    <Link
                      to={`/admin/update/${val.id}`}
                      state={val}
                      className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(val.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
