import React from "react";

const Navbar = () => {
  return (
    <div className="navbar w-11/12 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-2 shadow-md"
          >
            <li className="mb-2">
              <a className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold hover:from-[#54CF68] hover:to-[#00827A] border-0">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold hover:from-[#54CF68] hover:to-[#00827A] border-0">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold hover:from-[#54CF68] hover:to-[#00827A] border-0">
                Changelog
              </a>
            </li>
            <li className="mb-2">
              <a className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold hover:from-[#54CF68] hover:to-[#00827A] border-0">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold hover:from-[#54CF68] hover:to-[#00827A] border-0">
                Download
              </a>
            </li>
            <li className="mb-2">
              <a className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold hover:from-[#54CF68] hover:to-[#00827A] border-0">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a className="text-xl font-bold hover:bg-linear-to-r from-[#632ee3] to-[#54CF68] hover:text-white duration-500 hover:px-3 py-2 rounded-md cursor-pointer">
          CS - Ticket System
        </a>
      </div>
      <div className="navbar-end  gap-6">
        <ul className="hidden md:flex gap-4 lg:gap-8 menu-horizontal font-medium text-md">
          <li>
            <a className="hover:border-b-4 border-purple-600 duration-500 cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <details>
              <summary className="hover:border-b-4 border-purple-600 duration-500 cursor-pointer">
                Menu
              </summary>
              <ul className="p-4 space-y-2">
                <li className="hover:border-b-4 border-purple-600 duration-500 cursor-pointer">
                  <a>FAQ</a>
                </li>
                <li className="hover:border-b-4 border-purple-600 duration-500 cursor-pointer">
                  <a>Changelog</a>
                </li>
                <li className="hover:border-b-4 border-purple-600 duration-500 cursor-pointer">
                  <a>Blog</a>
                </li>
                <li className="hover:border-b-4 border-purple-600 duration-500 cursor-pointer">
                  <a>Download</a>
                </li>
              </ul>
            </details>
          </li>

          <li className="hover:border-b-4 border-purple-600 duration-500 cursor-pointer">
            <a>Contact</a>
          </li>
        </ul>
        <button className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold hover:from-[#9f62f2] hover:to-[#632ee3] border-0">
          + New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
