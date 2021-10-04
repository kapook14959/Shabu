import { height } from "@mui/system";
import React, { Component } from "react";
import posimage from "../../images/pos-image.png";
import "./pos.css";

export class pos extends Component {
  render() {
    return (
      <div className="pos-div">
        <nav className="navbar navbar-expand-md pos-top-bar-div">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
              <p className="pos-top-bar-left-text">มนต์นมสด</p>
            </ul>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
            <ul className="navbar-nav ml-auto">
              <ul className="nav-item ">
                <p className="pos-top-bar-right-text">คุณ บุญเสริม</p>
              </ul>
            </ul>
          </div>
        </nav>
        <div className="pos-bottom-bar-div">
          <img className="pos-bottom-bar-image" src={posimage} alt="pos"></img>
          <div class="pos-botton-bar-right-div">
            <div className="pos-bottom-bar-price">
              <p className="pos-bottom-bar-right-text">
                ราคาทั้งหมด
                <span className="pos-bottom-bar-right-text-price">197.00</span>
              </p>
            </div>
            <div className="pos-bottom-bar-order">
              <p className="pos-bottom-bar-right-order-text-title">รายการ</p>
              <p className="pos-bottom-bar-right-order-text">
                เนนช็อคโกแลต
                <span className="pos-bottom-bar-right-order-count-text">
                  x 99
                </span>
                <span className="pos-bottom-bar-right-order-price-text">
                  25.00
                </span>
              </p>

              <p className="pos-bottom-bar-right-order-text">
                เนนช็อคโกแลต
                <span className="pos-bottom-bar-right-order-count-text">
                  x 99
                </span>
                <span className="pos-bottom-bar-right-order-price-text">
                  25.00
                </span>
              </p>

              <p className="pos-bottom-bar-right-order-text">
                เนนช็อคโกแลต
                <span className="pos-bottom-bar-right-order-count-text">
                  x 99
                </span>
                <span className="pos-bottom-bar-right-order-price-text">
                  25.00
                </span>
              </p>
              <ul>
                <li className="pos-bottom-bar-right-order-menudetail-text">
                  - หวานน้อย
                </li>
                <li className="pos-bottom-bar-right-order-menudetail-text">
                  - ขวดเล็ก
                </li>
              </ul>
              <p className="pos-bottom-bar-right-order-text">
                เนนช็อคโกแลต
                <span className="pos-bottom-bar-right-order-count-text">
                  x 99
                </span>
                <span className="pos-bottom-bar-right-order-price-text">
                  25.00
                </span>
              </p>
              <ul>
                <li className="pos-bottom-bar-right-order-menudetail-text">
                  - หวานน้อย
                </li>
                <li className="pos-bottom-bar-right-order-menudetail-text">
                  - ขวดเล็ก
                </li>
              </ul>
              <hr className="pos-bottom-line"></hr>
              <p className="pos-bottom-sum-text">
                ยอดรวม<span className="pos-bottom-sum-price-text">197.00</span>
              </p>
              <p className="pos-bottom-sum-text">
                ส่วนลด<span className="pos-bottom-sum-price-text">0.00</span>
              </p>
              <p className="pos-bottom-sum-text-tax">
                ภาษี<span className="pos-bottom-sum-price-text">0.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default pos;
