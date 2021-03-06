import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Product_CreateComment = (props) => {
  const parametreler = useParams();
  const [durum, setDurum] = useState(0);
  /*
    0 : ilk durum,
    1 : yükleniyor,
    2 : onay için bekliyor
  */

  function yorumEkle(event) {
    setDurum(1); // yükleniyor.
    var uyeisim = props.uyeisim;
    var uyeid = props.uyeid;
    var icerik = event.target.yorum.value;
    var urun_id = parametreler.id;
    var yildiz = event.target.yildiz.value;

    axios
      .post("https://naushopping.com:5000/api/yorum", {
        urun_id: urun_id,
        isim: uyeisim,
        kullanici_id: uyeid,
        icerik: icerik,
        yildiz: yildiz,
      })
      .then(function (gelenVeri) {
        setDurum(2); // onay için bekliyor
        event.target.yorum.value = "";
      });

    event.preventDefault();
  }

  return (
    <React.StrictMode>
      <form onSubmit={yorumEkle} className="bg-light p-2 rounded mb-2">
        <div className="pb-2 pr-2">Make a Comment</div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-10">
              <textarea
                placeholder="You can enter your comment here"
                rows="1"
                name="yorum"
                className="form-control"
                aria-label="With textarea"
                required
              ></textarea>
            </div>
            <div className="col-sm-1">
              <div class="btn-group">
                <select name="yildiz" class="custom-select" required>
                  <option value="1">1 Point</option>
                  <option value="2">2 Point</option>
                  <option value="3">3 Point</option>
                  <option value="4">4 Point</option>
                  <option value="5" selected>
                    5 Point
                  </option>
                </select>
              </div>
            </div>
            <div className="1">
              <button
                type="submit"
                class="btn btn-warning"
                disabled={`${durum === 1 ? "disabled" : ""}`}
              >
                Send
              </button>
            </div>
          </div>
        </div>
        {durum === 2 && <small className="pl-2">Your comment is awaiting moderation</small>}
      </form>
    </React.StrictMode>
  );
};

export default Product_CreateComment;
