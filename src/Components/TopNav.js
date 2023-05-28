import React from 'react'

function TopNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand ms-3" href="/">
        <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLA54ezAj6YqK3CCBR_-rk0_uSP2NjuvgWA&usqp=CAU" alt="" style={{height: '30px', width: '80px'}} /></a>
    <p className='fw-bold pt-2'><i class="fa-solid fa-location-dot ms-3 me-2"></i>Select your address</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="input-group mb-3 ms-auto mt-2 w-50">
    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
  </ul>
  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
  <span className="input-group-text bg-danger"><i class="fa-solid fa-magnifying-glass text-white"></i></span>
</div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-black fw-bold me-3" aria-current="page" href="/">Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black fw-bold me-3" href="/">Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black me-4 fw-bold"><i className='fa-solid fa-cart-shopping me-1'></i> Cart</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default TopNav
