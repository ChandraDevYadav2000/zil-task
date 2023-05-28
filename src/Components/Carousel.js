import React from 'react'

function Carousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-vector/hand-drawn-bakery-facebook-cover-design-template_23-2149385983.jpg?w=1380&t=st=1685097545~exp=1685098145~hmac=856fa89bcc48cdb21e659f96ed8ae42f777e4de3fd815ed469a62fde880a75b8" className="d-block w-100" style={{height: '500px'}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-vector/hand-drawn-bakery-facebook-cover-design-template_23-2149385983.jpg?w=1380&t=st=1685097545~exp=1685098145~hmac=856fa89bcc48cdb21e659f96ed8ae42f777e4de3fd815ed469a62fde880a75b8" className="d-block w-100" style={{height: '500px'}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-vector/hand-drawn-bakery-facebook-cover-design-template_23-2149385983.jpg?w=1380&t=st=1685097545~exp=1685098145~hmac=856fa89bcc48cdb21e659f96ed8ae42f777e4de3fd815ed469a62fde880a75b8" className="d-block w-100" style={{height: '500px'}} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" style={{background: '#a0a0a0', width: '3rem', height: '3rem'}}><i className='fa-solid fa-angle-left h1'></i></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <span className="carousel-control-prev-icon" aria-hidden="true" style={{background: '#a0a0a0', width: '3rem', height: '3rem'}}><i className='fa-solid fa-angle-right h1'></i></span>
  </button>
</div>
    </div>
  )
}

export default Carousel
