import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar bg-primary decoration-none">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white">
          <i className="bi bi-shop"></i> BizAd
        </Link>
        <div className="d-flex gap-3">
          <Link to="/services" className="navbar-brand text-white">
            Services
          </Link>
          <Link to="/about" className="navbar-brand text-white">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
