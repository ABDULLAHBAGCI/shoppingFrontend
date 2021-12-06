import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../public/Footer";
import Header from "../public/Header";

const ContactDeliveryInfo_Page = () => {
  const [yeniBilgiler, setYeniBilgiler] = useState({
    isim: "",
    soyisim: "",
    email: "",
    telefon: "",
    adres: "",
  });

  const data = useLocation();
  const [kullaniciBilgileri, setKullaniciBilgileri] = useState([]);
  const urunler = data.state;
  const [hangisi, setHangisi] = useState("0");
  /*
     0 : kendi bilgileri gösterilsin
     1 : yeni bilgi ekle
  */
  var toplam = 0;

  urunler.forEach((element) => {
    toplam += element.fiyat * element.miktar;
  });

  function bilgileriAl() {
    axios
      .get("http://localhost:5000/api/profil/bilgiler", {
        withCredentials: true,
      })
      .then(function (gelenVeri) {
        setKullaniciBilgileri(gelenVeri.data);
      });
  }

  useEffect(bilgileriAl, []);

  function degerDegistir(event) {
    setHangisi(event.target.value);
  }

  function bilgiEkle(event) {
    setYeniBilgiler(function (onceki) {
      return { ...onceki, [event.target.name]: event.target.value };
    });
  }

  return (
    <React.StrictMode>
      <Header />
      <section className="section-content padding-y bg">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <article className="card mb-4">
                <div className="card-body">
                  <div className="form-check">
                    <input
                      defaultChecked="true"
                      onChange={degerDegistir}
                      value="0"
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                    Use my own information.
                    </label>
                    <div className="bg-light border border-sm rounded p-2 m-2">
                      Name : {kullaniciBilgileri.isim}{" "}
                      {kullaniciBilgileri.soyisim}
                      <br />
                      Adress : {kullaniciBilgileri.adres}
                      <br />
                      Phone : {kullaniciBilgileri.telefon}
                      <br />
                      Email : {kullaniciBilgileri.email}
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      value="1"
                      onChange={degerDegistir}
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                    I want to enter new contact information.
                    </label>
                  </div>
                </div>
              </article>
              {hangisi === "1" && (
                <React.StrictMode>
                  <article className="card mb-4">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Contact Information</h4>
                      <form action="">
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <label>İsim</label>
                            <input
                              defaultValue={yeniBilgiler.isim}
                              onChange={bilgiEkle}
                              name="name"
                              type="text"
                              placeholder="Enter name"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label>Surname</label>
                            <input
                              defaultValue={yeniBilgiler.soyisim}
                              onChange={bilgiEkle}
                              name="surname"
                              type="text"
                              placeholder="Enter Surname"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label>Phone</label>
                            <input
                              defaultValue={yeniBilgiler.telefon}
                              onChange={bilgiEkle}
                              name="phone"
                              type="text"
                              placeholder="Enter phone number"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label>Email</label>
                            <input
                              defaultValue={yeniBilgiler.email}
                              onChange={bilgiEkle}
                              name="email"
                              type="email"
                              placeholder="Enter email"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="form-group col">
                            <label>Adress</label>
                            <input
                              defaultValue={yeniBilgiler.adres}
                              onChange={bilgiEkle}
                              name="adress"
                              type="text"
                              placeholder="Enter adress"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </article>
                </React.StrictMode>
              )}
            </div>

            <aside className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right text-dark b">
                      <strong>₺{toplam.toFixed(2)}</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center mb-3">
                    <img src="/images/misc/payments.png" height="26" alt="" />
                  </p>

                  <Link
                    to={{
                      pathname: "/payment",
                      state: {
                        urunler: data.state,
                        iletisim2: {
                          isim: yeniBilgiler.isim,
                          soyisim: yeniBilgiler.soyisim,
                          email: yeniBilgiler.email,
                          telefon: yeniBilgiler.telefon,
                        },
                        adres2: yeniBilgiler.adres,
                        iletisim1: {
                          isim: kullaniciBilgileri.isim,
                          soyisim: kullaniciBilgileri.soyisim,
                          email: kullaniciBilgileri.email,
                          telefon: kullaniciBilgileri.telefon,
                        },
                        adres1: kullaniciBilgileri.adres,
                      },
                    }}
                    className={`
                        btn btn-primary btn-block
                        ${
                          (hangisi === "1" &&
                            yeniBilgiler.isim !== "" &&
                            yeniBilgiler.soyisim !== "" &&
                            yeniBilgiler.adres !== "" &&
                            yeniBilgiler.email !== "" &&
                            yeniBilgiler.telefon !== "") ||
                          hangisi === "0"
                            ? ""
                            : "disabled"
                        }
                        `}
                  >
                    Pay
                  </Link>

                  <a href="#" className="btn btn-light btn-block">
                  Continue Shopping
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </React.StrictMode>
  );
};

export default ContactDeliveryInfo_Page;
