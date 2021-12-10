import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile_ActiveOrder = () => {
  const [bilgiler, setBilgiler] = useState([
    {
      iletisim: [{ isim: "", email: "", soyisim: "", telefon: "" }],
      urunler: [
        {
          resimler: { bir: "" },
        },
      ],
      durum: [],
    },
  ]);

  function bilgileriAl() {
    axios
      .get("https://naushopping.com:5000/api/profil/aktifsiparis", {
        withCredentials: true,
      })
      .then(function (gelenVeri) {
        setBilgiler(gelenVeri.data);
      });
  }

  useEffect(bilgileriAl, []);

  return (
    <div className="col-md-9">
      {bilgiler.map(function (siparis) {
        return (
          <article className="card order-group mb-4">
            <header className="card-header">
              <b className="d-inline-block mr-3">
              Tracking Number : #{siparis.takip_no}
              </b>
              <span>Date: {siparis.tarih}</span>
            </header>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <h6 className="text-muted">Payment</h6>

                  <p>
                    <span class="text-success">
                      <i class="fab fa-lg fa-cc-visa"></i>
                      Paid
                    </span>
                    <br />
                    <span className="b">Total: ₺{siparis.tutar} </span>
                  </p>
                </div>
                <div className="col-md-4">
                  <h6 className="text-muted">Contact</h6>
                  <p>
                    {siparis.iletisim[0].isim} {siparis.iletisim[0].soyisim}{" "}
                    <br /> {siparis.iletisim[0].telefon} <br />{" "}
                    {siparis.iletisim[0].email}
                  </p>
                </div>
                <div className="col-md-4">
                  <h6 className="text-muted">Adress</h6>
                  <p> {siparis.adres} </p>
                </div>
              </div>
              <hr />

              <div className="tracking-wrap">
                <div className="step active">
                  <span className="icon">
                    <i className="fa fa-check"></i>
                  </span>
                  <span className="text">Preparing the order</span>
                </div>
                <div className={`step ${siparis.durum.length > 1 && "active"}`}>
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="text"> Shipped</span>
                </div>
                <div className={`step ${siparis.durum.length > 2 && "active"}`}>
                  <span className="icon">
                    <i className="fa fa-truck"></i>
                  </span>
                  <span className="text"> Cargo is on its way </span>
                </div>
                <div className={`step ${siparis.durum.length > 3 && "active"}`}>
                  <span className="icon">
                    <i className="fa fa-box"></i>
                  </span>
                  <span className="text">Ready for Delivery</span>
                </div>
              </div>
              <hr />

              <ul className="row">
                {siparis.urunler.map(function (urun) {
                  return (
                    <li className="col-md-4">
                      <figure className="itemside  mb-3">
                        <div className="aside">
                          <img src={urun.resim} className="img-sm border" />
                        </div>
                        <figcaption className="info align-self-center">
                          <p className="title">{urun.isim}</p>
                          <span className="text-muted">
                            ₺{urun.fiyat} x {urun.miktar}{" "}
                          </span>
                        </figcaption>
                      </figure>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Profile_ActiveOrder;
