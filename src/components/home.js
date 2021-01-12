import * as React from "react";
import "./home.css";
import ProfileDri from './../img/profileDri.jpeg';
import GitHub from './../img/github.png';
import LinkedIn from './../img/linkedin.png';


const Home = () => {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
            <div className="col-10 main">
              <img id="imgtest" src={ProfileDri} className="margin-top-25 img-circle center-block profile_picture img_profile" alt="profile"/>
            </div>
            <div className="col-1"></div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 main">
            <h1 className="text-capitalize text-center">Adriana Almeida</h1>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 main">
            <h3 className="text-capitalize text-center">Full Stack Developer</h3>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 main">
            <hr />
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 main">
            <div className="text-center">
              <a href="https://www.linkedin.com/in/adriana-abedala-do-carmo-almeida-a03241184/" target="#"><img src={LinkedIn} className="icon_size" alt="LinkedIn"/></a>
              &nbsp;
              <a href="https://github.com/adriana-carmo" target="#"><img src={GitHub} className="icon_size" alt="GitHub"/></a>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
  );
};

export default Home;
