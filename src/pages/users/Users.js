import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { PlusIcon, SearchIcon } from "../../icons";
import { CreateForm } from "../../components/CreateForm";

export function Users(p) {
  const [isOpen, setIsOpen] = useState(false);

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
      <Outlet />
    </section>
  );
}
