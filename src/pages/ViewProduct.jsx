import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ViewProduct() {
  // //   const { id } = useParams();
  // //   console.log(id)
  const value = useLocation();
  const dataVal = value.state

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          src={dataVal.image}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {dataVal.title}
          </h1>
          <p className="leading-relaxed">
            {dataVal.description}
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">
              ${dataVal.price}
            </span>
            <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
