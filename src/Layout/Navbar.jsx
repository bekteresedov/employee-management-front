import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h2 className="head-tag">Employee Management System</h2>
          </Link>
          <Link className="btn btn-add" to="/adduser">
            Add User
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}
