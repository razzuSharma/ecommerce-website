import { useRef } from "react";
import { Navigate } from "react-router";
import HomePage from "./Admin/HomePage";
// import HomePage from "./Admin/HomePage";
import Home from "./Home";

function Login() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  const getEmailAdmin = localStorage.getItem("emailDataAdmin");
  const getPasswordAdmin = localStorage.getItem("passwordDataAdmin");

  const handleSubmit = () => {
    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "password"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "password");
    }
    if (
      email.current.value == "admin@gmail.com" &&
      password.current.value == "admin_password"
    ) {
      localStorage.setItem("emailDataAdmin", "admin@gmail.cm");
      localStorage.setItem("passwordDataAdmin", "admin_password");
    }
  };

  return (
    <div>
      {getEmailAdmin && getPasswordAdmin ? (<HomePage />)
      : (getEmail && getPassword ? (<Home/>)
      :
      (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-teal-600 underline">
              Login
            </h1>
            <form className="mt-6">
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  ref={email}
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  ref={password}
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <a href="#" className="text-xs text-red-600 hover:underline">
                Forget Password?
              </a>
              <div className="mt-6">
                <button
                  onClick={handleSubmit}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-teal-400 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>)
      )}
    </div>
  );
}

export default Login;
