import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";

// import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Cart } from "./components/Cart";
import { Orders } from "./components/Orders";
import { Navbar } from "./components/Navbar";

const AppLayout = () => {
  const [nav, setNav] = useState(false);
  console.log("NAV", nav);
  return (
    <div className="bg-blue-200 min-h-[100vh]">
      <Navbar nav={nav} setNav={setNav} />
      <Outlet />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
