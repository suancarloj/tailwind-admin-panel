import React from "react";
import { useNavigate } from "react-router-dom";
import { users } from "./users.data";

export function UserIndex(props) {
  const navigate = useNavigate();
  return (
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
                onClick={e => navigate(`identity/${user.id}`)}
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
  );
}
