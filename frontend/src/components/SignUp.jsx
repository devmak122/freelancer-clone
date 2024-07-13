import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.svg";

const SignUp = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    try {
      const response = await fetch("https://freelancer-clone-g6ee.vercel.app/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.token);
        navigate("/Login");
        alert("Account created successfully");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex items-center justify-center space-x-3">
            <img src={logo} alt="Logo" />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <h4>SIGNUP TO ENJOY THE DEVNOTES</h4>
              </div>
              <div className="mx-auto max-w-xs">
                <form onSubmit={handleSubmit}>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    id="name"
                    name="name"
                    value={credentials.name}
                    onChange={onChange}
                    placeholder="Name"
                    required
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={onChange}
                    placeholder="Email"
                    required
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                    placeholder="Password"
                    required
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    id="cpassword"
                    name="cpassword"
                    value={credentials.cpassword}
                    onChange={onChange}
                    placeholder="Confirm Password"
                    required
                  />
                  <button
                    className="mt-5 tracking-wide font-semibold bg-green-400 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    type="submit"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                </form>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    {" "}
                    Terms of Service{" "}
                  </a>
                  and its
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </p>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <a href="/Login" className="border-b border-gray-500 border-dotted">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
          <img src={loginImg} alt="loginImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
  