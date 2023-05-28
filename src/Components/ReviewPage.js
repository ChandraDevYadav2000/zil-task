import React from "react";

function ReviewPage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 ">
          <div className="container bg-info mt-5 pb-5 pt-5">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                <h2 className="fw-bold">Product Rating & Reviews</h2>
                <h2 className="text-danger fw-bold">
                  4.0
                  <sup>
                    <i className="fa-solid fa-star fs-6"></i>
                  </sup>
                </h2>
                <p className="fs-5" style={{fontWeight: '600'}}>28138 Ratings,</p>
                <p className="fs-5" style={{fontWeight: '600'}}>4938 Reviews</p>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                <div className="container-fluid mt-md-3 mt-lg-0">
                <div className="row justify-content-center pt-2 pb-2">
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                            <p className="mb-2 mb-md-0">Execellent</p>
                            </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
                        <div className="progress mt-md-1">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-1">
                            <p className="mt-2 mt-md-0">1986</p>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-2 pb-2">
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                            <p className="">VeryGood</p>
                            </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
                        <div className="progress mt-1">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-1">
                            <p className="">1986</p>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-2 pb-2">
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                            <p className="">Good</p>
                            </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
                        <div className="progress mt-1">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-1">
                            <p className="">1986</p>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-2 pb-2">
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                            <p className="">Average</p>
                            </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
                        <div className="progress mt-1">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '45%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-1">
                            <p className="">1986</p>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-2 pb-2">
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                            <p className="">Poor</p>
                            </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
                        <div className="progress mt-1">
                        <div className="progress-bar bg-black" role="progressbar" style={{width: '30%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-1">
                            <p className="">1986</p>
                        </div>
                    </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
