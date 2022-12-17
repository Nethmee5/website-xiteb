import React from "react";
import "../Footer/Footer.scss";
import gplay from "../assets/footer/gplay.jpg";
import astore from "../assets/footer/astore.png";
import facebook from "../assets/homepage/facebook.png";
import instagram from "../assets/homepage/instagram.png";
import twitter from "../assets/homepage/twitter.png";
import linkedin from "../assets/homepage/linkedin.png";
import youtube from "../assets/homepage/youtube.png";
import { VscTriangleRight } from "react-icons/vsc";
import { MdLocationPin } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";

function Footer() {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 ">
            <div className="heading">QUICK LINKS</div>
            <div className="links">
              <li>
                <VscTriangleRight />
                Application Development
              </li>
              <li>
                <VscTriangleRight />
                General Banking Terms and conditions
              </li>
              <li>
                <VscTriangleRight />
                tariff
              </li>
              <li>
                <VscTriangleRight />
                Profit sharing trems & conditions
              </li>
              <li>
                <VscTriangleRight />
                Exchange rates
              </li>
              <li>
                <VscTriangleRight />
                Sitemap
              </li>
              <li>
                <VscTriangleRight />
                Customer Charter
              </li>
              <li>
                <VscTriangleRight />
                Customer Charter
              </li>
              <li>
                <VscTriangleRight />
                Customer Charter
              </li>
              <li>
                <VscTriangleRight />
                Customer Charter
              </li>
              <li>
                <VscTriangleRight />
                Customer Charter
              </li>
              <li>
                <VscTriangleRight />
                Customer Charter
              </li>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="heading">
              DOWNLOAD ONLINE BANKING APP
              <div className="store-icons">
                <img src={gplay} alt="gplay" width="200px" />
                <img src={astore} alt="astore" width="200px" />
              </div>
              <p>
                Our Online Banking application is not hosted in any third party
                stores except for the above
              </p>
              <p style={{ color: "#FFF", fontSize: "30px" }}>SWIFT CODE</p>
              <p>AMNALKLX</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="heading">FOLLOW US</div>
            <div className="items">
              <li className="icon-list">
                <img src={facebook} alt="icon" className="icon-logo" />
                Facebook
              </li>
              <li className="icon-list">
                <img src={instagram} alt="icon" className="icon-logo" />
                Instagram
              </li>
              <li className="icon-list">
                <img src={twitter} alt="icon" className="icon-logo" />
                Twitter
              </li>
              <li className="icon-list">
                <img src={linkedin} alt="icon" className="icon-logo" />
                Linkedin
              </li>
              <li className="icon-list">
                <img src={youtube} alt="icon" className="icon-logo" />
                Youtube
              </li>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="heading">REACH US</div>
            <div className="links">
              <li>
                <VscTriangleRight />
                Contact Us
              </li>
              <li>
                <VscTriangleRight />
                Branch Network
              </li>
              <li>
                <VscTriangleRight />
                Self Banking Centere Network
              </li>
              <li>
                <VscTriangleRight />
                Profit sharing trems & conditions
              </li>
              <li>
                <VscTriangleRight />
                Exchange rates
              </li>
            </div>

            <div className="heading">CORPORATE OFFICE</div>
            <div className="links">
              <li>
                <MdLocationPin />
                486,Galle Road,Colombo 3
              </li>
              <li>
                <IoCallOutline />
                +94 117 756 756
              </li>
              <li>
                <TiContacts />
                +94 112 574 419
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
