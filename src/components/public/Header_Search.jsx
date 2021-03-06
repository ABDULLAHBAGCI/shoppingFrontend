import React from "react";

const Header_Search = () => {
  return (
    <form action="#" className="search">
      <div className="input-group w-100">
        <input
          type="text"
          className="form-control"
          style={{ width: "60%" }}
          placeholder="Enter product name"
        />

        <div className="input-group-append">
          <button className="btn btn-info" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Header_Search;
