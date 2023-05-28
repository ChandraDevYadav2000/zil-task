import React from "react";

function Contact() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?size=626&ext=jpg&ga=GA1.2.1204143450.1651371989&semt=sph")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "400px",
      }}
    >
      <div className="row">
        <div className="col-12">
          <h1 className="text-center fw-bold mt-5 pt-5 text-white">
            Hey Sleepyhead!
          </h1>
          <p className="text-center text-white fs-5 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            deleniti hic id sed! Explicabo, velit.
          </p>
          <div className="container">
            <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-8">
            <div class="input-group mb-3 mt-3">
            <input
              type="email"
              class="form-control"
              placeholder="Enter your email"
              style={{borderRadius: '10px', fontWeight: '600'}}
            />
            <span class="input-group-text ms-3 bg-danger text-white border-0 ps-5 pe-5 pt-3 pb-3" style={{borderRadius: '10px', fontWeight: '600'}}>
              SUBSCRIBE
            </span>
          </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
