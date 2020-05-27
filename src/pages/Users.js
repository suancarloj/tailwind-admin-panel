import React, { useState } from "react";

import { users } from "./users.data";
import { PlusIcon, SearchIcon } from "../icons";
import { CreateForm } from "../components/CreateForm";
import { NavLink } from "react-router-dom";

export function Users(p) {
  const [isOpen, setIsOpen] = useState(false);
  const [showId, setShowId] = useState(0);
  function onClick(userId, event) {
    setShowId(userId);
  }
  return (
    <section>
      <div className="flex border-b justify-between">
        <ul className="flex py-4 px-4">
          <li className="mr-6">
            <NavLink
              className="text-blue-500 hover:text-blue-800 text-blue-800"
              to="./"
            >
              Identities
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink className="text-blue-500 hover:text-blue-800" to="roles">
              Roles
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-center items-center px-4">
          <div className="relative mr-4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 pl-10 pr-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
            <SearchIcon className="absolute hover:text-indigo-400 text-gray-500 top-0 mt-2 ml-2" />
          </div>
          <button
            className="ease-in-out transition-transform"
            onClick={() => setIsOpen(!isOpen)}
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            <PlusIcon className="hover:text-indigo-400 text-gray-500" />
          </button>
        </div>
      </div>
      <CreateForm isOpen={isOpen} />
      {showId != null ? (
        <div className="">
          <h1 className="text-4xl m-4 tracking-wide">Identity edit</h1>
          <div className="flex">
            <form className="px-4 pb-16 w-full max-w-lg relative">
              <h2 className="text-2xl my-4">General</h2>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="beyond@theworld.com"
                  />
                  <p className="text-gray-600 text-xs italic">
                    Make it as long and as crazy as you'd like
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center justify-center">
                <button
                  className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="hover:text-gray-600 text-gray-500 font-bold py-2 px-4 mx-4 rounded"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
            <div className="flex justify-center flex-auto items-center">
              <div>Did you know ?</div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 pb-4">
            <h2 className="text-2xl my-4">Authentications</h2>
          </div>
        </div>
      ) : (
        <div className="px-4 pb-4">
          <h1 className="text-4xl my-4 tracking-wide">Identities</h1>
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="rounded-lg text-left">
                <th
                  className="px-4 py-2 bg-gray-100"
                  style={{ borderRadius: ".25rem 0 0 .25rem" }}
                >
                  Id
                </th>
                <th className="px-4 py-2 bg-gray-100">Email</th>
                <th className="px-4 py-2 bg-gray-100">First name</th>
                <th
                  className="px-4 py-2 bg-gray-100"
                  style={{ borderRadius: "0 .25rem .25rem 0" }}
                >
                  Last name
                </th>
              </tr>
            </thead>
            <tbody>
              {users.docs.map((user, index) => {
                return (
                  <tr
                    className="border-b hover:bg-gray-100"
                    onClick={e => onClick(index, e)}
                  >
                    <td className="px-4 py-2">{user.id}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.firstName}</td>
                    <td className="px-4 py-2">{user.lastName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
