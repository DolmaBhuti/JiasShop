import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs"; //social media icons

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="./images/newsletter.png" alt="newsletter" />
                <h2>Sign Up For NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address Here"
                  aria-label="Your Email Address Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white  mb-4">Contact Us</h4>
              <div>
                <address className="text-white py-2 mb-1">
                  Headquarters:
                  <br /> 323 Fake Street <br />
                  Toronto, ON M1G 3E1 <br />
                  Canada
                </address>
                <a
                  href="tel: +1 (416)-343-4444"
                  className="text-white mt-4 d-block mb-3"
                >
                  +1 (416)-343-4444
                </a>
                <a
                  href="mailto: dpopli@jiashop.ca"
                  className="text-white mt-4 d-block mb-3"
                >
                  dpopli@jiashop.ca
                </a>
                <div className="social-icons d-flex align-items-center gap-15">
                  <a className="text-white" href="">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white  mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white  mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white  mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">AirPods Cases</Link>
                <Link className="text-white py-2 mb-1">iPhone Cases</Link>
                <Link className="text-white py-2 mb-1">
                  Samsung Phone Cases
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <p className="text-center text-white">
              &copy; {new Date().getFullYear()}; Powered By Dolma Inc
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
