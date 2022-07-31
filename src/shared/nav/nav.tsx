import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";

const Nav: React.FC = (): JSX.Element => (
  <nav className="nav">
    <section className="logo-container">
      <Link to="/" className="logo-link">
        {" "}
        Logo
      </Link>
    </section>
    <section className="profile-link">
      <Link to="/profile">Profile</Link>
    </section>
  </nav>
);

export default Nav;
