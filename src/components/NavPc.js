import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const NavPc = ({ navItems, nav, setNav }) => {
  return (
    <div className="flex items-center bg-purple-400 justify-between h-20 fixed w-full top-0 left-0">
      <div className="pl-10 text-xl font-bold">NAVBAR</div>

      <div className="mr-10 hidden sm:block text-lg">
        <ul className="flex">
          {navItems.map((item) => (
            <li key={item.id} className="px-4">
              <Link to={item.to}>{item.text}</Link>
            </li>
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
