import React from 'react';

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className='Navbar-Home'>
        <a href="/">notfarfromholm</a>
      </nav>
      <nav className="Navbar-Right">
        <div className="Navbar-Name">
          <a href="/anna-holm">Anna</a>
        </div>
        <div className="Navbar-Name">
          <a href="/christopher-holm">Christopher</a>
        </div>
        <div className="Navbar-Name">
          <a href="/kacy-holm">Kacy</a>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;