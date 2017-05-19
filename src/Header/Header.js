import React from 'react';

import './Header.css';
import logo from './logo.svg';

function Header(props){
  return(
    <div className="container-fluid" id="header">
      <h1 className="App-intro"> Git User Search using <img className="App-logo" src={logo} alt="logo"/></h1>
    </div>
  );
}

export default Header;
