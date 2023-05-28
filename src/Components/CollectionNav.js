import React from 'react'

function CollectionNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
    <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav fw-bold">
          <li className="nav-item ms-5 pe-3">
            <a className="nav-link active text-black" aria-current="page" href="/">Sale</a>
          </li>
          <li className="nav-item ps-3 pe-3">
            <a className="nav-link text-black" aria-current="page" href="/">New In</a>
          </li>
          <li className="nav-item ps-3">
            <a className="nav-link text-black" aria-current="page" href="/">Clothing</a>
          </li>
          <li className="nav-item ps-3">
            <a className="nav-link text-black" aria-current="page" href="/">Dresses</a>
          </li>
          <li className="nav-item ps-3">
            <a className="nav-link text-black" aria-current="page" href="/">Tops</a>
          </li>
        </ul>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="input-group w-25 mb-3 border me-5 ">
  <span className="input-group-text bg-white border-0" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
  <input type="text" className="form-control border-0" placeholder="Search for products..." aria-label="Username" aria-describedby="basic-addon1" />
</div>
    </div>
  </nav>
  )
}

export default CollectionNav
