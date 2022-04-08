import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"About"}>
              About
            </Link>
          </li>
        </ul>
      </div>
      <Link to={"/users/add"} className="btn btn-outline-primary">
        Add
      </Link>
    </nav>
  );
}
