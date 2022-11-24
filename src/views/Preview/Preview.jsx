import React, { useState } from "react";
import "./Preview.css";
import image from "../../assets/icon.bablu/new-application.svg";
import detailIcon from "../../assets/icon.bablu/detail-icon.svg";
import pen from "../../assets/icon.bablu/pen.svg";
import CustomarDetail from "./CustomarDetail";
import CustomarDetailEdit from "./CustomarDetailEdit";
import ApplicationDetails from "./ApplicationDetails";
import FinancialInformation from "./FinancialInformation";
import Document from "./Document";

const Preview = () => {
  const [edit, setEdit] = useState(true);

  // const customerDetailEdit = () =>{
  //     setEdit(!edit)
  // }
  return (
    <div className="main">
      {/* ------------heading box------------------ */}
      <div className="heading-box w-100">
        <img src={image} alt="" />
        <h2>New Application</h2>
      </div>
      {/* -------------heading box----------------- */}
      {/* -------------Customar detail start ------------------ */}
      {edit ? (
        <CustomarDetail edit={edit} setEdit={setEdit} />
      ) : (
        <CustomarDetailEdit edit={edit} setEdit={setEdit} />
      )}

      {/* -------------Customar detail end ------------------ */}

      {/* ----------------Buisness Detail----------------- */}
      <div
        style={{ marginTop: "40px", marginBottom: "40px" }}
        className="buisness-detail customar-detail w-100 "
      >
        <div className="customar-detail-head w-100 fees-box">
          <div className="head-first">
            <img src={detailIcon} alt="" />
            <h4 style={{ color: "white" }}>Business Details</h4>
          </div>
          <div className="button-box">
            <button className="   custom-btn  flex ">
              <img src={pen} style={{ marginRight: "7px" }} alt="" />
              Edit
            </button>
          </div>
        </div>

        {/* buissness content */}
        <div className="buissness-data">
          <div className="detail-content">
            <div>
              <p>Business Type</p>
              <span>Solar trade</span>
            </div>
            <div>
              <p>Legal Name</p>
              <span>Shafin</span>
            </div>
            <div>
              <p>Trading Name</p>
              <span>Shafin T/A Shafin</span>
            </div>
            <div>
              <p>CRN / UTR</p>
              <span>Lorim Ipsum</span>
            </div>

            <div>
              <p>Mobile Number</p>
              <span>+08293484471</span>
            </div>
            <div>
              <p>Email</p>
              <span>zakariya@gmail.com</span>
            </div>
            <div>
              <p>CRN / UTR</p>
              <span>Lorim Ipsum</span>
            </div>
            <div>
              <p>MCC Code</p>
              <span>12345</span>
            </div>

            <div>
              <p>MID Status</p>
              <span>Open</span>
            </div>
            <div>
              <p>Business Status</p>
              <span>Lorim Ipsum</span>
            </div>
            <div>
              <p>Industry Type</p>
              <span>Lorim Ipsum</span>
            </div>
            <div>
              <p>PEC</p>
              <span>52377</span>
            </div>
            <div>
              <p>Website</p>
              <span className="site">
                <a href="www.devsstream.com" target="_blank">
                  www.devsstream.com
                </a>
              </span>
            </div>
          </div>
          {/* -----------------------legal address-------------------- */}
          <div>
            <div
              className="data-border"
              style={{
                margin: "0 26px",
                paddingBottom: "12px",
                backgroundColor: "#f5f5f5",
              }}
            >
              <span>Legal Address Information</span>
            </div>
            <div className="detail-content">
              <div>
                <p>Address 1</p>
                <span>Lorim Ipsum</span>
              </div>
              <div>
                <p>Address 2</p>
                <span>Lorim Ipsum</span>
              </div>
              <div>
                <p>City/Town</p>
                <span>Lorim Ipsum</span>
              </div>
              <div>
                <p>Post Code</p>
                <span>12345</span>
              </div>
              <div>
                <p>County</p>
                <span>United Kingdom</span>
              </div>
              <div>
                <p>County</p>
                <span>United Kingdom</span>
              </div>
            </div>
          </div>
          {/* ------------------legal address -----------------*/}
          {/* --------------Trading Address----------------------- */}
          <div>
            <div
              className="data-border"
              style={{ margin: "0 26px", paddingBottom: "12px" }}
            >
              <span>Trading Address Information</span>
            </div>
            <div className="detail-content">
              <div>
                <p>Address 1</p>
                <span>Lorim Ipsum</span>
              </div>
              <div>
                <p>Address 2</p>
                <span>Lorim Ipsum</span>
              </div>
              <div>
                <p>City/Town</p>
                <span>Lorim Ipsum</span>
              </div>
              <div>
                <p>Post Code</p>
                <span>12345</span>
              </div>
              <div>
                <p>County</p>
                <span>United Kingdom</span>
              </div>
              <div>
                <p>County</p>
                <span>United Kingdom</span>
              </div>
            </div>
          </div>
          {/* --------------Trading Address----------------------- */}
        </div>
      </div>

      {/* ----------------Buisness Detail----------------- */}
      {/* -------------Shedule Of fees start------------------- */}
      <div
        style={{ marginTop: "40px", marginBottom: "40px" }}
        className="buisness-detail customar-detail w-100"
      >
        <div className="customar-detail-head w-100 fees-box">
          <div className="head-first">
            <img src={detailIcon} alt="" />
            <h4 style={{ color: "white" }}>Schedule of Fees</h4>
          </div>
          <div className="button-box">
            <button className="   custom-btn  flex ">
              <img src={pen} style={{ marginRight: "7px" }} alt="" />
              Edit
            </button>
          </div>
        </div>
        {/* -------------fees content----------------- */}
        {/* <div className="fees-content">
          <div className=" ">
            <div className="row " >
              <div className="col-6">
                <p>Debit</p>
              </div>
              <div className="col-6">
                <p >Credit</p>
              </div>
            </div>
            <div className="detail-content " >
              <div>
                <span className="fees-content-title">Visa debit:</span>
                <span>0.45%</span>
              </div>
              <div>
                <span className="fees-content-title">Mastercard debit:</span>
                <span>0.48% </span>
              </div>
              <div>
                <span className="fees-content-title">Visa debit:</span>
                <span>0.45%</span>
              </div>
              <div>
                <span className="fees-content-title">Mastercard debit:</span>
                <span>0.48% </span>
              </div>
            </div>
          </div>
          <div className="data-border">
            <div className="detail-content">
              <div>
                <p>Auth Fess</p>
                <span>£0.015</span>
              </div>
              <div>
                <p>MMSC</p>
                <span>£0.30</span>
              </div>
              <div>
                <p>Average transect value</p>
                <span>£0.30</span>
              </div>
              <div>
                <p>Annual Turnover</p>
                <span>£0.30</span>
              </div>
              <div>
                <p>Annual Card Turnover</p>
                <span>£0.030</span>
              </div>
              <div className='spanTwo'>
                <p>Card Acceptance Ratio</p>
                <span>
                  Face to Face: 50% CNP/Moto: 30% <br /> E-Commerce: 20%
                </span>
              </div>
              <div>
                <p>Notes</p>
                <span>£0.30</span>
              </div>
            </div>
          </div>
        </div> */}
        {/* -------------fees content----------------- */}
      </div>
      {/* -------------Shedule Of fees end------------------- */}
      {/* ------------------Application Details---------------- */}
      <ApplicationDetails />
      {/* ------------------Application Details---------------- */}
      {/* -------------Financial Information---------- */}
      <FinancialInformation />
      {/* -------------Financial Information---------- */}
      {/* -------------Document---------- */}
      <Document />
      {/* -------------Document---------- */}
    </div>
  );
};

export default Preview;
