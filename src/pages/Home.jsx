import React from "react";
import newGif from "./Gifs/new1.gif";
import logo from "./assets/images/logo.png";
import img2 from "./assets/images/img_2.jpg";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Home.css";

export default function () {
  return (
    <React.Fragment>
      <div class="site-wrap">
        <div class="site-mobile-menu">
          <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
              <span class="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div>
        <header class="site-navbar py-3" role="banner">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-11 col-xl-2">
                <h1 class="mb-0">
                  <NavLink to="/" class="text-white h2 mb-0">
                    <img style={{ height: "70px" }} src={logo} />
                  </NavLink>
                  {/* <a href="index.html" class="text-white h2 mb-0">
                    <img style={{ height: "70px" }} src={logo} />
                  </a> */}
                </h1>
              </div>
              <div class="col-12 col-md-10 d-none d-xl-block">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                    <li className="active">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      {/* <NavLink to="/about">About us</NavLink> */}
                      <a href="/about">About Us</a>
                    </li>
                    <li className="has-children">
                      {/* <NavLink to="/services">Services</NavLink> */}
                      <a href="services">Services</a>
                      <ul className="dropdown">
                        <li className="has-children">
                          <a href="#">Marine</a>
                          <ul className="dropdown">
                            <li>
                              {/* <NavLink to="/ocean">Ocean Freight</NavLink> */}
                              <a href="/ocean">Ocean Freight</a>
                            </li>
                            <li>
                              {/* <NavLink to="/shipconsol">
                                Shipping consolidation
                              </NavLink> */}
                              <a href="/shipconsol">Shipping Consolidation</a>
                            </li>
                            <li>
                              {/* <NavLink to="/bulkcargo">
                                {" "}
                                Bulk & Break Bulk Cargo
                              </NavLink> */}
                              <a href="/bulkcargo">Bulk & Break Bulk Cargo</a>
                            </li>
                            <li>
                              {/* <NavLink to="/shipcharter">
                                Ship chartering & Bookiing
                              </NavLink> */}
                              <a href="/shipcharter">
                                Ship Chartering & Broking
                              </a>
                            </li>
                            <li>
                              {/* <NavLink to="/warehouse">
                                Warehouse & Custom Brokerage
                              </NavLink> */}
                              <a href="/warehouse">
                                Warehouse & Custom Brokerage
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          {/* <NavLink to="/airfreight">Air</NavLink> */}
                          <a href="/airfreight">Air</a>
                        </li>
                        <li>
                          {/* <NavLink to="/landtransport">Land</NavLink> */}
                          <a href="/landtransport">Land</a>
                        </li>
                        <li>
                          {/* <NavLink to="/projcargo">Project Cargo</NavLink> */}
                          <a href="/projcargo">Project Cargo</a>
                        </li>
                        <li>
                          {/* <NavLink to="/customerRel">Customer Relation</NavLink> */}
                          <a href="/customerrel">Customer Relation</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {/* <NavLink to="/industries">Industries</NavLink> */}
                      <a href="/industries">Industries</a>
                    </li>

                    <li>
                      {/* <NavLink to="/contact">Contact</NavLink> */}
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div
                class="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                style={{ position: "relative", top: "3px" }}
              >
                <Nav.Link
                  href="/"
                  class="site-menu-toggle js-menu-toggle text-white"
                >
                  {" "}
                  <span class="icon-menu h3"></span>
                </Nav.Link>
                {/* <a href="#" class="site-menu-toggle js-menu-toggle text-white">
                  <span class="icon-menu h3"></span>
                </a> */}
              </div>
            </div>
          </div>
        </header>
        <div
          className="site-blocks-cover overlay"
          style={{
            backgroundImage: "url(" + newGif + ")",
          }}
          data-aos="fade"
          dataStellarBackgroundRatio="0.5"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                <h1 className="text-white font-weight-light mb-5 text-uppercase font-weight-bold">
                  Worldwide Freight Services
                </h1>
                <p>
                  <a
                    style={{ cursor: "none" }}
                    href="#"
                    className=" btn-primary py-3 px-5 text-white"
                  >
                    Get Started with us!
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* <h1>hello any body there</h1> */}
        </div>
        {/* <img src={newGif} alt="" /> */}
        {/* <div
          class="site-blocks-cover overlay"
          style={{
            // backgroundImage: "url(" + newGif + ")",
            backgroundColor: "pink",
          }}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          <div class="container" syle={{ backgroundColor: "pink" }}>
            <div class="row align-items-center justify-content-center text-center">
              <div class="col-md-8" data-aos="fade-up" data-aos-delay="400">
                <h1
                  class="text-white font-weight-light mb-5 text-uppercase font-weight-bold"
                  style={{ color: "black" }}
                >
                  Worldwide Freight Services
                </h1>
                <p>
                  <a
                    style={{ cursor: "none" }}
                    href="#"
                    class=" btn-primary py-3 px-5 text-white"
                  >
                    Get Started with us!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div class="container">
          <div class="row align-items-center no-gutters align-items-stretch overlap-section">
            <div class="col-md-4">
              <div class="feature-1 pricing h-100 text-center">
                <div class="icon">
                  <span class="icon-dollar"></span>
                </div>
                <h2 class="my-4 heading">Best Prices</h2>
                <p>We offer better freight rates with end to end solution.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="free-quote bg-dark h-100">
                <h2 class="my-4 heading  text-center">Get Free Quote</h2>
                <form method="post">
                  <div class="form-group">
                    <label for="fq_name">Name</label>
                    <input
                      type="text"
                      class="form-control btn-block"
                      id="fq_name"
                      name="fq_name"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="fq_email">Email</label>
                    <input
                      type="text"
                      class="form-control btn-block"
                      id="fq_email"
                      name="fq_email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      class="btn btn-primary text-white py-2 px-4 btn-block"
                      value="Get Quote"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-3 pricing h-100 text-center">
                <div class="icon">
                  <span class="icon-phone"></span>
                </div>
                <h2 class="my-4 heading">24/7 Support</h2>
                <p>We meet all your requirements at your convenient of time.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="site-section">
          <div class="container">
            <div class="row justify-content-center mb-5">
              <div class="col-md-7 text-center border-primary">
                <h2 class="mb-0 text-primary">What We Offer</h2>
                <br />
              </div>
            </div>
            <div class="row align-items-stretch">
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div class="unit-4 d-flex">
                  <div class="unit-4-icon mr-4">
                    <span class="text-primary flaticon-sea-ship-with-containers"></span>
                  </div>
                  <div>
                    <h3>Marine </h3>
                    <p>
                      As a frontier in shipping service , we give the seamless
                      movement of cargos between the serving major and minor
                      ports across the globe.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div class="unit-4 d-flex">
                  <div class="unit-4-icon mr-4">
                    <span class="text-primary flaticon-frontal-truck"></span>
                  </div>
                  <div>
                    <h3>Land </h3>
                    <p>
                      To ensure the safe movement between the nodes we also work
                      on providing the logistical support for the road freight.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div class="unit-4 d-flex">
                  <div class="unit-4-icon mr-4">
                    <span class="text-primary flaticon-travel"></span>
                  </div>
                  <div>
                    <h3>Air </h3>
                    <p>
                      Our logistical service extends even to air freight service
                      to make the time squeezed cargos for immediate delivery
                      and safe shipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section block-13">
          {/* <div className=""> */}
          <div className="carousel">
            <div>
              <a href="ocean.html" class="unit-1 text-center">
                <img
                  src="assets/images/ocea.png"
                  alt="Image"
                  class="img-fluid"
                />
                <div class="unit-1-text">
                  <h3 class="unit-1-heading">Ocean</h3>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </a>
            </div>

            <div>
              <a href="airfreight.html" class="unit-1 text-center">
                <img
                  src={img2}
                  //   src="assets/images/img_2.jpg"
                  alt="Image"
                  class="img-fluid"
                />
                <div class="unit-1-text">
                  <h3 class="unit-1-heading">Air </h3>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </a>
            </div>

            <div>
              <a href="landtransportation.html" class="unit-1 text-center">
                <img
                  src="assets/images/img_3.jpg"
                  alt="Image"
                  class="img-fluid"
                />
                <div class="unit-1-text">
                  <h3 class="unit-1-heading">Ground Shipping </h3>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </a>
            </div>

            <div>
              <a href="projectcargo.html" class="unit-1 text-center">
                <img src="assets/images/pl.png" alt="Image" class="img-fluid" />

                <div class="unit-1-text">
                  <h3 class="unit-1-heading">Project Logistics</h3>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="site-section bg-light">
          <div class="container">
            <div class="row justify-content-center mb-5">
              <div class="col-md-7 text-center border-primary">
                <h2 class="font-weight-light text-primary">More Services</h2>
                <p class="color-black-opacity-5">
                  We Offer The Following Services
                </p>
              </div>
            </div>
            <div class="row align-items-stretch">
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="unit-4 d-flex">
                  <div class="unit-4-icon mr-4">
                    <span class="text-primary flaticon-platform"></span>
                  </div>
                  <div>
                    <h3>Shipping consolidation</h3>
                    <p>
                      We deliver both FCL AND LCL shipments with the ease of
                      documentation and proceedings Though the consolidation is
                      a mere challenge ,our countless exposure and experience
                      makes the tedious an effortless job .
                    </p>
                    <p>
                      <a href="shipconsolidation.html">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="unit-4 d-flex">
                  <div class="unit-4-icon mr-4">
                    <span class="text-primary flaticon-sea-ship-with-containers"></span>
                  </div>
                  <div>
                    <h3>Bulk cargo / Break bulk cargo</h3>
                    <p>
                      We can also effortlessly cater the need of the
                      bulk/breakbulk cargo consignments . And our expertise team
                      with the past experience make the entire shipping journey
                      a worry-free task .
                    </p>
                    <p>
                      <a href="bulkcargo.html">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="unit-4 d-flex">
                  <div class="unit-4-icon mr-4">
                    <span class="text-primary flaticon-frontal-truck"></span>
                  </div>
                  <div>
                    <h3>Project Cargo </h3>
                    <p>
                      We make imaginary a reality into the existence. From the
                      past and meticulous efforts in positioning the heavy
                      structure and high valued projects, it is our forte in
                      coordinating the project cargo .
                    </p>
                    <p>
                      <a href="projectcargo.html">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="unit-4 d-flex">
                  <div class="unit-4-icon mr-4">
                    <span class="text-primary flaticon-sea-ship-with-containers"></span>
                  </div>
                  <div>
                    <h3>Ship Chartering & Broking</h3>
                    <p>
                      Chartering a great deal of our brand for the large volume
                      and revolving volume of shipments It is our great strength
                      in stemming the vessel with great deal with absolute
                      expertise and command .
                    </p>
                    <p>
                      <a href="shipchartering.html">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="unit-4 d-flex">
                  <div class="unit-4-icon mr-4">
                    <span class="text-primary flaticon-frontal-truck"></span>
                  </div>
                  <div>
                    <h3>Land Transportation And Stuffing</h3>
                    <p>
                      To ensure the safe movement between the nodes we also work
                      on providing the logistical support for the road freight
                      .Also our robust knowledge about the nature .
                    </p>
                    <p>
                      <a href="landtransportation.html">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="unit-4 d-flex">
                  <div class="unit-4-icon mr-4">
                    <span class="text-primary flaticon-barn"></span>
                  </div>
                  <div>
                    <h3>Warehouse & custom brokerage </h3>
                    <p>
                      We also understand the need of sturdy documentation and
                      dynamic need of storage in real time scenario ,so we
                      partnered with the world class warehouse service providers
                      .
                    </p>
                    <p>
                      <a href="warehouse.html">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-3">
                    <h2 class="footer-heading mb-4">Quick Links</h2>
                    <ul class="list-unstyled">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3">
                    <h2 class="footer-heading mb-4">Services</h2>
                    <ul class="list-unstyled">
                      <li>
                        <a href="airfreight.html">Air</a>
                      </li>
                      <li>
                        <a href="landtransportation.html">Ground</a>
                      </li>
                      <li>
                        <a href="projectcargo.html">Project Cargo</a>
                      </li>
                      <li>
                        <a href="customerrelation.html">Customer Relation</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-3">
                    <h2 class="footer-heading mb-4">Follow Us</h2>
                    <a href="#" class="pl-0 pr-3">
                      <span class="icon-facebook"></span>
                    </a>
                    <a href="#" class="pl-3 pr-3">
                      <span class="icon-twitter"></span>
                    </a>
                    <a
                      href="https://www.instagram.com/mekglobalconcepts/"
                      class="pl-3 pr-3"
                    >
                      <span class="icon-instagram"></span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/mek-global-concepts/"
                      class="pl-3 pr-3"
                    >
                      <span class="icon-linkedin"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <h2 class="footer-heading mb-4">Address</h2>
                <li class="list-unstyled">
                  <a href="">
                    No:7 Welders Street, KRJ Building, 4th Floor, Mount Road,
                    Chennai, Tamil Nadu 600002 .
                  </a>
                </li>
                <li class="list-unstyled">
                  <a a href="">
                    Phone: <br /> 044 35618920
                  </a>
                </li>
                <li class="list-unstyled">
                  <a a href="">
                    {" "}
                    Email: info@mekglobalconcepts.com
                  </a>
                </li>
              </div>
            </div>
            <div class="row pt-5 mt-5 text-center">
              <div class="col-md-12">
                <div class="border-top pt-5">
                  <p>
                    Copyright &copy;
                    {/* <script>
                      document.write(new Date().getFullYear());{" "}
                    </script>{" "} */}
                    MEK Global Concepts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* <script src="../../public/assets/js/jquery-3.3.1.min.js"></script>
      <script src="../../public/assets/js/jquery-migrate-3.0.1.min.js"></script>
      <script src="../../public/assets/js/jquery-ui.js"></script>
      <script src="../../public/assets/js/popper.min.js"></script>
      <script src="../../public/assets/js/bootstrap.min.js"></script>
      <script src="../../public/assets/js/owl.carousel.min.js"></script>
      <script src="../../public/assets/js/jquery.stellar.min.js"></script>
      <script src="../../public/assets/js/jquery.countdown.min.js"></script>
      <script src="../../public/assets/js/jquery.magnific-popup.min.js"></script>
      <script src="../../public/assets/js/bootstrap-datepicker.min.js"></script>
      <script src="../../public/assets/js/aos.js"></script> */}

      <script src="js/main.js"></script>
    </React.Fragment>
  );
}
