import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (

<nav>
  <Link to="/anna">Anna</Link>
  <Link to="/chris">Chris</Link>
  <Link to="/kacy">Kacy</Link>
</nav>
);
};

export default Navbar;