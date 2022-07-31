import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../nav";
import "./styles/style.css";

const Layout: React.FC = (): JSX.Element => (
  <div className="Layout">
    <div className="header">
      <Nav />
    </div>
    <div className="main">
      <Outlet />
    </div>
  </div>
);

export default Layout;
