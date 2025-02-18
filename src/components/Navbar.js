import React from 'react';
import { Link } from 'react-router';
import './Navbar.css'
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (

    <nav className='Mainbar'>
      <div className='Home'>
        <Link to="/main">
          <AiFillHome />
        </Link>
      </div>
      <div className='Items'>
        <Link to="/anna-holm">Anna</Link>
        <div>|</div>
        <Link to="/christopher-holm">Christopher</Link>
        <div>|</div>
        <Link to="/kacy-holm">Kacy</Link>
        <div>|</div>
        <Link to="/josiah-nunn">Josiah</Link>
      </div>
    </nav>
  );
};

export default Navbar;