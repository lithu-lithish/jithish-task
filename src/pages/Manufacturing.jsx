import React from "react";
import logo from "./assets/images/logo.png";
import manu from "./assets/images/manu.png";
import hero4 from "./assets/images/hero_bg_4.jpg";
import { NavLink } from "react-router-dom";
export default function Manufacturing() {
  return (
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
                <a href="index.html" class="text-white h2 mb-0">
                  <img style={{ height: "70px" }} src={logo} />
                </a>
              </h1>
            </div>
            <div class="col-12 col-md-10 d-none d-xl-block">
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
                        <NavLink to="/customerRel">Customer Relation</NavLink>
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
              class="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
              style={{ position: "relative", top: "3px" }}
            >
              <a href="#" class="site-menu-toggle js-menu-toggle text-white">
                <span class="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        class="site-blocks-cover inner-page-cover overlay"
        // style="background-image: url(images/manu.png);"
        style={{ backgroundImage: "url(" + manu + ")" }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-8" data-aos="fade-up" data-aos-delay="400">
              <h1 class="text-white font-weight-light text-uppercase font-weight-bold">
                MANUFACTURING
              </h1>
              <p class="breadcrumb-custom">
                <a href="index.html">Home</a> <span class="mx-2">&gt;</span>{" "}
                <span>Industries</span> <span class="mx-2">&gt;</span>{" "}
                <span> MANUFACTURING</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade">
              <img
                src="assets/images/manu.png"
                alt="Image"
                class="img-fluid rounded"
              />
            </div>
            <div class="col-md-6 order-md-1" data-aos="fade">
              <p>
                From sourcing materials to shipping finished goods to customers,
                and every step in between, at MEK we understand what it takes to
                keep things humming in the manufacturing world.
                <br /> With our global network of experts in mature and emerging
                manufacturing centers, we design comprehensive solutions that
                optimize transportation flows across sites, using all modes, to
                harness the full critical mass of the enterprise???driving out
                costs while achieving service levels.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="site-section bg-image overlay"
        style={{ backgroundImage: "url(" + hero4 + ")" }}
        // style="background-image: url('images/hero_bg_4.jpg');"
      >
        <div class="container">
          <div class="row justify-content-center mb-5"></div>
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
  );
}
