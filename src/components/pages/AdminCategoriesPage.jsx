import axios from "axios";
import React, { useEffect, useState } from "react";
import Admin_Categories_One from "../public/Admin_Categories_One";
import Admin_Header from "../public/Admin_Header";
import Admin_LeftMenu from "../public/Admin_LeftMenu";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminCategoriesPage = () => {
  const [kategoriler, setKategoriler] = useState([]);

  function kategorileriAl() {
    setKategoriler([]);
    axios
      .get("https://naushopping.com:5000/api/kategori_liste")
      .then(function (gelenVeri) {
        setKategoriler(gelenVeri.data);
      });
  }

  useEffect(kategorileriAl, []);

  function kategoriOlustur(event) {
    axios
      .post("https://naushopping.com:5000/api/kategori_bireysel/olustur", {
        isim: event.target.isim.value,
        url: event.target.url.value,
        aciklama: event.target.aciklama.value,
      })
      .then(function (gelenVeri) {
        setKategoriler(function (oncekiVeriler) {
          return [...oncekiVeriler, gelenVeri.data];
        });
        toast.success("Category created.");
      });

    event.preventDefault();
    event.target.reset();
  }

  return (
    <React.StrictMode>
      <ToastContainer />
      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >
        <Admin_LeftMenu />
        <Admin_Header />

        <div className="page-wrapper">
          <div className="page-breadcrumb">
            <div className="row align-items-center">
              <div className="col-9">
                <h4 className="page-title">Category List</h4>
                <div className="d-flex align-items-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/admin/home">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        All Categories
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-3">
                <div className="ml-auto"></div>
              </div>
            </div>
          </div>
          <div className="row ">
            <main role="main" className="col bg-white mt-3">
              <form onSubmit={kategoriOlustur} className="p-3 m-3 bg-light">
                Add Category
                <div className="form-row mt-2">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="name"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      name="url"
                      placeholder="Enter URL"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-11">
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      name="description"
                      placeholder="Enter description"
                    />
                  </div>

                  <div className="form-group col-md-1 d-flex align-items-end justify-content-center">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </form>

              {kategoriler.map(function (kategori, index) {
                return (
                  <Admin_Categories_One
                    kategoriGuncellendi={kategorileriAl}
                    key={index}
                    id={kategori._id}
                    index={index + 1}
                    isim={kategori.kategori_isim}
                    url={kategori.category_url}
                    aciklama={kategori.kategori_aciklama}
                  />
                );
              })}
            </main>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default AdminCategoriesPage;
