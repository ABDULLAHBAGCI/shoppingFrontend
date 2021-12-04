import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile_OrderHistory = () => {
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
      .get("http://localhost:5000/api/profil/siparisgecmisi", {
        withCredentials: true,
      })
      .then(function (gelenVeri) {
        setBilgiler(gelenVeri.data);
        console.log(gelenVeri.data);
      });
  }

  useEffect(bilgileriAl, []);

  return (
    <main className="col-md-9">
      <div className="card">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tracking Number</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {bilgiler.map(function (siparis, index) {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{siparis.takip_no}</td>
                  <td>{siparis.tarih}</td>
                  <td>₺{siparis.tutar}</td>
                  <td>
                    {siparis.sonuc === true ? (
                      <b className="text-success">Delivered ✓</b>
                    ) : (
                      <b className="text-danger">Not delivered ✖</b>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Profile_OrderHistory;
