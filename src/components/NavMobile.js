import { Link } from "react-router-dom";

export const NavMobile = ({ navItems, nav, setNav }) => {
  return (
    <div
      className={
        nav
          ? "mt-20 sm:hidden bg-purple-400 flex justify-center fixed top-0 left-0 w-full"
          : "hidden"
      }
    >
      <ul className="w-full">
        {navItems.map((item) => (
          <Link to={item.to}>
            <li
              onClick={() => setNav(!nav)}
              key={item.id}
              className="py-4 text-center text-lg hover:bg-green-200"
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
