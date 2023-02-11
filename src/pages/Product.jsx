import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const productApi = "http://localhost:3000/posts ";
  const [productData, setProductData] = useState([]);

  function getDataProducts() {
    axios.get(productApi).then((res) => setProductData(res.data));
  }
  useEffect(() => {
    getDataProducts();
  }, [productApi]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-fit">
      {productData.map((value) => {
        const { id, title, price, image, description } = value;
        return (
          <div key={id}>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={image}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {price}
                  </span>
                  <Link
                  to={`/viewProduct/${id}}`}
                  state={value}
                    // to={{
                    //   pathname: `/viewProduct/${id}}`,
                    //   state: value
                    // }}
                    className="text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View
                  </Link>

                  {/* <button
                    onClick={openProduct}
                    className="text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                  
                    View
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      1
    </div>
  );
}

export default Product;
