import axios from "axios";
import React, { useState } from "react";

function Giris(props) {
  const [girisYapildiMi, setGiris] = useState(false);
  const [butonYazisi, setButonYazi] = useState("Login");
  const [denendiMi, setDenenme] = useState(false);
  const [baslik, setBaslik] = useState("Login");

  function girisYap(event) {
    event.preventDefault();
    setButonYazi("Please wait..");

    axios
      .post(
        "https://naushopping.com:5000/admin/api/kullanici_giris",
        {
          email: event.target[0].value,
          sifre: event.target[1].value,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (gelenVeri) {
        if (gelenVeri.data.sonuc === true) {
          setGiris(true);
          setDenenme(false);
          setBaslik("Welcome!");

          window.location.href = "/admin/home";
        } else {
          setGiris(false);
          setButonYazi("Login");
          setDenenme(true);
          setBaslik("Login");
        }
      });
  }

  return (
    <div className="bg-light d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div
          className="d-flex flex-column"
          style={{ margin: "0 auto", width: "250px" }}
        >
          <h2 className="text-center text-dark p-2">{baslik}</h2>
          <form onSubmit={girisYap} className="p-2">
            <input
              autoComplete="off"
              name="username"
              placeholder="Username"
              className="form-control w-100 mt-2"
              type="text"
              disabled={girisYapildiMi ? "disabled" : null}
            />
            <input
              name="password"
              placeholder="Password"
              className="form-control w-100 mt-2"
              type="password"
              disabled={girisYapildiMi ? "disabled" : null}
            />
            <button
              type="submit"
              className="d-flex justify-content-center align-items-center btn btn-warning mt-3 w-100"
              disabled={girisYapildiMi ? "disabled" : null}
            >
              {butonYazisi}
              {girisYapildiMi && (
                <div
                  class="spinner-border spinner-border-sm"
                  role="status"
                ></div>
              )}
            </button>
          </form>

          {denendiMi ? (
            <div className="pt-2 text-danger">
            Username or password is incorrect!
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Giris;
