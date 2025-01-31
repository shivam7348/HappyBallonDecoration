import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./src/Topheader/MainHeader";
import TopHeader from "./src/Topheader/Topheader";
import Footer from "./src/Footer/Footer";

function Layout() {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;
