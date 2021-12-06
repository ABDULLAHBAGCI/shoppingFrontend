import React from "react";
import { useLocation } from "react-router";

const Admin_LeftMenu = () => {
  return (
    <aside className="left-sidebar pl-3 pr-3 mt-3 " data-sidebarbg="skin6">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li>
              <div className="user-profile d-flex no-block dropdown m-t-20">
                <div className="user-pic">
                  <img
                    src="../../assets/images/users/1.jpg"
                    alt="users"
                    className="rounded-circle mr-2"
                    width="40"
                  />
                </div>
                <div className="user-content hide-menu m-l-10">
                  <a
                    href="javascript:void(0)"
                    className=""
                    id="Userdd"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <h5 className="m-b-0 user-name font-small">Pinar</h5>
                    <span className="op-5 user-email">pinar@gmail.com</span>
                  </a>
                </div>
              </div>
            </li>
            <li className="p-15 m-t-10">
              <a
                href="/admin/add-product"
                className="btn btn-block create-btn text-white no-block d-flex align-items-center"
              >
                <i className="fa fa-plus-square"></i>
                <span className="hide-menu m-l-5 p-2">Add Product</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className={`sidebar-link waves-effect waves-dark sidebar-link  pl-0 ml-0 ${
                  window.location.href.includes("/admin/home") &&
                  "active text-info"
                }`}
                href="/admin/home"
                aria-expanded="false"
              >
                <i className="mdi mdi-view-dashboard"></i>
                <span className="hide-menu">Panel</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className={`sidebar-link waves-effect waves-dark sidebar-link  pl-0 ml-0 ${
                  window.location.href.includes("/admin/products") &&
                  "active text-info"
                }`}
                href="/admin/products"
                aria-expanded="false"
              >
                <i className="mdi mdi-account-network"></i>
                <span className="hide-menu">Products</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className={`sidebar-link waves-effect waves-dark sidebar-link  pl-0 ml-0 ${
                  window.location.href.includes("/admin/orders") &&
                  "active text-info"
                }`}
                href="/admin/orders"
                aria-expanded="false"
              >
                <i className="mdi mdi-account-network"></i>
                <span className="hide-menu">Orders</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className={`sidebar-link waves-effect waves-dark sidebar-link  pl-0 ml-0 ${
                  window.location.href.includes("/admin/categories") &&
                  "active text-info"
                }`}
                href="/admin/categories"
                aria-expanded="false"
              >
                <i className="mdi mdi-border-all"></i>
                <span className="hide-menu">Categories</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className={`sidebar-link waves-effect waves-dark sidebar-link  pl-0 ml-0 ${
                  window.location.href.includes("/admin/users") &&
                  "active text-info"
                }`}
                href="/admin/users"
                aria-expanded="false"
              >
                <i className="mdi mdi-face"></i>
                <span className="hide-menu">Users</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className={`sidebar-link waves-effect waves-dark sidebar-link  pl-0 ml-0 ${
                  window.location.href.includes("/admin/comments") &&
                  "active text-info"
                }`}
                href="/admin/comments"
                aria-expanded="false"
              >
                <i className="mdi mdi-file"></i>
                <span className="hide-menu">Reviews</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Admin_LeftMenu;
