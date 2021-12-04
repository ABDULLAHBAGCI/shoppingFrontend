import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin_Popular10Products = () => {
  const [bilgiler, setBilgiler] = useState([]);

  function bilgileriAl() {
    axios
      .get("http://localhost:5000/admin/api/populerurunler")
      .then(function (gelenVeri) {
        setBilgiler(gelenVeri.data);
      });
  }

  useEffect(bilgileriAl, []);

  function urunSil(event) {
    console.log(event.target.value);
    axios
      .delete(
        "http://localhost:5000/admin/api/urunsil?id=" + event.target.value
      )
      .then(function (gelenVeri) {
        if (gelenVeri.data.sonuc === true) {
          urunuArraydenKaldir(event.target.value);
        } else {
          alert("Bir hata oluştu, ürün silinemedi.");
        }
      });
  }

  function urunuArraydenKaldir(id) {
    var bosArray = bilgiler.filter(function (bakilan) {
      return bakilan._id !== id;
    });

    setBilgiler(bosArray);
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-md-flex align-items-center">
              <div>
                <h5 className="card-title">Top 10 Products</h5>
                <h6 className="card-subtitle">
                You can view the best selling products
                </h6>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table v-middle">
              <thead>
                <tr className="bg-light">
                  <th className="border-top-0">Product</th>
                  <th className="border-top-0">Category</th>
                  <th className="border-top-0">Brand</th>
                  <th className="border-top-0">Discounted Price</th>
                  <th className="border-top-0">Normal Price</th>
                  <th className="border-top-0">Number of Stocks</th>
                  <th className="border-top-0">Delete</th>
                  <th className="border-top-0">Edit</th>
                </tr>
              </thead>
              <tbody>
                {bilgiler.map(function (urun) {
                  return (
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="m-r-10"></div>
                          <div className="">
                            <h4 className="m-b-0 font-16">{urun.isim}</h4>
                          </div>
                        </div>
                      </td>
                      <td>{urun.kategori}</td>
                      <td>{urun.marka}</td>
                      <td>{urun.ind_fiyat}</td>
                      <td>{urun.normal_fiyat}</td>
                      <td>{urun.satilma}</td>
                      <td>
                        <button
                          value={urun._id}
                          className="btn btn-danger"
                          onClick={(e) => {
                            if (
                              window.confirm(
                                "Are you sure you want to delete ?"
                              )
                            ) {
                              urunSil(e);
                            }
                          }}
                        >
                          Sil
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-secondary">Edit</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Popular10Products;
