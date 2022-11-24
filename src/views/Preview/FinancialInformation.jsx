import React from "react";
import detailIcon from "../../assets/icon.bablu/detail-icon.svg";
import pen from "../../assets/icon.bablu/pen.svg";

const FinancialInformation = () => {
  return (
    <div
      style={{ marginTop: "40px", marginBottom: "40px" }}
      className="buisness-detail customar-detail w-100"
    >
      <div className="customar-detail-head w-100 fees-box">
        <div className="head-first">
          <img src={detailIcon} alt="" />
          <h4 style={{ color: "white" }}>Financial Information</h4>
        </div>
        <div className="button-box">
          <button className="   custom-btn  flex ">
            <img src={pen} style={{ marginRight: "7px" }} alt="" />
            Edit
          </button>
        </div>
      </div>

      <div className="detail-content">
        <div>
          <p>Bank Name</p>
          <span className="extra-color">Easturn Bank</span>
        </div>
        <div>
          <p>Sort Code</p>
          <span className="extra-color">2734646</span>
        </div>
        <div>
          <p>Account Name</p>
          <span className="extra-color">Zakariya Rahman</span>
        </div>

        <div>
          <p>Account Number</p>
          <span className="extra-color">2934845875757</span>
        </div>
        <div>
          <p>Name of Account Holder</p>
          <span className="extra-color">50%</span>
        </div>
        <div>
          <p>Account Number</p>
          <span className="extra-color">2934845875757</span>
        </div>
        <div>
          <p>Sort Code</p>
          <span className="extra-color">2734646</span>
        </div>
        <div>
          <p>Bank Name</p>
          <span className="extra-color">Easturn Bank</span>
        </div>
        <div>
          <p>Faster Payment</p>
          <span className="extra-color">Yes</span>
        </div>
        <div>
          <p>Cash Back</p>
          <span className="extra-color">
            <span className="me-2">Yes</span> 30%
          </span>
        </div>
        <div>
          <p>Payment Method</p>
          <span className="extra-color">ALB</span>
        </div>
        <div>
          <p>Funding Frequency</p>
          <span className="extra-color">Daily</span>
        </div>
        <div>
          <p>Billing Frequency</p>
          <span className="extra-color">Weekly</span>
        </div>
        <div>
          <p>Settelment Method</p>
          <span className="extra-color">Gross</span>
        </div>
        <div>
          <p>Account</p>
          <span className="extra-color">Deposit</span>
        </div>
      </div>
    </div>
  );
};

export default FinancialInformation;
