import axios from "axios";
import { useEffect, useState } from "react";

function Product() {
  const productApi = "https://fakestoreapi.com/products";
  const [productData, setProductData] = useState([]);
  function getDataProducts() {
    axios.get(productApi).then((res) => setProductData(res.data));
  }

  useEffect(() => {
    getDataProducts();
  }, [productApi]);



  // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  //     {products.map(product => (
  //       <div key={product.id} className="bg-white p-6 shadow-lg rounded-lg">
  //         <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
  //         <h2 className="text-lg font-medium mt-4">{product.name}</h2>
  //         <p className="text-gray-600 mt-2">{product.description}</p>
  //         <p className="text-red-600 font-medium mt-4">${product.price}</p>
  //       </div>

  return (
    <div>
      {productData.map((value) => {
        const { id, title, price, description, category, image } = value;
        return (
          <div key={id} className="grid grid-cols-4 gap-4">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="p-8 rounded-t-lg"
                  src={image}
                  alt="product image"
                />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">
                    {price}
                  </span>
                  <a
                    href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
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
