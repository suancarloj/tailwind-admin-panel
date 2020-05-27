import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Aside } from "./Aside";
import "./styles.css";
import { Users } from "./pages/users/Users";
import { Documents } from "./pages/Documents";
import { Pim } from "./pages/Pim";
import { Terms } from "./pages/terms/Terms";
import { TermsConfiguration } from "./pages/terms/TermsConfiguration";
import { Payment } from "./pages/Payment";
import { UsersIcon } from "./icons";
import { UserIndex } from "./pages/users/UsersIndex";
import { UserEdit } from "./pages/users/UserEdit";
import { Roles } from "./pages/users/Roles";
import { Login } from "./pages/login/Login";

// "text-indigo-600" : "text-gray-700"
function App() {
  const [selected, setSelected] = React.useState(1);
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  return (
    <div className="antialiased bg-gray-200 min-h-screen flex flex-col">
      <header className="bg-white p-4 shadow flex flex-row sticky top-0 z-50">
        <div
          className="w-full mx-auto flex justify-between"
          style={{ maxWidth: "1600px" }}
        >
          <img
            src="https://www.qover.com/hubfs/Jan%20-%202019/svg/logo-qover.svg"
            alt="qover logo"
            width="140px"
          />
          <div className="relative">
            <button
              className="flex items-center mr-4"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <UsersIcon
                className="w-10 h-10 rounded-full text-indigo-400 bg-gray-200"
                src="/img/jonathan.jpg"
                alt="Avatar of Jonathan Reinink"
              />
            </button>
            {showUserMenu && (
              <div
                className="my-10 absolute z-10"
                style={{ right: "10px", top: "30px" }}
              >
                <div className="bg-white rounded overflow-hidden shadow-lg">
                  <div className="text-center p-6  border-b">
                    <UsersIcon
                      className="w-24 h-24 rounded-full mx-auto text-indigo-400 bg-gray-200"
                      src="/img/jonathan.jpg"
                      alt="Avatar of Jonathan Reinink"
                    />
                    <p className="pt-2 text-lg font-semibold">
                      Randy Robertson
                    </p>
                    <p className="text-sm text-gray-600">
                      randy.robertson@example.com
                    </p>
                    <div className="mt-5">
                      <a
                        href="#manage-account"
                        className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
                      >
                        Manage your Account
                      </a>
                    </div>
                  </div>

                  <div className="">
                    <a
                      href="#support"
                      className="px-4 py-2 pb-4 hover:bg-gray-100 flex"
                    >
                      <p className="text-sm font-medium text-gray-800 leading-none">
                        Support FAQ
                      </p>
                    </a>
                    <a
                      href="#logout"
                      className="px-4 py-2 pb-4 hover:bg-gray-100 flex"
                    >
                      <p className="text-sm font-medium text-gray-800 leading-none">
                        Logout
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <div
        className="flex flex-start mx-auto my-4 flex-auto w-full"
        style={{ maxWidth: "1600px" }}
      >
        <Aside
          className="mx-4 sticky top-0"
          setSelected={setSelected}
          selected={selected}
        />
        <main className="w-auto mx-2 w-full bg-white rounded shadow">
          <Routes>
            <Route path="users" element={<Users />}>
              <Route path="/" element={<UserIndex />} />
              <Route path="identity/:identityId" element={<UserEdit />} />
              <Route path="roles" element={<Roles />} />
            </Route>
            <Route path="documents" element={<Documents />} />
            <Route path="pim" element={<Pim />} />
            <Route path="payment" element={<Payment />} />
            <Route path="terms" element={<Terms />}>
              <Route path="/" element={<UserIndex />} />
              <Route path="configuration" element={<TermsConfiguration />} />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<App />} />
    </Routes>
  </Router>,
  rootElement
);
