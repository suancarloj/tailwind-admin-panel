import React from "react";

export function Documents(props) {
  return (
    <section>
      <ul className="flex py-4 px-4 border-b">
        <li className="mr-6">
          <a
            className="text-blue-500 hover:text-blue-800 text-blue-800"
            href="#identities"
          >
            Configuration
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#roles">
            Documents
          </a>
        </li>
      </ul>
    </section>
  );
}
