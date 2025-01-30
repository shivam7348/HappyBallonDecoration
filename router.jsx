import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Home from './src/Pages/Home'
import About from './src/Pages/About'
import Products from './src/Pages/Products'
import Services from './src/Pages/Services'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      
      },
      {
        path: "services",
        element: <Services />,
      
      }, 
     
    ],
  },
]);

export default router;
