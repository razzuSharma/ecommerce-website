// import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbars from "./Navbars";

export default function ViewProduct() {
  const value = useLocation();
  const dataVal = value.state;
  const id = dataVal.id;

  return (
    <div>
      <Navbars />
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="h-48 w-48 rounded border border-gray-200"
            src={dataVal.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {dataVal.title}
            </h1>
            <h2 className="text-gray-900 text-2xl title-font font-medium mb-1">
              {dataVal.category}
            </h2>
            <p className="leading-relaxed">{dataVal.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${dataVal.price}
              </span>
              <Link
                to={`/buyingProduct/${id}`}
                state={dataVal}
                className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
