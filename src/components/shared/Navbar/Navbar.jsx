import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/carrer">Carrer</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 mb-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {navlinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-4">
        <div className="w-10 rounded-full">
          <img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.6435-9/34050762_2011004945885673_2218363875537977344_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeETI7vQ-G4fuCxODKoVxSwl7M82055M3kzszzbTnkzeTNn5mgxR5CPhChAmfaQ3hlov9QiqcUgoU-9WXPVpOmWf&_nc_ohc=Swzyghc1WKAAX_rEv9V&_nc_oc=AQmGewT1EF2Gb3_slRLNlNDLNvc1qQxyptrmRY8eSA7jFrk5OW5S0v58f0_kI3_AvSE&_nc_ht=scontent.fdac22-1.fna&oh=00_AfD1ukzv7DOBIEkRt36dLJUWRSF-GhWgo38TNR1HIYMeWw&oe=654304B1" />
        </div>
      </label>
       </div>
          <Link to="/login" className=" px-4 py-2 rounded-md text-white bg-[#403F3F]">Login</Link>
        </div>
      </div>
  );
};

export default Navbar;
