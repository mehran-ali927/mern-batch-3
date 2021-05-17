import React from 'react';
import logo from '../../assests/logo.png'

import './Header.css'


 function Header() {
  return (
    <div className="header-wrapper">
    <div className="header-inner">
      <div className="item">
        <img src = {logo} alt="" />
 </div>

 <div className="item1">
   <ul>
     <li> <a href="#"> Store Locator</a></li>
     <li> <a href="#"> Register/Login</a></li>
     
   </ul>
 </div>

    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link" href="#">Everyday Value</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Make It A Meal </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active"  href="#">Signature Box</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active"  href="#">Sharing</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active"  href="#">Promotions</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active"  href="#">Snacks</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active"  href="#">Midnight Deal</a>
        </li>


      </ul>
      

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link" href="#">0</a>
        </li>

       


      </ul>


    </div>
  </div>
</nav>

    </div>
  );
}

export default Header
