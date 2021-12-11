import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile_Information = () => {
  const [bilgiler, setBilgiler] = useState([]);
  const [durum, setDurum] = useState(0);
  /*
    0 : normal durum
    1 : güncellendi.
    2 : kaydediliyor.
  */

  function bilgileriAl() {
    axios
      .get("https://naushopping.com:5000/api/profil/bilgiler", {
        withCredentials: true,
      })
      .then(function (gelenVeri) {
        setBilgiler(gelenVeri.data);
        console.log("bilgiler", gelenVeri.data);
      });
  }

  useEffect(bilgileriAl, []);

  function bilgileriGonder(event) {
    setDurum(2);
    axios
      .patch(
        "https://naushopping.com:5000/api/profil/bilgiler",
        {
          isim: event.target.isim.value,
          soyisim: event.target.soyisim.value,
          adres: event.target.adres.value,
          telefon: event.target.telefon.value,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (gelenVeri) {
        setDurum(1);
      });

    event.preventDefault();
  }

  return (
    <main className="col-md-9">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-4">Profile</h4>
          <form onSubmit={bilgileriGonder}>
            <div className="form-row">
              <div className="col form-group">
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  defaultValue={bilgiler.isim}
                />
              </div>
              <div className="col form-group">
                <label>Surname</label>
                <input
                  name="surname"
                  type="text"
                  className="form-control"
                  defaultValue={bilgiler.soyisim}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  defaultValue={bilgiler.email}
                  disabled
                />
              </div>
              <div className="form-group col-md-6">
                <label>Phone</label>
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  defaultValue={bilgiler.telefon}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label>Adress</label>
                <input
                  name="adress"
                  type="text"
                  className="form-control"
                  defaultValue={bilgiler.adres}
                />
              </div>
            </div>

            <button className="btn btn-primary btn-block">
              {durum === 0 && "Save"}
              {durum === 1 && "Updated"}
              {durum === 2 && "Saving Informations.."}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Profile_Information;
