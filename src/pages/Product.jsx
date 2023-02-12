import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbars from "./Navbars";

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
    <div className="bg-white">
      <Navbars/>
      <h1 className="text-center text-2xl">These are some products</h1>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {productData.map((value)=>{
          const {id, title, price, image, description} = value;
          return (
            <div>
          <Link 
          to={`/viewProduct/${id}`} 
          className="group"
          state={value}
          >
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={image}
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
          </Link>
        </div>
        
          )
        })}
</div>
        
      </div>
    </div>

   
  );
}

export default Product;



 // <div classNameName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-fit">
    //   {productData.map((value) => {
    //     const { id, title, price, image, description } = value;
    //     return (
    //       <div key={id}>
    //         <div classNameName="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //           <a href="#">
    //             <img
    //               classNameName="p-8 rounded-t-lg"
    //               src={image}
    //               alt="product image"
    //             />
    //           </a>
    //           <div classNameName="px-5 pb-5">
    //             <a href="#">
    //               <h5 classNameName="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
    //                 {title}
    //               </h5>
    //             </a>
    //             <div classNameName="flex items-center justify-between">
    //               <span classNameName="text-3xl font-bold text-gray-900 dark:text-white">
    //                 {price}
    //               </span>
    //               <Link
    //               to={`/viewProduct/${id}}`}
    //               state={value}
    //                 // to={{
    //                 //   pathname: `/viewProduct/${id}}`,
    //                 //   state: value
    //                 // }}
    //                 classNameName="text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //               >
    //                 View
    //               </Link>

    //               {/* <button
    //                 onClick={openProduct}
    //                 classNameName="text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //               >

    //                 View
    //               </button> */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   })}

    // </div>