import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./src/Topheader/MainHeader";
import TopHeader from './src/Topheader/Topheader'

function Layout() {
  return (
    <>
      <TopHeader />
      <MainHeader />

      <Outlet />
    </>
  );
}

export default Layout;
