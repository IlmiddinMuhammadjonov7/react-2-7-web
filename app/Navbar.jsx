import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li>
          <Link href={"/"}>
            <img src={"/home/Group 21.svg"} alt="" />
          </Link>
        </li>
        <li>
          <Link href={"/price"} className="link">
            Price
          </Link>
        </li>
        <li>
          <Link href={"/about"} className="link">
            About
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="link">
            Contact
          </Link>
        </li>
      </ul>
      
      <button className="navbar-btn">Schedule a Demo</button>
    </div>
  );
};

export default Navbar;
