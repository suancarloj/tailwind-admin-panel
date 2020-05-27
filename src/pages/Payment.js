import React from "react";

export function Payment(props) {
  return (
    <section>
      <ul className="flex py-4 px-4 border-b">
        <li className="mr-6">
          <a
            className="text-blue-500 hover:text-blue-800 text-blue-800"
            href="#identities"
          >
            Credit lines
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#roles">
            Stripe
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#roles">
            Twikey
          </a>
        </li>
      </ul>
    </section>
  );
}
