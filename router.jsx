import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Home from './src/Pages/Home'
import About from './src/Pages/About'
import Services from './src/Pages/Services'
import Contact from "./src/Pages/Contact";
import GalleryData from "./src/Pages/GalleryData";

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
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "gallery",
        element: <GalleryData />,
      },
    ],
  },
]);

export default router;
