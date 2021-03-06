import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import Admin_Header from "../public/Admin_Header.jsx";
import Admin_LeftMenu from "../public/Admin_LeftMenu.jsx";

const AdminEditProductPage = () => {
  const el = useRef();

  const [progress, setProgress] = useState(0);
  const [kategoriler, setKategoriler] = useState([]);
  const [dosya1, setDosya1] = useState("");
  const [dosya2, setDosya2] = useState("");
  const [dosya3, setDosya3] = useState("");
  const [dosya4, setDosya4] = useState("");

  function kategorileriAl() {
    axios
      .get("https://naushopping.com:5000/api/kategori_liste")
      .then(function (gelenVeri) {
        setKategoriler(gelenVeri.data);
      });
  }

  useEffect(kategorileriAl, []);

  function handleChange(event) {
    setProgress(0);
    const dosya = event.target.files[0];
    const nameDegeri = event.target.name;

    if (nameDegeri === "dosya1") {
      setDosya1(dosya);
    } else if (nameDegeri === "dosya2") {
      setDosya2(dosya);
    } else if (nameDegeri === "dosya3") {
      setDosya3(dosya);
    } else if (nameDegeri === "dosya4") {
      setDosya4(dosya);
    }
  }
  const query = new URLSearchParams(useLocation().search);

  function uploadFile(event) {
    const formData = new FormData();
    formData.append("id", query.get("id"));
    formData.append("isim", event.target.isim.value);
    formData.append("aciklama", event.target.aciklama.value);
    formData.append(
      "kategori",
      event.target.kategori[event.target.kategori.selectedIndex].textContent
    );
    formData.append("category_url", event.target.kategori.value);
    formData.append("marka", event.target.marka.value);
    formData.append("renk", event.target.renk.value);
    formData.append("cinsiyet", event.target.cinsiyet.value);
    formData.append("ind_fiyat", event.target.ind_fiyat.value);
    formData.append("normal_fiyat", event.target.normal_fiyat.value);
    formData.append("s", event.target.s.value);
    formData.append("m", event.target.m.value);
    formData.append("l", event.target.l.value);
    formData.append("xl", event.target.xl.value);
    formData.append("res1", res1);
    formData.append("res2", res2);
    formData.append("res3", res3);
    formData.append("res4", res4);

    if (dosya1 !== "") {
      formData.append("dosya1", dosya1);
    }
    if (dosya2 !== "") {
      formData.append("dosya2", dosya2);
    }
    if (dosya3 !== "") {
      formData.append("dosya3", dosya3);
    }
    if (dosya4 !== "") {
      formData.append("dosya4", dosya4);
    }

    axios
      .patch("https://naushopping.com:5000/admin/api/urunguncelle", formData, {
        onUploadProgress: (data) => {
          setProgress(Math.round((100 * data.loaded) / data.total));
        },
      })
      .then(function (gelenVeri) {
        window.location.reload();
      });

    event.preventDefault();
    event.target.reset();
  }

  const [isim, setIsim] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [ind_fiyat, setIndFiyat] = useState("");
  const [normal_fiyat, setNormalFiyat] = useState("");
  const [kategori, setKategori] = useState("");
  const [cinsiyet, setCinsiyet] = useState("");
  const [marka, setMarka] = useState("");
  const [renk, setRenk] = useState("");
  const [s, setS] = useState("");
  const [m, setM] = useState("");
  const [l, setL] = useState("");
  const [xl, setXL] = useState("");
  const [res1, setRes1] = useState("");
  const [res2, setRes2] = useState("");
  const [res3, setRes3] = useState("");
  const [res4, setRes4] = useState("");

  function bilgileriAl() {
    axios
      .get("https://naushopping.com:5000/api/urun/detay/" + query.get("id"))
      .then(function (gelenVeri) {
        setIsim(gelenVeri.data[0].isim);
        setKategori(gelenVeri.data[0].kategori);
        setMarka(gelenVeri.data[0].marka);
        setRenk(gelenVeri.data[0].renk);
        setAciklama(gelenVeri.data[0].aciklama);
        setIndFiyat(gelenVeri.data[0].ind_fiyat);
        setNormalFiyat(gelenVeri.data[0].normal_fiyat);
        setCinsiyet(gelenVeri.data[0].cinsiyet);
        setS(gelenVeri.data[0].stok.s);
        setM(gelenVeri.data[0].stok.m);
        setL(gelenVeri.data[0].stok.l);
        setXL(gelenVeri.data[0].stok.xl);
        setRes1(gelenVeri.data[0].resimler.bir);
        setRes2(gelenVeri.data[0].resimler.iki);
        setRes3(gelenVeri.data[0].resimler.uc);
        setRes4(gelenVeri.data[0].resimler.dort);
      });
  }

  useEffect(bilgileriAl, []);

  function cinsiyetDegistir(event) {
    setCinsiyet(event.target.value);
  }

  function resim1Degistir() {
    setRes1("");
  }

  function resim2Degistir() {
    setRes2("");
  }

  function resim3Degistir() {
    setRes3("");
  }

  function resim4Degistir() {
    setRes4("");
  }

  return (
    <React.StrictMode>
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
              <div className="col-5">
                <h4 className="page-title">Edit Product</h4>
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
                        Edit Selected Product
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-7"></div>
            </div>
          </div>
          <div className="row">
            <main role="main" className="col  pt-3">
              <div className="p-3 ">
                <form onSubmit={uploadFile}>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="row mb-2">
                        <div className="col">
                          <input
                            defaultValue={isim}
                            required
                            className="form-control"
                            type="text"
                            name="isim"
                            placeholder="Ba??l??k"
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-6 ">
                          <div className="bg-light p-2 rounded  d-flex align-items-center ">
                            <span class="w-25">Category</span>
                            <select
                              name="category"
                              class=" w-75 float-right rounded border-light"
                            >
                              {kategori !== undefined &&
                                kategoriler.map(function (bakilan) {
                                  return (
                                    <option
                                      value={bakilan.category_url}
                                      selected={
                                        kategori === bakilan.kategori_isim
                                          ? "selected"
                                          : ""
                                      }
                                    >
                                      {bakilan.kategori_isim}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6 mt-sm-2 mt-md-0">
                          <div className="bg-light p-2 rounded d-flex align-items-center ">
                            <div class="custom-control custom-radio custom-control-inline">
                              <input
                                required
                                value="Men"
                                type="radio"
                                id="customRadioInline1"
                                name="gender"
                                class="custom-control-input"
                                checked={cinsiyet === "Men" ? true : false}
                                onChange={cinsiyetDegistir}
                              />
                              <label
                                class="custom-control-label"
                                for="customRadioInline1"
                              >
                                Men
                              </label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input
                                required
                                value="Women"
                                type="radio"
                                id="customRadioInline2"
                                name="gender"
                                class="custom-control-input"
                                checked={cinsiyet === "Women" ? true : false}
                                onChange={cinsiyetDegistir}
                              />
                              <label
                                class="custom-control-label"
                                for="customRadioInline2"
                              >
                                Women
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col">
                          <input
                            required
                            className="form-control"
                            type="number"
                            step="0.01"
                            name="Discounted_price"
                            placeholder="Discounted price"
                            defaultValue={ind_fiyat}
                          />
                        </div>
                        <div className="col">
                          <input
                            required
                            className="form-control"
                            type="number"
                            step="0.01"
                            name="normal_price"
                            placeholder="Normal Price"
                            defaultValue={normal_fiyat}
                          />
                        </div>
                      </div>

                      <div className="row mb-2">
                        <div className="col">
                          <input
                            required
                            className="form-control"
                            type="text"
                            name="brand"
                            placeholder="Brand"
                            defaultValue={marka}
                          />
                        </div>
                        <div className="col">
                          <input
                            required
                            className="form-control"
                            type="text"
                            name="color"
                            placeholder="Color"
                            defaultValue={renk}
                          />
                        </div>
                      </div>
                      <textarea
                        placeholder="Description"
                        required
                        className="form-control mb-2"
                        name="description"
                        rows="3"
                        defaultValue={aciklama}
                      ></textarea>

                      <div className="pt-1 pb-0">Enter Number of Stocks</div>
                      <hr className="p-0 mt-2" />
                      <div className="row">
                        <div className="col-md-6 col-lg-3 col-sm-12">
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon1">
                                S
                              </span>
                            </div>
                            <input
                              required
                              name="s"
                              type="number"
                              class="form-control"
                              placeholder="Please enter quantity"
                              aria-describedby="basic-addon1"
                              defaultValue={s}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-12">
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon1">
                                M
                              </span>
                            </div>
                            <input
                              required
                              name="m"
                              type="number"
                              class="form-control"
                              placeholder="Please enter quantity"
                              aria-describedby="basic-addon1"
                              defaultValue={m}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-12">
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon1">
                                L
                              </span>
                            </div>
                            <input
                              required
                              name="l"
                              type="number"
                              class="form-control"
                              placeholder="Please enter quantity"
                              aria-describedby="basic-addon1"
                              defaultValue={l}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-12">
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon1">
                                XL
                              </span>
                            </div>
                            <input
                              required
                              name="xl"
                              type="number"
                              class="form-control"
                              placeholder="Please enter quantity"
                              aria-describedby="basic-addon1"
                              defaultValue={xl}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 position-relative p-2 bg-light rounded d-flex align-content-between  flex-wrap">
                      <div>
                        {res1 === "" || res1 === undefined ? (
                          <div className="col form-control mb-2 p-2 d-flex align-items-center">
                            <span>Image 1 </span>

                            <input
                              required
                              ref={el}
                              className="pl-2 w-75"
                              name="dosya1"
                              id="dosya1"
                              type="file"
                              onChange={handleChange}
                            />
                          </div>
                        ) : (
                          <img
                            className="m-3"
                            onClick={resim1Degistir}
                            src={res1}
                            width="100px"
                            height="100px"
                            alt=""
                          />
                        )}
                        {res2 === "" || res2 === undefined ? (
                          <div className="col form-control mb-2 p-2 d-flex align-items-center">
                            <span>Image 2 </span>

                            <input
                              ref={el}
                              required
                              className="pl-2 w-75"
                              name="dosya2"
                              id="dosya2"
                              type="file"
                              onChange={handleChange}
                            />
                          </div>
                        ) : (
                          <img
                            className="m-3"
                            onClick={resim2Degistir}
                            src={res2}
                            width="100px"
                            height="100px"
                            alt=""
                          />
                        )}
                        {res3 === "" || res3 === undefined ? (
                          <div className="col form-control mb-2 p-2 d-flex align-items-center">
                            <span>Image 3 </span>

                            <input
                              ref={el}
                              required
                              className="pl-2 w-75"
                              name="dosya3"
                              id="dosya3"
                              type="file"
                              onChange={handleChange}
                            />
                          </div>
                        ) : (
                          <img
                            className="m-3"
                            onClick={resim3Degistir}
                            src={res3}
                            width="100px"
                            height="100px"
                            alt=""
                          />
                        )}
                        {res4 === "" || res4 === undefined ? (
                          <div className="col form-control mb-2 p-2 d-flex align-items-center">
                            <span>Image 4 </span>

                            <input
                              required
                              ref={el}
                              className="pl-2 w-75"
                              name="dosya4"
                              id="dosya4"
                              type="file"
                              onChange={handleChange}
                            />
                          </div>
                        ) : (
                          <img
                            className="m-3"
                            onClick={resim4Degistir}
                            src={res4}
                            width="100px"
                            height="100px"
                            alt=""
                          />
                        )}
                      </div>
                      <div className="w-100">
                        <div class="progress mb-2">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: `${progress}` }}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {progress} Uploaded
                          </div>
                        </div>
                        <input
                          className="w-100  btn btn-danger mb-2"
                          type="submit"
                          value="Update"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default AdminEditProductPage;
