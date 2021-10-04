import React, { Component } from "react";
import "./login.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

export class login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-middle">
          <div className="login-inner">
            <div>
              <img
                className="login-image"
                src={logo}
                width="210"
                height="210"
                alt="logo"
              />
            </div>
            <div className="login-input-form">
              <div className="login-title-div">
                <p className="login-title">ลงชื่อเข้าสู่ระบบ</p>
              </div>
              <input
                className="login-input"
                type="text"
                placeholder="Tel"
              ></input>
              <div className="login-textfield-div">
                <input
                  className="login-input"
                  type="password"
                  placeholder="Password"
                ></input>
              </div>
              <div className="login-suggest-text-div">
                <p className="login-suggest-text">
                  กรุณาเข้าใช้งานด้วยรหัสผ่านของท่าน
                </p>
              </div>
              <button className="login-button" type="submit">
                เข้าสู่ระบบ
              </button>
              <div className="login-reset-password-div">
                <p className="login-forgot-password-text">
                  ลืมรหัสผ่าน ? <span>&nbsp;&nbsp;</span>
                  <Link className="login-reset-password-text" to="/">
                    รีเซ็ตรหัสผ่าน
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
