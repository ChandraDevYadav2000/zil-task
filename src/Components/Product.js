import React from 'react'

function Product() {
  return (
    <div className='container pb-2'>
      <div className="row ">
        <div className="col-12 col-sm-12 col-md-12 col-lg-7">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-3">
                        <img className='img-fluid pe-1 pb-1 pt-2 mt-5' src="https://img.freepik.com/free-photo/tropical-macaw-perched-vibrant-feathers-focus-generated-by-ai_188544-9720.jpg?size=626&ext=jpg&ga=GA1.1.1204143450.1651371989&semt=sph" alt="" />
                        <img className='img-fluid pe-1 pb-1 pt-2' src="https://img.freepik.com/free-photo/tropical-macaw-perched-vibrant-feathers-focus-generated-by-ai_188544-9720.jpg?size=626&ext=jpg&ga=GA1.1.1204143450.1651371989&semt=sph" alt="" />
                        <img className='img-fluid pe-1 pb-1 pt-2' src="https://img.freepik.com/free-photo/tropical-macaw-perched-vibrant-feathers-focus-generated-by-ai_188544-9720.jpg?size=626&ext=jpg&ga=GA1.1.1204143450.1651371989&semt=sph" alt="" />
                        <img className='img-fluid pe-1 pb-1 pt-2' src="https://img.freepik.com/free-photo/tropical-macaw-perched-vibrant-feathers-focus-generated-by-ai_188544-9720.jpg?size=626&ext=jpg&ga=GA1.1.1204143450.1651371989&semt=sph" alt="" />
                    </div>
                    <div className="col-8 col-sm-8 col-lg-9">
                    <img className='img-fluid pt-5 mt-2' style={{height: '500px'}} src="https://img.freepik.com/free-photo/tropical-macaw-perched-vibrant-feathers-focus-generated-by-ai_188544-9720.jpg?size=626&ext=jpg&ga=GA1.1.1204143450.1651371989&semt=sph" alt="" />
                    <button className='btn btn-primary text-white w-100 mt-3 fw-bold'><i class="fa-solid fa-bag-shopping text-white me-4 pt-1 pb-1 fs-4"></i>Add to Bag</button>
                    <button className='btn btn-outline-dark w-100 mt-3 fw-bold' style={{border: '2px solid black'}}>Customize</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-5">
            <div>
                <h4 className='fw-bold pt-5'>Deep-V Neckline Wide Band Waist Top <i class="fa-solid fa-share-nodes ms-5"></i></h4>
            </div>
            <div className="d-flex mt-1">
                <h5 className='fw-bold'>Rs 652.00</h5>
                <h6 className='text-decoration-line-through ms-4'>Rs 800.00</h6>
                <h5 className='fw-bold text-success ms-4'>18% Off</h5>
            </div>
            <div className="d-flex mt-1">
                <h6 className='fw-bold text-white bg-success rounded-pill pt-1 pb-1 ps-3 pe-3'><i className='fa-solid fa-star text-white'></i> 4.2</h6>
                <p className='ms-2'>500+ Ratings,</p>
                <p className='ms-2'>240 Reviews</p>
            </div>
            <div>
                <h6 className='fw-bold mt-3'>Select Size*</h6>
                <div className="mt-3">
                <button type="button" class="btn btn-primary rounded-pill ps-4 pe-4">XS</button>
                <button type="button" class="btn btn-primary rounded-pill ms-3 ps-4 pe-4">S</button>
                <button type="button" class="btn btn-primary rounded-pill ms-3 ps-4 pe-4">M</button>
                <button type="button" class="btn btn-primary rounded-pill ms-3 ps-4 pe-4">L</button>
                <button type="button" class="btn btn-primary rounded-pill ms-0 ms-sm-0 ms-md-3 ms-lg-3 ps-4 pe-4 mt-3 mt-sm-3 mt-md-0">XL</button>
                <button type="button" class="btn btn-primary rounded-pill ms-3 ms-sm-3 ms-md-3 ms-lg-3 ps-4 pe-4 mt-3 mt-sm-3 mt-md-0">XXL</button>
                </div>
            </div>
            <div>
                <h6 className='fw-bold mt-4 mt-sm-4 mt-md-3 mt-lg-3'>Product Details</h6>
                <ul className='list-unstyled'>
                    <li>Name : Rounded Neck Puff Half Sleeves</li>
                    <li>Hosiery Pista Top (23*Inches)</li>
                    <li>Fabric : Cotton Blend</li>
                    <li>Sleeve Length : Short Sleeves</li>
                    <li>Pattern : Solid</li>
                    <li>Net Quantity (N) : 1</li>
                </ul>
            </div>
            <div className='pb-1' style={{borderBottom: '2px solid black', borderBottomStyle: 'dotted'}}>
                <ul className='list-unstyled'>
                    <li className='fw-bold'>Sizes :</li>
                    <li>XS, S (Bust Size : 34 in, Length Size: 23in)</li>
                    <li>M (Bust Size : 34 in, Length Size: 23in)</li>
                    <li>L (Bust Size : 34 in, Length Size: 23in)</li>
                    <li>XL (Bust Size : 34 in, Length Size: 23in)</li>
                    <li>Country of Origin : India</li>
                </ul>
            </div>
            <div>
                <h6 className='fw-bold mt-4 mt-lg-3'>Overseas Mall Shipping To Mumbai States</h6>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                        <div className='text-center mt-3'>
                        <p className='bg-success rounded-pill text-white fw-bold pt-1 pb-1 fs-5'><i className='fa-solid fa-star me-2'></i>4.2</p>
                        <span>500+ Ratings</span>
                    </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                        <div className="text-center mt-3">
                        <p className='fw-bold fs-5 pt-1'>3000+</p>
                        <p className='pt-1'>Products</p>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="text-center mt-4">
                        <button className='btn btn-outline-dark ps-4 pe-4 text-primary fw-bold border-2'>View Shop</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product
