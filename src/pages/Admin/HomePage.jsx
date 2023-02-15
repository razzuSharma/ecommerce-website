import React from "react";
import useApi from "../useApi";
function HomePage() {
  const { productData, isLoading, error } = useApi(
    "http://localhost:3000/posts"
  );
  console.log(productData);
  return (
    <div>
      <h1 className="text-center text-2xl text-bold m-5">
        These are products:
      </h1>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>

              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
