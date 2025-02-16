import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (

<nav>
  <Link to="/anna-holm">Anna Holm</Link>
  <Link to="/christopher-holm">Christopher Holm</Link>
  <Link to="/kacy-holm">Kacy Holm</Link>
</nav>
);
};

export default Navbar;