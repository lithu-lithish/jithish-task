import React from "react";
import imgAbb from "./images/abbg.png";
import hero4 from "./images/hero_bg_4.jpg";
import { NavLink } from "react-router-dom";
export default function About() {
  return (
    <React.Fragment>
      <div className="">
        <div className="site-wrap">
          <div class="site-mobile-menu">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>
          <header className="site-navbar py-3" role="banner">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-11 col-xl-2">
                  <h1 className="mb-0">
                    <NavLink to="/" class="text-white h2 mb-0">
                      <img
                        style={{ height: "70px" }}
                        src="assets/images/logo.png"
                      />
                    </NavLink>
                  </h1>
                </div>
                <div className="col-12 col-md-10 d-none d-xl-block">
                  <nav
                    className="site-navigation position-relative text-right"
                    role="navigation"
                  >
                    <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li className="active">
                        <NavLink to="/about">About us</NavLink>
                        {/* <a href="about.html">About Us</a> */}
                      </li>
                      <li className="has-children">
                        <NavLink to="/services">Services</NavLink>
                        {/* <a href="services.html">Services</a> */}
                        <ul className="dropdown">
                          <li className="has-children">
                            <a href="#">Marine</a>
                            <ul className="dropdown">
                              <li>
                                <NavLink to="/ocean">Ocean Freight</NavLink>
                                {/* <a href="ocean.html">Ocean Freight</a> */}
                              </li>
                              <li>
                                <NavLink to="/shipconsol">
                                  Shipping consolidation
                                </NavLink>
                                {/* <a href="shipconsolidation.html">
                                  Shipping Consolidation
                                </a> */}
                              </li>
                              <li>
                                <NavLink to="/bulkcargo">
                                  {" "}
                                  Bulk & Break Bulk Cargo
                                </NavLink>
                                {/* <a href="bulkcargo.html">
                                  Bulk & Break Bulk Cargo
                                </a> */}
                              </li>
                              <li>
                                <NavLink to="/shipcharter">
                                  Ship chartering & Bookiing
                                </NavLink>
                                {/* <a href="shipchartering.html">
                                  Ship Chartering & Broking
                                </a> */}
                              </li>
                              <li>
                                <NavLink to="/warehouse">
                                  Warehouse & Custom Brokerage
                                </NavLink>
                                {/* <a href="warehouse.html">
                                  Warehouse & Custom Brokerage
                                </a> */}
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/airfreight">Air</NavLink>
                            {/* <a href="airfreight.html">Air</a> */}
                          </li>
                          <li>
                            <NavLink to="/landtransport">Land</NavLink>
                            {/* <a href="landtransportation.html">Land</a> */}
                          </li>
                          <li>
                            <NavLink to="/projcargo">Project Cargo</NavLink>
                            {/* <a href="projectcargo.html">Project Cargo</a> */}
                          </li>
                          <li>
                            <NavLink to="/customerRel">
                              Customer Relation
                            </NavLink>
                            {/* <a href="customerrelation.html">
                              Customer Relation
                            </a> */}
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="/industries">Industries</NavLink>
                        {/* <a href="industries.html">Industries</a> */}
                      </li>

                      <li>
                        <NavLink to="/contact">Contact</NavLink>
                        {/* <a href="contact.html">Contact</a> */}
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                  style={{ position: "relative", top: "3px" }}
                >
                  <a
                    href="#"
                    className="site-menu-toggle js-menu-toggle text-white"
                  >
                    <span className="icon-menu h3"></span>
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div
          className="site-blocks-cover inner-page-cover overlay"
          style={{
            backgroundImage: "url(" + imgAbb + ")",
          }}
          data-aos="fade"
          dataStellarBackgroundRatio="0.5"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                <h1 className="text-white font-weight-light text-uppercase font-weight-bold">
                  About Us
                </h1>
                <p className="breadcrumb-custom">
                  <a href="index.html">Home</a>{" "}
                  <span className="mx-2">&gt;</span> <span>About Us</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade">
                <img
                  src="assets/images/about.png"
                  alt="Image"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-6 order-md-1" data-aos="fade">
                <div className="text-left pb-1 border-primary mb-4">
                  <h2 className="text-primary">
                    {" "}
                    unleashing the values of multimodal transportation
                  </h2>
                </div>
                <p>
                  We the MEK GLOBAL CONCEPTS – freight forwarding and NVOCC
                  agent started with an intention to cater all the concepts of
                  ocean and air freight . Also, our profound insights about the
                  project cargo and their commissioning are of great experience
                  to our added value .We are able to render the best of all
                  service with our exceptional team . And our prolonged network
                  with all supporting ecosystem makes our brand value an edge
                  over than the competent players .We offer the both ocean
                  freight and air freight services with the allied services at
                  the ease of time and cost. This all put together makes us to
                  provide one stop logistical solution for all the requirement
                  needed for the safe and smooth movement of shipments across
                  the globe .
                </p>
                <div className="text-left pb-1 border-primary mb-4">
                  <h2 className="text-primary"> Value proposition </h2>
                </div>
                <div className="text-left pb-1 border-primary mb-4">
                  <h3 className="text-primary">Vision</h3>
                </div>

                <p>
                  To be the global player and trusted partner in the eco system
                  of world-wide logistics .
                </p>
                <div className="text-left pb-1 border-primary mb-4">
                  <h3 className="text-primary"> Mission </h3>
                </div>

                <p>
                  To establish an integrated logistical solution partner to
                  provide with the seamless movement of valued goods and good
                  customer relations at their convenience .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="site-section bg-image overlay"
          style={{
            backgroundImage: "url(" + hero4 + ")",
          }}
        >
          <div className="container">
            <div className="row justify-content-center mb-5"></div>
          </div>
        </div>

        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-3">
                    <h2 className="footer-heading mb-4">Quick Links</h2>
                    <ul className="list-unstyled">
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
                  <div className="col-md-3">
                    <h2 className="footer-heading mb-4">Services</h2>
                    <ul className="list-unstyled">
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

                  <div className="col-md-3">
                    <h2 className="footer-heading mb-4">Follow Us</h2>
                    <a href="#" className="pl-0 pr-3">
                      <span className="icon-facebook"></span>
                    </a>
                    <a href="#" className="pl-3 pr-3">
                      <span className="icon-twitter"></span>
                    </a>
                    <a
                      href="https://www.instagram.com/mekglobalconcepts/"
                      class="pl-3 pr-3"
                    >
                      <span className="icon-instagram"></span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/mek-global-concepts/"
                      className="pl-3 pr-3"
                    >
                      <span className="icon-linkedin"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Address</h2>
                <li className="list-unstyled">
                  <a href="">
                    No:7 Welders Street, KRJ Building, 4th Floor, Mount Road,
                    Chennai, Tamil Nadu 600002 .
                  </a>
                </li>
                <li className="list-unstyled">
                  <a a href="">
                    Phone: <br /> 044 35618920
                  </a>
                </li>
                <li className="list-unstyled">
                  <a a href="">
                    {" "}
                    Email: info@mekglobalconcepts.com
                  </a>
                </li>
              </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <div className="border-top pt-5">
                  <p>
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());{" "}
                    </script>{" "}
                    MEK Global Concepts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
