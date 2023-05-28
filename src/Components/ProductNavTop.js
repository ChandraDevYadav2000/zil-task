import React from 'react'

function ProductNavTop() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="nav-link text-black" href="/">Connect with us</a>
    <a className="nav-link text-black" href="/">Call us +910234567</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item border-end pe-3">
          <a className="nav-link active" aria-current="page" href="/">Become a supplier</a>
        </li>
        <li className="nav-item border-end ps-3 pe-3">
          <a className="nav-link text-black" aria-current="page" href="/">Download App</a>
        </li>
        <li className="nav-item ps-3">
          <a className="nav-link text-black" aria-current="page" href="/">TRACK ORDER</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default ProductNavTop
