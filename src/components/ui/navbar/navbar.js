import React, {Component} from 'react';

import logo from '../../../assets/img/logo.svg';
import hambuger from '../../../assets/img/hambuger.svg';

import './navbar.scss';

class Navbar extends Component {
    render() {
      return (
        <nav className="navbar wrapper">
          <img className="nav-hambunger" alt="toggle" id="navbar-hambuger" src={hambuger}/>
          <span className="spacer"></span>
          <img className="nav-logo" alt="logo" id="navbar-logo" src={logo}/>
        </nav>
      );
    }
  }
  
export default Navbar;