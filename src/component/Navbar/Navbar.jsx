import React from "react";
import { Link, NavLink } from "react-router-dom";
import Background from "../Background/Background"

const styles = {
home: {
    fontFamily: "Caveat, cursive",
}
}

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation" style={styles.home}>
          <div className="navbar-brand">

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              {/* <a className="navbar-item">Home</a> */}
<Link to="Home" className="navbar-item title is-1">Estefania Lupo</Link>

</div>

<div className="navbar-end">

              {/* <a className="navbar-item">Documentation</a> */}
              <NavLink to="Projects" className="navbar-item title is-3" activeClassName="active">Projects</NavLink>
              <NavLink to="Contact" className="navbar-item title is-3" activeClassName="active">Contact</NavLink>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link title is-3">Info</a>

                <div className="navbar-dropdown subtitle is-5">
                  <a className="navbar-item" href="./assets/Resume.pdf">Resume</a>
                  <a className="navbar-item" href="https://github.com/lain7891">GitHub</a>
                  <a className="navbar-item" href="https://www.linkedin.com/in/estefania-lupo/">LinkedIn</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Phone #</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
