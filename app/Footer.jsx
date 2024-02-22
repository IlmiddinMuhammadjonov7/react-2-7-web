import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li>
          <Link href={"/"}>
            <img
              src={"/home/Footer.svg"}
              alt=""
            />
          </Link>
        </li>   
        <li>
            <Link href={'/price'} className="link">Price</Link>
        </li>
        <li>
            <Link href={'/price'} className="link">About</Link>
        </li>
        <li>
            <Link href={'/price'} className="link">Contact</Link>
        </li>
      </ul>
      <div className="footer-icons">
        <FaFacebookSquare className="footer-icon"/>
        <FaTwitter className="footer-icon"/>
        <FaLinkedin className="footer-icon"/>
      </div>
    </div>
  );
};

export default Footer;
