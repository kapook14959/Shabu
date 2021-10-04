import React, { Component } from "react";
import "./kitchen.css";
import refresh from "../../images/refresh.png";
import hamburger from "../../images/hamburger.png";
import atplace from "../../images/atplace.png";
import takehome from "../../images/takehome.png";
import { checkboxClasses } from "@mui/material";

export class kitchen extends Component {
  constructor(props) {
    super(props);
    this.checkBoxList = [];
    //this.menuItems = [];
    this.state = {
      menuItems: [],
    };
  }

  state = {
    Time: "",
  };

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ Time: this.getTime() });
  //     console.log(this.state.Time);
  //   }, 1000);
  // }

  getDate = () => {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    return (today = dd + "/" + mm + "/" + yyyy);
  };

  getTime = () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes;
    return strTime;
  };

  getAmPm = () => {
    var date = new Date();
    var hours = date.getHours();
    return hours >= 12 ? "PM" : "AM";
  };

  getData = () => {
    const menuDetails1 = '{"detail1": "เพิ่มนมข้น", "detail2": "น้ำตาลน้อย"}';
    const menuDetails2 = '{"detail1": "เพิ่มนมข้น"}';
    const menus =
      '[{"countOrder": 1, "menuName": "เนยน้ำตาล"},' +
      '{"countOrder": 1, "menuName": "เนยน้ำตาล","menuDetails": ' +
      menuDetails2 +
      "}]";

    const menus2 =
      '[{"countOrder": 1, "menuName": "เนยน้ำตาล"},' +
      '{"countOrder": 99, "menuName": "เนยน้ำตาลนมข้นหวาน","menuDetails": ' +
      menuDetails1 +
      "}," +
      '{"countOrder": 1, "menuName": "เนยน้ำตาล"},' +
      '{"countOrder": 1, "menuName": "เนยน้ำตาล","menuDetails": ' +
      menuDetails2 +
      "}]";

    const menus3 =
      '[{"countOrder": 1, "menuName": "เนยน้ำตาล"},' +
      '{"countOrder": 99, "menuName": "เนยน้ำตาลนมข้นหวาน","menuDetails": ' +
      menuDetails1 +
      "}," +
      '{"countOrder": 3, "menuName": "เนยน้ำตาล"},' +
      '{"countOrder": 1, "menuName": "เนยน้ำตาล"},' +
      '{"countOrder": 2, "menuName": "เนยน้ำตาล","menuDetails": ' +
      menuDetails2 +
      "}," +
      '{"countOrder": 1, "menuName": "เนยน้ำตาล","menuDetails": ' +
      menuDetails1 +
      "}," +
      '{"countOrder": 1, "menuName": "เนยน้ำตาล"},' +
      '{"countOrder": 1, "menuName": "เนยน้ำตาล","menuDetails": ' +
      menuDetails2 +
      "}]";

    const object1 =
      '{"where": "ทานที่ร้าน",' +
      '"queueNumber": "A0101",' +
      '"time": "13:01",' +
      '"menus": ' +
      menus +
      "," +
      '"orderNumber": "2020052510101",' +
      '"remainTime": "00:06:14"}';

    const object2 =
      '{"where": "ซื้อกลับบ้าน",' +
      '"queueNumber": "A0102",' +
      '"time": "13:01",' +
      '"menus": ' +
      menus2 +
      "," +
      '"orderNumber": "2020052510101",' +
      '"remainTime": "00:06:14"}';

    const object3 =
      '{"where": "ซื้อกลับบ้าน",' +
      '"queueNumber": "A0103",' +
      '"time": "13:01",' +
      '"menus": ' +
      menus3 +
      "," +
      '"orderNumber": "2020052510101",' +
      '"remainTime": "00:06:14"}';
    const arrayObject =
      '{"data": [' +
      object1 +
      "," +
      object3 +
      "," +
      object2 +
      "," +
      object3 +
      "," +
      object1 +
      "," +
      object2 +
      "]}";
    return JSON.parse(arrayObject);
  };

  getForloop = () => {
    const data = this.getData();

    if (this.state.menuItems.length !== data.data.length) {
      for (let [index, value] of data.data.entries()) {
        const image = value.where === "ทานที่ร้าน" ? atplace : takehome;
        var topBarColor = "";
        if (value.queueNumber === "A0101") {
          topBarColor = "#ed6464";
        } else if (value.queueNumber === "A0102") {
          topBarColor = "#FFCF00";
        } else if (value.queueNumber === "A0103") {
          topBarColor = "#A7DE31";
        }

        this.state.menuItems.push(
          <div className="kitchen-cards" key={index}>
            <div
              className="kitchen-card-top-div"
              style={{ backgroundColor: topBarColor }}
            >
              <ul>
                <img
                  className="kitchen-card-top-image-ul"
                  src={image}
                  width="80"
                  height="80"
                  alt="icon"
                ></img>
              </ul>
              <ul>
                <li className="kitchen-card-top-first-line">{value.where}</li>
                <li className="kitchen-card-top-second-line">
                  คิวที่ {value.queueNumber}
                </li>
                <li className="kitchen-card-top-third-line">{value.time}</li>
              </ul>
              <ul>
                <button
                  onClick={() => this.removeCard(index)}
                  className="kitchen-card-top-button"
                >
                  <p className="kitchen-card-top-button-text">OK</p>
                </button>
              </ul>
            </div>
            {this.initialCheckBoxList(value.menus, data.data.length)}
            {this.getMenu(value.menus, index)}
            <div className="kitchen-card-bottom-div">
              <hr></hr>
              <p className="kitchen-card-bottom-text">
                Order
                <span className="kitchen-card-bottom-text">
                  {value.orderNumber}
                </span>
                <span className="kitchen-card-bottom-text-pos">POS</span>
              </p>
              <p className="kitchen-card-bottom-text">{value.remainTime}</p>
            </div>
          </div>
        );
      }
    }

    return this.state.menuItems;
  };

  getMenu = (menus, index) => {
    const menuItems = [];
    for (let [menuIndex, value] of menus.entries()) {
      menuItems.push(
        <div>
          <div className="kitchen-card-order-div">
            <ul>
              <input
                key={index + "" + menuIndex}
                onChange={(e, data) =>
                  this.onClickCheckBox(index + "" + menuIndex)
                }
                type="checkbox"
                style={{ width: "18px", height: "18px", marginTop: "4px" }}
              ></input>
            </ul>
            <ul className="kitchen-card-order-text-ul">
              <span className="kitchen-card-order-text">
                {value.countOrder} x
              </span>
            </ul>
            <ul>
              <span className="kitchen-card-order-text">{value.menuName}</span>
            </ul>
          </div>
          <div className="kitchen-card-order-menu-detail-div">
            {this.getMenuDetail(value)}
          </div>
        </div>
      );
    }
    return menuItems;
  };

  getMenuDetail = (value) => {
    const menuDetailItems = [];
    if (value.hasOwnProperty("menuDetails")) {
      const menuDetails = value.menuDetails;
      if (menuDetails.hasOwnProperty("detail1")) {
        menuDetailItems.push(
          <ul>
            <li>
              <span className="kitchen-card-order-menu-detail-text-span">
                {menuDetails.detail1}
              </span>
            </li>
          </ul>
        );
      }

      if (menuDetails.hasOwnProperty("detail2")) {
        menuDetailItems.push(
          <ul>
            <li>
              <span className="kitchen-card-order-menu-detail-text-span">
                {menuDetails.detail2}
              </span>
            </li>
          </ul>
        );
      }
      return menuDetailItems;
    }
  };

  onClickCheckBox = (key) => {
    const splitkey = key.split("");
    const cardIndex = splitkey[0];
    const checkBoxIndex = splitkey[1];
    const tempValue = this.checkBoxList[cardIndex][checkBoxIndex];
    var count = 0;
    this.checkBoxList[cardIndex][checkBoxIndex] = !tempValue;
    for (let value of this.checkBoxList[cardIndex]) {
      if (value) {
        count = count + 1;
      }

      if (count === this.checkBoxList[cardIndex].length) {
      }
    }
    console.log(this.checkBoxList);
  };

  initialCheckBoxList = (menus, length) => {
    var checkListItems = [];
    if (this.checkBoxList.length !== length) {
      for (let [i, value] of menus.entries()) {
        checkListItems.push(false);

        if (i === menus.length - 1) {
          this.checkBoxList.push(checkListItems);
          checkListItems = [];
        }
      }
    }
  };

  getNormalCard = () => {};

  getCheckedBoxCard = () => {};

  getDoneCard = () => {};

  removeCard = (index) => {
    //this.menuItems.splice(index, 1);
    // const tempValue = this.state.menuItems.splice(index, 1);
    this.setState({ menuItems: [] });
    //this.setState({ menuItems: this.state.menuItems.splice(index, 1) });
    console.log(this.state.menuItems);
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md kitchen-top-bar-div">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
              <li className="kitchen-hamburger-div">
                <img
                  src={hamburger}
                  width="31"
                  height="24"
                  alt="hamburger"
                ></img>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <ul className="kitchen-order-count-first-line-text">8</ul>
                <ul className="kitchen-order-count-second-line-text">
                  ออเดอร์รอการจัดเตรียม
                </ul>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav mr-auto">
            <ul className="kitchen-date-text">{this.getDate()}</ul>
            <ul className="kitchen-time-text">{this.getTime()}</ul>
            <li className="kitchen-time-text">&nbsp;&nbsp;{this.getAmPm()}</li>
          </ul>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
            <ul className="navbar-nav ml-auto">
              <ul className="kitchen-name-text">ครัวขนมปัง</ul>
              <ul className="nav-item kitchen-right-item-top-bar">
                <img src={refresh} width="34" height="34" alt="refresh" />
              </ul>
            </ul>
          </div>
        </nav>

        <div className="kitchen-order-div">
          <div className="kitchen-scrolls">{this.getForloop()}</div>
        </div>
      </div>
    );
  }
}

export default kitchen;
