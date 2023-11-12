import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    console.log("Current Route:", location.pathname);
    console.log("Matching Route:", route);
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className="h-5 cursor-pointer" onClick={() => navigate("/")} />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400  ${pathMatchRoute("/") && "text-black border-b-[3px] border-b-red-500"}`} onClick={() => navigate("/")}>
              Home
            </li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/offers") && "text-black border-b-[3px] border-b-red-500"}`} onClick={() => navigate("/offers")}>
              Offers
            </li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${(pathMatchRoute("/profile") || pathMatchRoute("/profile")) && "text-black border-b-[3px] border-b-red-500"}`} onClick={() => navigate("/profile")}>
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
