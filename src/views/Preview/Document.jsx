import React from "react";
import detailIcon from "../../assets/icon.bablu/detail-icon.svg";
// import pen from '../../assets/icon.bablu/pen.svg'

const Document = () => {
  return (
    <div
      style={{ marginTop: "40px", marginBottom: "40px" }}
      className="buisness-detail customar-detail w-100"
    >
      <div className="customar-detail-head w-100 fees-box">
        <div className="head-first">
          <img src={detailIcon} alt="" />
          <h4 style={{ color: "white" }}>Document</h4>
        </div>
      </div>
    </div>
  );
};

export default Document;
