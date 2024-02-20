import { NavPc } from "./NavPc";
import { NavMobile } from "./NavMobile";

export const Navbar = ({ nav, setNav }) => {
  const navItems = [
    { id: 1, text: "Home", to: "/home" },
    { id: 2, text: "Orders", to: "/orders" },
    { id: 3, text: "Cart", to: "/cart" },
    { id: 4, text: "About", to: "/about" },
    { id: 5, text: "Logout", to: "/home" },
  ];
  return (
    <div>
      <NavPc navItems={navItems} nav={nav} setNav={setNav} />
      <NavMobile navItems={navItems} nav={nav} setNav={setNav} />
    </div>
  );
};
