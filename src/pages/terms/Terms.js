import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Terms(props) {
  return (
    <section>
      <ul className="flex py-4 px-4 border-b">
        <li className="mr-6">
          <NavLink
            activeClassName="text-blue-800"
            className="text-blue-500 hover:text-blue-800"
            to="."
          >
            Terms
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            activeClassName="text-blue-800"
            className="text-blue-500 hover:text-blue-800 "
            to="configuration"
          >
            Configuration
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </section>
  );
}
