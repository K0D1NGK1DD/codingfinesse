import '../styles/Navbar.css';
import React from 'react';

function Navbar(props) {
  const sections = ['ARCHIVE', 'BIO', 'CONNECT'];
  const navLinks = sections.map( section => {
    return (
      <li><a href={'/' + section }>{section}</a></li>
    )
  })
  return (
      <nav>
          <h2 className="logo" >{props.logoTitle}</h2>
          <ul>
            {navLinks}
          </ul>
      </nav> 
  );
}

export default Navbar;