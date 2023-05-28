import React from 'react'

function Footer() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-12">
            <div className="container-fluid bg-white" style={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}>
                <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-8 col-lg-5">
           <h3 className='text-center fw-bold mt-5'>Download the Zil App</h3> 
           <div className="d-flex p-3">
           <img className='img-fluid h-50 w-50' src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" />
           <img className='img-fluid h-50 w-50' src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" />
           </div>
           <div className="d-flex justify-content-center pt-1 pb-5">
           <img className='img-fluid h-25 w-25 me-3' src="https://upload.wikimedia.org/wikipedia/commons/5/5e/QR_Code_example.png" alt="" />
           <img className='img-fluid h-25 w-25' src="https://upload.wikimedia.org/wikipedia/commons/5/5e/QR_Code_example.png" alt="" />
           <img className='img-fluid h-25 w-25 ms-3' src="https://upload.wikimedia.org/wikipedia/commons/5/5e/QR_Code_example.png" alt="" />
           </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-2">
            <h3 className='fw-bold mt-5'>Get To Know Us</h3>
            <ul className='list-unstyled'>
            <li className='fw-bold'><a className='text-decoration-none text-black' href="/">Contact Us</a></li>
            <li className='fw-bold'><a className='text-decoration-none text-black' href="/">About Us</a></li>
            <li className='fw-bold'><a className='text-decoration-none text-black' href="/">Terms And Conditions</a></li>
            <li className='fw-bold'><a className='text-decoration-none text-black' href="/">Privacy Policy</a></li>
            <li className='fw-bold'><a className='text-decoration-none text-black' href="/">Return A Refund Policy</a></li>
            <li className='fw-bold'><a className='text-decoration-none text-black' href="/">Payment Option</a></li>
            <li className='fw-bold'><a className='text-decoration-none text-black' href="/">Shipping Policy</a></li>
            </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-2">
        <h3 className='fw-bold mt-5'>Let Us Help You</h3>
            <ul className='list-unstyled'>
            <li className='fw-bold'><a className='text-decoration-none text-black' href="/">Your Account</a></li>
            <li className='fw-bold'><a className='text-decoration-none text-black' href="/">Returns Center</a></li>
            <li className='fw-bold'><a className='text-decoration-none text-black' href="/">100% Purchase Production</a></li>
            <li className='fw-bold'><a className='text-decoration-none text-black' href="/">Zill App Download</a></li>
            <li className='fw-bold'><a className='text-decoration-none text-black' href="/">Help</a></li>
            </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-7 col-lg-2">
            <div className="mt-5">
                <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLA54ezAj6YqK3CCBR_-rk0_uSP2NjuvgWA&usqp=CAU" alt="" />
            </div>
            <div className="text-center mt-5 ms-2">
            <i className='fa-brands fa-facebook-f fs-2 ms-2 ps-2 pe-3 pt-2 pb-2' style={{border: '2px solid black'}}></i><i className='fa-brands fa-linkedin-in ms-3 fs-2 p-2' style={{border: '2px solid black'}}></i><i className='fa-brands fa-twitter ms-3 fs-2 p-2' style={{border: '2px solid black'}}></i>
            </div>
        </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
