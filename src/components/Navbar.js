import React from 'react';
import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className='Navbar-Home'>
        <a href="/">notfarfromholm</a>
      </nav>
      <nav className="Navbar-Right">
        <div className="Navbar-Name">
          <NavLink
            to="/anna-holm"
          >
            Anna
          </NavLink>
        </div>

        <div className="Navbar-Name">
          <NavLink
            to="/christopher-holm"
          >
            Christopher
          </NavLink>
        </div>
        <div className="Navbar-Name">
          <NavLink
            to="/kacy-holm"
          >
            Kacy
          </NavLink>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;