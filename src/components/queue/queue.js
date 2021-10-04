import React, { Component } from "react";
import background from "../../images/queue-back.jpg";
import "./queue.css";

export class queue extends Component {
  getTime = () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes;
    return strTime;
  };

  render() {
    return (
      <div className="queue-div">
        <div className="queue-botton-bar-left-div">
          <div className="queue-head-bar-left-div">
            <p className="queue-ready-to-serve-text">พร้อมเสริฟ์</p>
            <div className="queue-bottom-left-div">
              <div className="queue-bottom-card-left-div">
                <p className="queue-bottom-card-text">T1001</p>
              </div>
              <div className="queue-bottom-card-left-div">
                <p className="queue-bottom-card-text">T1001</p>
              </div>
              <div className="queue-bottom-card-left-div">
                <p className="queue-bottom-card-text">T1001</p>
              </div>
              <div className="queue-bottom-card-left-div">
                <p className="queue-bottom-card-text">T1001</p>
              </div>
              <div className="queue-bottom-card-left-div">
                <p className="queue-bottom-card-text">T1001</p>
              </div>
              <div className="queue-bottom-card-left-div">
                <p className="queue-bottom-card-text">T1001</p>
              </div>
              <div className="queue-bottom-card-left-div">
                <p className="queue-bottom-card-text">T1001</p>
              </div>
            </div>
          </div>
          <div className="queue-head-bar-right-div">
            <p className="queue-prepairing-food-text">กำลังเตรียมอาหาร</p>
            <div className="queue-bottom-card-right-div">
              <p className="queue-bottom-prepare-card-text">T1001</p>
            </div>
            <div className="queue-bottom-card-right-div">
              <p className="queue-bottom-prepare-card-text">T1001</p>
            </div>
            <div className="queue-bottom-card-right-div">
              <p className="queue-bottom-prepare-card-text">T1001</p>
            </div>
            <div className="queue-bottom-card-right-div">
              <p className="queue-bottom-prepare-card-text">T1001</p>
            </div>
            <div className="queue-bottom-card-right-div">
              <p className="queue-bottom-prepare-card-text">T1001</p>
            </div>
            <div className="queue-bottom-card-right-div">
              <p className="queue-bottom-prepare-card-text">T1001</p>
            </div>
            <div className="queue-bottom-card-right-div">
              <p className="queue-bottom-prepare-card-text">T1001</p>
            </div>
          </div>
        </div>
        <div className="queue-botton-bar-right-div">
          <div className="queue-head-bar-right-right-div">
            <p className="queue-time-text">{this.getTime()} น.</p>
            <div>
              <img src={background} alt="background" width="100%"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default queue;
