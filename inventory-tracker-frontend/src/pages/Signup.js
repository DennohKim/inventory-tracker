import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logoicon.png"
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="container mx-auto" >
      <div className="flex justify-center px-6 my-32 text-white" >
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg "
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=659&q=80" +
                ")",
            }}
          ></div>

          <div className="w-full lg:w-1/2 bg-[#E62953] p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-4">
              <div className="max-w-[700px] mx-auto my-16 p-4">
                <div>
                <div className="pb-10 flex">
                <img src={logo} alt="valfo" className="mr-6 w-5 h-5" /> <span className="font-bold text-xl ">Valfo</span>

                </div>
                  <h1 className="text-2xl font-bold py-2">
                    Sign up for a free account
                  </h1>
                  <p className="py-2">
                    Already have an account yet?
                    <Link to="/" className="underline">
                      Sign in.
                    </Link>
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col py-2">
                    <label className="py-2 font-medium">Email Address</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="border p-3 rounded text-black"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 font-medium">Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="border p-3 rounded text-black"
                      type="password"
                    />
                  </div>
                  <button className="border border-white bg-white hover:bg-white w-full p-4 my-2 text-black font-bold rounded">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;