import React from "react";
import img from "../../../../img/download.gif";
import "./Hope.css";

const Hope = () => {
  return (
    <div className="overflow-hidden">
      <div className="row ">
        <img className="col-md-6 img-fluid" src={img} alt="" />
        <div className="text-warning col-md-6 d-flex align-items-center justify-content-center b ">
          <p className="m-0 p-3">We Value Your Time & Comfort</p>
        </div>
      </div>
    </div>
  );
};

export default Hope;
