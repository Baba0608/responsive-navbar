import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", to: "/home" },
    { id: 2, text: "Orders", to: "/orders" },
    { id: 3, text: "Cart", to: "/cart" },
    { id: 4, text: "About", to: "/about" },
    { id: 5, text: "Logout", to: "/home" },
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24  mx-auto px-4 text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:text-green-400 hover:underline rounded-xl m-2 cursor-pointer duration-300"
          >
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden right-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 mt-24"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1> */}

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link to={item.to} key={item.id}>
            <li className="p-4 border-b rounded-xl duration-300 hover:bg-green-400 hover:text-black cursor-pointer border-gray-600">
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
