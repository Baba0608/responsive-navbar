import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navItems = [
    { id: 1, text: "Home", to: "/home" },
    { id: 2, text: "Orders", to: "/orders" },
    { id: 3, text: "Cart", to: "/cart" },
    { id: 4, text: "About", to: "/about" },
    { id: 5, text: "Logout", to: "/home" },
  ];
  return (
    <div className="flex items-center bg-purple-400 justify-between h-20 fixed w-full top-0 left-0">
      <div className="pl-10 text-xl font-bold">NAVBAR</div>

      {/* for pc */}

      <div className="mr-10 hidden sm:block text-lg">
        <ul className="flex">
          {navItems.map((item) => (
            <li key={item.id} className="px-4">
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* for mobile */}
      <div className="text-lg flex justify-center sm:hidden">
        <ul
          className={
            nav
              ? "fixed bg-purple-400 mt-10 w-full -ml-[60px] sm:hidden"
              : "hidden"
          }
        >
          {navItems.map((item) => (
            <Link key={item.id} to={item.to}>
              <li
                className="flex justify-center py-4 hover:bg-green-300 duration-300 cursor-pointer"
                onClick={() => setNav(false)}
              >
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sm:hidden text-2xl mr-10 cursor-pointer">
        {nav ? (
          <AiOutlineClose onClick={() => setNav(!nav)} />
        ) : (
          <AiOutlineMenu onClick={() => setNav(!nav)} />
        )}
      </div>
    </div>
  );
};
