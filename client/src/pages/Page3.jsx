import React from "react";
import "../App.css";
import style from "../styles/Register.module.css";
function Page3() {
  return (
    <>
      <div className="row" style={{ height: "620px", width:"100%" }}>
        <div
          className="col"
          id={style.rightContainer}
          style={{ height: "100%" }}
        >
          <div className="p-4">
            <strong>Logo here</strong>
          </div>
          <div id={style.bottomBlur}>
            <div className={style.BlurBottom}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry'
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="singIn">
            <p>
              {" "}
              have an account{" "}
              <a href="/">
                <span style={{ color: " #1D1D1D" }}>Sign In!</span>
              </a>
            </p>
          </div>
          <div
            className="container  "
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <form style={{ width: "80%",marginTop:"-2rem" }}>
              <div class="row">
                <div class="col">
                  <input
                    className="form-control"
                    value={"9243255448"}
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div class="col"></div>
              </div>
              <br />

              <div class="row">
                <div class="col">
                  <input className="form-control" placeholder="Enter PAN" />
                </div>
                <div class="col"></div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <input className="form-control" />
                  <br />
                </div>
                <div class="col">
                  <input className="form-control" />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input className="form-control" />
                  <br />
                </div>
                <div class="col">
                  <input className="form-control" />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input className="form-control" />
                  <br />
                </div>
                <div class="col">
                  <input className="form-control" />
                </div>
              </div>

              <br />
              <button
                className="form-control  "
                style={{ backgroundColor: "#FFD857" }}
              >
                Proceed
              </button>
            </form>
            <div className="mt-5" id={style.footerTerms}>
              By continuing you indicate that you read and agreed to the Terms
              of Use
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page3;
