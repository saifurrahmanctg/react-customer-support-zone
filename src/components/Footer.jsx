import React from "react";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import x from "../assets/x.png";
import mail from "../assets/mail.png";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="lg:flex justify-between gap-20 py-12 text-center md:text-left text-[#A1A1AA]">
        <div className="footer-logo flex-3">
          <h2 className="mb-3 text-2xl font-bold text-white">
            CS - Ticket System
          </h2>
          <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex-7 md:grid grid-cols-2 lg:grid-cols-4 gap-4 space-y-4 md:space-y-0 mt-5 lg:mt-0">
          <div className="company flex-1">
            <h3 className="mb-3 text-xl font-medium text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Our Mission</a>
              </li>
              <li>
                <a href="">Contact Saled</a>
              </li>
            </ul>
          </div>
          <div className="services flex-1">
            <h3 className="mb-3 text-xl font-medium text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="">Products & Services</a>
              </li>
              <li>
                <a href="">Customer Stories</a>
              </li>
              <li>
                <a href="">Download Apps</a>
              </li>
            </ul>
          </div>
          <div className="information flex-1">
            <h3 className="mb-3 text-xl font-medium text-white">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Join Us</a>
              </li>
            </ul>
          </div>
          <div className="social-links flex-1">
            <h3 className="mb-3 text-xl font-medium text-white">
              Social Links
            </h3>
            <ul className="space-y-2.5 flex md:block flex-col items-center">
              <li className="flex gap-1.5 items-center">
                <img src={facebook} alt="" />
                <a href="">@CS — Ticket System</a>
              </li>
              <li className="flex gap-1.5 items-center">
                <img src={x} alt="" />
                <a href="">@CS — Ticket Systems</a>
              </li>
              <li className="flex gap-1.5 items-center">
                <img src={linkedin} alt="" />
                <a href="">@CS — Ticket System</a>
              </li>
              <li className="flex gap-1.5 items-center">
                <img src={mail} alt="" />
                <a href="">contact@cs-ticketsystem.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full text-center py-7 border-t-2">
        <p className="text-base font-normal text-[#FAFAFA]">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
