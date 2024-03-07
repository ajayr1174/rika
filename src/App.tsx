import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import Services from "./pages/Services";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <Product />,
    },
    {
      path: "/services",
      element: <Services />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
