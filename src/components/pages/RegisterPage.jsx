import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";

const RegisterPage = () => {
  const [state, setState] = useState({
    durum: 0,
    sonuc: 0,
  });
  /*
    durum : 0 -> normal
    durum : 1 -> sonuç yükleniyor..

    sonuc : 0 -> normal
    sonuc : 1 -> başarılı
    sonuc : 2 -> email zaten kullanıyor
    sonuc : 3 -> şifreler aynı değil
    sonuc : 4 -> hata var.
  */

  function uyeOl(event) {
    var isim = event.target.isim.value;
    var soyisim = event.target.soyisim.value;
    var email = event.target.email.value;
    var adres = event.target.adres.value;
    var telefon = event.target.telefon.value;
    var sifre = event.target.sifre.value;
    var reSifre = event.target.resifre.value;
    var cinsiyet = event.target.cinsiyet.value;

    if (sifre !== reSifre) {
      setState((oncekiler) => ({ ...oncekiler, sonuc: 3 }));
    } else {
      setState((oncekiler) => ({ ...oncekiler, durum: 1 }));
      axios
        .post("https://naushopping.com:5000/api/kullanici/olusturma", {
          isim: isim,
          soyisim: soyisim,
          email: email,
          adres: adres,
          telefon: telefon,
          sifre: sifre,
          cinsiyet: cinsiyet,
        })
        .then(function (gelenVeri) {
          if (gelenVeri.data.sonuc === "başarılı") {
            setState((oncekiler) => ({ durum: 1, sonuc: 1 }));
            window.location.href = "/";
          } else if (gelenVeri.data.sonuc === "email") {
            setState((oncekiler) => ({ durum: 0, sonuc: 2 }));
          } else {
            setState((oncekiler) => ({ durum: 0, sonuc: 4 }));
          }
        });
    }

    event.preventDefault();
  }

  return (
    <React.StrictMode>
      <Header />

      <section className="section-content padding-y bg">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <aside class="col-md-6">
              <div class="card">
                <article class="card-body">
                  <header class="mb-4">
                    <h4 class="card-title">Register</h4>
                  </header>
                  <form onSubmit={uyeOl}>
                    <div class="form-row">
                      <div class="col form-group">
                        <label>Name</label>
                        <input
                          name="isim"
                          autoComplete="off"
                          type="text"
                          class="form-control"
                          placeholder="Enter name"
                          required
                        />
                      </div>
                      <div class="col form-group">
                        <label>Surname</label>
                        <input
                          name="soyisim"
                          autoComplete="off"
                          type="text"
                          class="form-control"
                          placeholder="Enter surname"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col form-group">
                        <label>Email</label>
                        <input
                          autoComplete="off"
                          name="email"
                          type="email"
                          class={`form-control ${
                            state.sonuc === 2 && "is-invalid"
                          }`}
                          placeholder="Enter email"
                          required
                        />
                        <small class="form-text text-muted">
                          {state.sonuc === 2
                            ? "This email is already in use!"
                            : "Your email address is required for login!"}
                        </small>
                      </div>
                      <div class="col form-group">
                        <label>Phone</label>
                        <input
                          name="telefon"
                          class="form-control"
                          placeholder="Enter phone"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="custom-control custom-radio custom-control-inline">
                        <input
                          class="custom-control-input"
                          type="radio"
                          name="cinsiyet"
                          value="Male"
                        />
                        <span class="custom-control-label"> Men </span>
                      </label>
                      <label class="custom-control custom-radio custom-control-inline">
                        <input
                          class="custom-control-input"
                          type="radio"
                          name="cinsiyet"
                          value="Female"
                        />
                        <span class="custom-control-label"> Women </span>
                      </label>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-sm-12">
                        <label>Adress</label>
                        <input
                          name="adres"
                          required
                          type="text"
                          class="form-control"
                          placeholder="Enter Adress"
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>Create password</label>
                        <input
                          name="sifre"
                          class={`form-control ${
                            state.sonuc === 3 && "is-invalid"
                          }`}
                          type="password"
                          required
                        />
                        <small class="form-text text-muted">
                          {state.sonuc === 3
                            ? "Passwords are not the same!"
                            : "Password must be at least 8 characters!"}
                        </small>
                      </div>
                      <div class="form-group col-md-6">
                        <label>Password Repeat</label>
                        <input
                          name="resifre"
                          class={`form-control ${
                            state.sonuc === 3 && "is-invalid"
                          }`}
                          type="password"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group mt-3">
                      <button
                        type="submit"
                        class="btn btn-primary btn-block"
                        disabled={`${state.durum === 0 ? "" : "disabled"}`}
                      >
                        {state.durum === 0 ? (
                          "Register"
                        ) : (
                          <div
                            class="spinner-border spinner-border-sm"
                            role="status"
                          >
                            <span class="sr-only">Loading...</span>
                          </div>
                        )}
                      </button>
                    </div>
                    <p class="text-muted">
                    By clicking the "Register" button, you accept the confidentiality agreement.
                    </p>
                  </form>
                  <hr />
                  <p class="text-center">
                  Already a member? <a href="/login">Login</a>
                  </p>
                </article>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </React.StrictMode>
  );
};
export default RegisterPage;
