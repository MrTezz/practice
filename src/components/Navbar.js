import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">CROWLER HUB</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://crowlerhub.com/">{props.homeText}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://crowlerhub.com/contact/">{props.aboutText}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More Tools
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">JPG Compressor (Coming Soon)</a></li>
            <li><a className="dropdown-item" href="#">Multi-line to In-line Convertor (Coming Soon)</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Fancy Texts (Coming Soon)</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Just Feel The Vibe...🙉</a>
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