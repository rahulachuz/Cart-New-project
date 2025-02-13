import React from "react";

function NavBar() {
  return (
    <>
      <div className="nav-bar flex justify-between items-center p-4 pr-15 bg-gray-50">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt=""
        />
        <input
          className="placeholder:text-gray-500 placeholder:italic w-100 py-3 px-10 bg-white-100 shadow-md rounded  focus:outline-none "
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
        <a href="" className="font-semibold text-lg text-gray-600">
          Login
        </a>
        <a href="" className="font-semibold text-lg text-gray-600">
          Sign in
        </a>
        <a href="" className="font-semibold text-lg text-gray-600">
          Become a seller
        </a>
      </div>
    </>
  );
}

export default NavBar;
