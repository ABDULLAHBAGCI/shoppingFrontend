import React from "react";

const HomePage_Top = () => {
  return (
    <React.StrictMode>
      <section className="section-intro padding-y-sm">
        <div className="container">
          <div className="intro-banner-wrap">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="shadow-sm card-banner">
                  <div className="p-4" style={{ width: "75%" }}>
                    <h5 className="card-title">Levi's Shirt</h5>
                    <p>
                    Don't miss the discount on 2021 Model Levi's brand shirts.
                    </p>
                  </div>
                  <img
                    alt=""
                    src="https://productimages.hepsiburada.net/l/38/600-800/10580777664562.jpg"
                    height="150"
                    className="img-bg"
                  />
                </div>
                <div className="shadow-sm card-banner mt-2">
                  <div className="p-4" style={{ width: "70%" }}>
                    <h5 className="card-title">End of Season Sale</h5>
                    <p>
                    With the arrival of summer, there are discounts up to 70% on coats.
                    </p>
                  </div>
                  <img
                    alt=""
                    src="https://www.sporset.com/UserFiles/ProductImages/0/100340277/orj/lumberjack-arch-coat-erkek-mont-100340277-gri-91150.jpg"
                    height="150"
                    className="img-bg"
                  />
                </div>

                <div className="shadow-sm card-banner  mt-2">
                  <div className="p-4" style={{ width: "75%" }}>
                    <h5 className="card-title">New Season Products</h5>
                    <p>
                      Have you looked at the new season trousers suitable for 2021's fashion?
                    </p>
                  </div>
                  <img
                    src="https://cdn.dsmcdn.com/mnresize/415/622/Assets/ProductImages/oa/76/538202/1/5414782948293_2_org_zoom.jpg"
                    height="150"
                    className="img-bg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                <div
                  id="carousel1_indicator"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carousel1_indicator"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carousel1_indicator"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carousel1_indicator"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/10040256/pexels-photo-10040256.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="First slide"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/10375856/pexels-photo-10375856.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="Second slide"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="Third slide"
                        alt=""
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel1_indicator"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel1_indicator"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div
                className="card-banner overlay-gradient"
                style={{
                  minHeight: "230px",
                  backgroundImage: "url('../images/posts/2.jpg')",
                }}
              >
                <div className="card-img-overlay white">
                  <h3 className="card-title">
                  Are all your winter clothes <br /> ready ?
                  </h3>
                  <p className="card-text" style={{ maxWidth: "400px" }}>
                  All the winter clothes you are looking for, from coats to berets, from gloves to sweaters, are waiting for you with discounts of up to 50%.
                  </p>
                  <a href="" className="btn btn-warning">
                  Review Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card-banner overlay-gradient"
                style={{
                  minHeight: "230px",
                  backgroundImage:
                    "url('https://media.istockphoto.com/photos/kids-making-winter-snowman-children-play-in-snow-picture-id1076248012')",
                }}
              >
                <div className="card-img-overlay text-white">
                  <h5 className="card-title">The Most Beautiful Coats </h5>
                  <p className="card-text">
                  A variety of cute and beautiful coats await you for your children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content padding-y-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <article className="card card-body">
                <figure className="itemside">
                  <div className="aside">
                    <span className="icon-sm rounded-circle bg-warning">
                      <i className="fa fa-money-bill-alt white"></i>
                    </span>
                  </div>
                  <figcaption className="info">
                    <h5 className="title">Affordable Prices</h5>
                    <p>
                    Meet your four-season clothing needs at affordable prices that don't burn pockets.
                    </p>
                  </figcaption>
                </figure>
              </article>
            </div>
            <div className="col-md-4">
              <article className="card card-body">
                <figure className="itemside">
                  <div className="aside">
                    <span className="icon-sm rounded-circle bg-secondary">
                      <i className="fa fa-comment-dots white"></i>
                    </span>
                  </div>
                  <figcaption className="info">
                    <h5 className="title">24/7 Communication</h5>
                    <p>
                    You can reach our customer service at any time.
                    </p>
                  </figcaption>
                </figure>
              </article>
            </div>
            <div className="col-md-4">
              <article className="card card-body">
                <figure className="itemside">
                  <div className="aside">
                    <span className="icon-sm rounded-circle bg-success">
                      <i className="fa fa-truck white"></i>
                    </span>
                  </div>
                  <figcaption className="info">
                    <h5 className="title">Fast Delivery</h5>
                    <p>The products you buy are shipped the same day.</p>
                  </figcaption>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </section>
    </React.StrictMode>
  );
};

export default HomePage_Top;
