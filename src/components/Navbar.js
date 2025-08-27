import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="light">
  <div className="container">
    <a className="navbar-brand" href="https://crowlerhub.com/"><img src="https://crowlerhub.com/wp-content/uploads/2023/11/crowler-hub-logo-grey.png" alt="Crowler Hub Logo" style={{ height: "60px" }}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tools</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/wordnest">WordNest (Doc Maker)</Link></li>
            <li><Link className="dropdown-item" to="#">JPG Compressor (Coming Soon)</Link></li>
            <li><Link className="dropdown-item" to="#">Multi-line to In-line Convertor (Coming Soon)</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Fancy Texts (Coming Soon)</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://crowlerhub.com/contact/">{props.aboutText}</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Just Feel The Vibe...🙉</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}

Navbar.propTypes = {
   homeText: PropTypes.string,
   aboutText: PropTypes.number 
}