import React from "react";
import { BsGithub } from "react-icons/bs";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Banner">
        <div className="Logo">{`<> NITIWAT APAIKAWEE </>`}</div>
      </div>
      <div className="NavItem">
        <div className="Item">ABOUT</div>
        <div className="Item">PROJECT</div>
        <div className="Item">EXPERIENCE</div>
        <div className="Item">CONTACT</div>
        <div className="Item">
          <a
            className="IconButton"
            href="https://github.com/Nitiwat0711"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsGithub size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
