import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Hélène Sauvé
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Project Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projectgallery"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navbar;
