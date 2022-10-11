import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <NavLink to="/" className="flex items-center">
          <svg
            className="w-16 h-16"
            version="1.1"
            viewBox="0 0 752 752"
            xmlns="http://www.w3.org/2000/svg">
            <path
              className="logo-top-curve dark:fill-slate-100"
              d="m376 226.82c36.465 0 69.145 12.785 95.191 34.098 10.418-3.3164 21.312-5.2109 32.676-5.2109-32.203-34.098-77.668-55.41-127.87-55.41s-95.664 21.312-127.87 55.41c11.367 0 22.258 1.8945 32.676 5.2109 26.051-21.312 59.199-34.098 95.191-34.098z"
            />
            <path
              className="logo-bottom-curve dark:fill-slate-100"
              d="m376 525.18c-35.992 0-69.145-12.785-95.191-34.098-10.418 3.3164-21.312 5.2109-32.676 5.2109 32.203 34.098 77.195 55.41 127.87 55.41 50.199 0 95.664-21.312 127.87-55.41-11.367 0-22.258-1.8945-32.203-5.2109-26.52 21.312-59.195 34.098-95.664 34.098z"
            />
            <path
              className="logo-tick dark:fill-slate-100"
              d="m339.06 376c0-52.094-42.148-93.77-93.77-93.77-51.621 0-94.242 41.676-94.242 93.77s42.148 93.77 93.77 93.77c51.621 0 94.242-41.676 94.242-93.77zm-50.672-11.363-47.359 47.359c-2.3672 2.3672-5.6836 3.7891-9.4727 3.7891-3.7891 0-6.6289-1.4219-9.4727-3.7891l-23.68-23.68c-5.2109-5.2109-5.2109-13.734 0-18.469 5.2109-5.2109 13.734-5.2109 18.469 0l14.207 14.207 38.359-38.359c5.2109-5.2109 13.734-5.2109 18.469 0 4.7422 5.207 5.6875 13.73 0.48047 18.941z"
            />
            <path
              className="logo-cross dark:fill-slate-100"
              d="m507.18 282.23c-52.094 0-93.77 42.148-93.77 93.77s42.148 93.77 93.77 93.77 93.77-41.676 93.77-93.77-42.148-93.77-93.77-93.77zm34.57 109.87c5.2109 5.2109 5.2109 13.734 0 18.469-2.3672 2.3672-6.1562 3.7891-9.4727 3.7891s-6.6289-1.4219-9.4727-3.7891l-16.102-16.102-16.102 16.102c-2.3672 2.3672-6.1562 3.7891-9.4727 3.7891-3.3164 0-6.6289-1.4219-9.4727-3.7891-5.2109-5.2109-5.2109-13.734 0-18.469l16.102-16.102-16.102-16.102c-5.2109-5.2109-5.2109-13.734 0-18.469 5.2109-5.2109 13.734-5.2109 18.469 0l16.102 16.102 16.102-16.102c5.2109-5.2109 13.734-5.2109 18.469 0 5.2109 5.2109 5.2109 13.734 0 18.469l-15.148 16.102z"
            />
          </svg>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            QuizBox
          </span>
        </NavLink>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Profile
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setOpen(!open)}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            open ? "" : "hidden"
          } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/home"
                className="block text-lg py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-400 md:p-0 dark:text-white"
                aria-current="page">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to=":topics"
                className="block text-lg py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Topics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className="block text-lg py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="block text-lg py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
