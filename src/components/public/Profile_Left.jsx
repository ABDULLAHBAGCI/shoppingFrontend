import React from "react";
import axios from "axios";

const Profile_Left = (props) => {
  function cikisYap() {
    axios
      .get("https://naushopping.com:5000/api/kullanici/cikis", {
        withCredentials: true,
      })
      .then(function (gelenVeri) {
        window.location.href = "/";
      });
  }

  return (
    <aside className="col-md-3">
      <ul className="list-group">
        <a
          onClick={props.bir}
          className={`list-group-item ${props.hangisi === 1 && "active"}`}
          href="#"
        >
          Information
        </a>
        <a
          onClick={props.iki}
          className={`list-group-item ${props.hangisi === 2 && "active"}`}
          href="#"
        >
          Active Order
        </a>
        <a
          onClick={props.uc}
          className={`list-group-item ${props.hangisi === 3 && "active"}`}
          href="#"
        >
          Order History
        </a>
        <a
          onClick={props.dort}
          className={`list-group-item ${props.hangisi === 4 && "active"}`}
          href="#"
        >
          Change Password
        </a>
      </ul>
      <br />
      <a onClick={cikisYap} className="btn btn-light btn-block" href="#">
        <i className="fa fa-power-off"></i>
        <span className="text">Log out</span>
      </a>
    </aside>
  );
};

export default Profile_Left;
