import React from 'react'

function ProductDetailNav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
  <div className="container-fluid">
  <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav fw-bold">
        <li className="nav-item ms-5 pe-3">
          <a className="nav-link active" aria-current="page" href="/">Women</a>
        </li>
        <li className="nav-item ps-3 pe-3">
          <a className="nav-link text-black" aria-current="page" href="/">Men</a>
        </li>
        <li className="nav-item ps-3">
          <a className="nav-link text-black" aria-current="page" href="/">Kids</a>
        </li>
        <li className="nav-item ps-3">
          <a className="nav-link text-black" aria-current="page" href="/">Beauty</a>
        </li>
        <a className='nav-brand' href=""></a>
      </ul>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className='navbar-brand text-white fw-bold fs-4' href="">ZIL Fashion</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto me-5">
        <li className="nav-item pe-3">
          <a className="nav-link text-black" aria-current="page" href="/"><i className='fa-solid fa-user fs-4'></i></a>
        </li>
        <li className="nav-item ps-3 pe-3">
          <a className="nav-link text-black" aria-current="page" href="/"><i class="fa-solid fa-bag-shopping fs-4"></i></a>
        </li>
        <li className="nav-item ps-3">
          <a className="nav-link text-black" aria-current="page" href="/"><i className='fa-solid fa-heart fs-4'></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default ProductDetailNav
