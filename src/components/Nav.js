import React from "react";
import "./Nav.css"
import Icon_Home from "./../img/home.png";

function Nav() {
 
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1">
        </div>
        <div className="col-10">
          <ul className="main">
            <li role="presentation" className="active"><a href="/" className="sdm-active"><img src={Icon_Home} className="icon_home" alt="home"/></a></li>
            <li role="presentation"><a href="/about" className="">About me</a></li>
            <li role="presentation"><a href="/portfolio" className="">Portfolio</a></li>
            <li role="presentation"><a href="/contact" className="">Contact</a></li>
            <li role="presentation"><a rel="noreferrer" href="https://drive.google.com/file/d/1XA13Bbg6fB8yo8Zs36Uq2Qg-uk_DLAaK/view?usp=sharing" target="_blank" className="">Resume</a></li>
          </ul>
        </div>
        <div className="col-1">
        </div>
      </div>
    </div>
    );
}

export default Nav;