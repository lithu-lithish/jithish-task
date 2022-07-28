import React from "react";
import hero1 from "./assets/images/hero_bg_1.jpg";
import logo from "./assets/images/logo.png";
import hero4 from "./assets/images/hero_bg_4.jpg";
import { NavLink } from "react-router-dom";
export default function Contact() {
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
          style={{ backgroundImage: "url(" + hero1 + ")" }}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          <div class="container">
            <div class="row align-items-center justify-content-center text-center">
              <div class="col-md-8" data-aos="fade-up" data-aos-delay="400">
                <h1 class="text-white font-weight-light text-uppercase font-weight-bold">
                  Contact Us
                </h1>
                <p class="breadcrumb-custom">
                  <a href="index.html">Home</a> <span class="mx-2">&gt;</span>{" "}
                  <span>Contact</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-7 mb-5">
                <form action="#" class="p-5 bg-white">
                  <div class="row form-group">
                    <div class="col-md-6 mb-3 mb-md-0">
                      <label class="text-black" for="fname">
                        First Name
                      </label>
                      <input type="text" id="fname" class="form-control" />
                    </div>
                    <div class="col-md-6">
                      <label class="text-black" for="lname">
                        Last Name
                      </label>
                      <input type="text" id="lname" class="form-control" />
                    </div>
                  </div>

                  <div class="row form-group">
                    <div class="col-md-12">
                      <label class="text-black" for="email">
                        Email
                      </label>
                      <input type="email" id="email" class="form-control" />
                    </div>
                  </div>

                  <div class="row form-group">
                    <div class="col-md-12">
                      <label class="text-black" for="subject">
                        Subject
                      </label>
                      <input type="subject" id="subject" class="form-control" />
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12">
                      <label class="text-black" for="message">
                        How can we help ?
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="7"
                        class="form-control"
                        placeholder="Write your notes or questions here..."
                      ></textarea>
                    </div>
                  </div>

                  <div class="row form-group">
                    <div class="col-md-12">
                      <input
                        type="submit"
                        value="Send Message"
                        class="btn btn-primary py-2 px-4 text-white"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-md-5">
                <div class="p-4 mb-3 bg-white">
                  <p class="mb-0 font-weight-bold">Address</p>
                  <p class="mb-4">
                    No:7 Welders Street, KRJ Building, 4th Floor, Mount Road,
                    Chennai, Tamil Nadu 600002
                  </p>

                  <p class="mb-0 font-weight-bold">Phone</p>
                  <p class="mb-4">
                    <a href="#">044 35618920</a>
                  </p>

                  <p class="mb-0 font-weight-bold">Email Address</p>
                  <p class="mb-0">
                    <a href="#">info@mekglobalconcepts.com</a>
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d468.8539525876935!2d80.26525291714321!3d13.063597411563102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32d8fe5546b230f6!2sMEK%20GLOBAL%20CONCEPTS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1657196771720!5m2!1sen!2sin"
                  width="100%"
                  height="300px"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div
          class="site-section bg-image overlay"
          style={{ backgroundImage: "url(" + hero4 + ")" }}
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
    </React.Fragment>
  );
}
