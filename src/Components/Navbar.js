import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar(props){
    return (
        <>
        <nav className = {`navbar navbar-expand-sm bg-${props.mode} navbar-${props.mode}`}>
  {/* <!-- Brand --> */}
  <NavLink className = "navbar-brand" to = "/REACT">{props.titel}</NavLink>

  {/* <!-- Links --> */}
  <ul className = "navbar-nav">
    <li className = "nav-item">
      <NavLink className = "nav-link" to="/Home">Home</NavLink>
    </li>
    <li className = "nav-item">
      <NavLink className = "nav-link" to = "/Carousel">Carousel</NavLink>
    </li>

    <li className = "nav-item">
      <NavLink className = "nav-link" to = "/Darkmode">Darkmode</NavLink>
    </li>

    {/* <!-- Dropdown --> */}
    {/* <li className = "nav-item dropdown">
      <Link className = "nav-link dropdown-toggle" to = "/" id="navbardrop" data-toggle="dropdown">
        Services
      </Link>
      <div className = "dropdown-menu">
        <Link className = "dropdown-item" to = "/">Web Devlopment</Link>
        <Link className = "dropdown-item" to = "/">Project</Link>
        <Link className = "dropdown-item" to = "/">App Devlopment</Link>
      </div>
    </li> */}
  </ul>

  <form className = "form-inline ml-auto" action="/action_page.php">
    <input className = "form-control mr-sm-2" type="text" placeholder="Search"/>
    <button className = "btn btn-primary" type="submit">Search</button>
  </form>
  <form>
  <div className={`custom-control custom-switch ml-4`}>
    <input type="checkbox" className="custom-control-input" id="switch1" onClick={props.tooglemode}/>
    <label className="custom-control-label" htmlFor="switch1"></label>
  </div>
</form>
</nav>

        </>
    );
}

export default Navbar;
