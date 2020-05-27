import React from "react";

export function Pim(props) {
  return (
    <section>
      <ul className="flex py-4 px-4 border-b">
        <li className="mr-6">
          <a
            className="text-blue-500 hover:text-blue-800 text-blue-800"
            href="#identities"
          >
            PAI
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#roles">
            Tenant
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#roles">
            Landlord
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#roles">
            Bike
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#roles">
            Travel (Legacy)
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#roles">
            Travel
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#roles">
            MPPI
          </a>
        </li>
      </ul>
    </section>
  );
}
