import React from "react";
import { useNavigate } from "react-router";

export function Login(props) {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow rounded-lg">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url('https://source.unsplash.com/Geu-i5VvI1A/600x800')`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
                backgroundRepeat: "none"
              }}
            />
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={() => navigate("/")}
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-xs italic text-red-500">
                    Please choose a password.
                  </p>
                </div>
                <div className="mb-4 flex">
                  <label className="flex justify-start items-center text-truncate rounded bg-white border shadow pl-4 pr-6 py-2 shadow-sm mb-4">
                    <div className="text-indigo-600 mr-3">
                      <input
                        type="radio"
                        value="Male"
                        className="form-radio focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="select-none text-gray-700">Remember me</div>
                  </label>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
