import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="/">
            <i className="fa-solid fa-bars ms-4 me-4"></i> All
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-5">
              <a className="nav-link text-white" aria-current="page" href="/">
                Cake & Flowers
              </a>
              <a className="nav-link text-white ms-4" href="/">
                Food
              </a>
              <a className="nav-link text-white ms-4" href="/">
                Home Services
              </a>
              <a className="nav-link text-white ms-4" href="/">
                Fashion
              </a>
              <a className="nav-link text-white ms-4" href="/">
                Delivery
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
