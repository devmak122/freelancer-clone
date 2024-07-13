import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../Images/loginImg.jpg";
import logo from "../Images/logo.svg";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  const fetchUserData = async (token) => {
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const userData = await response.json();
    setUser(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.token);
      alert("Login successful!");
      fetchUserData(json.token);
      navigate("/Dashboard");
    } else {
      alert("Please enter the correct email or password");
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
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <i className="fa fa-google-plus bg-dark" aria-hidden="true"></i>
                  </div>
                  <span className="ml-4">Sign In with Google</span>
                </button>
              </div>
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign in with e-mail
                </div>
              </div>
              <div className="mx-auto max-w-xs">
                <form onSubmit={handleSubmit}>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
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
                    <span className="ml-3">Sign In</span>
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

export default Login;
