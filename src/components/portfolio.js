import React from "react";
import "./portfolio.css";
import Budget_Control from "./../img/budget_control.png";
import Eat_Burger from "./../img/eat_burger.png";
import Employee_Directory from "./../img/employee_directory.png";
import Fitness_Tracker from "./../img/fitness_tracker.png";
import HR_App from "./../img/hr_app.png";
import Note_Taker from "./../img/note_taker.png";


const portfolio = () => {
  return (
    <div className="container-fluid">
      {/* First row */}
      <div className="row">
        <div className="col-lg-12 align-self-center">
          <h1 className="text-capitalize text-center">BootCamp Projects</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12" style={{margin: "10px"}}>
        </div>
      </div>
      {/* Second row */}
      <div className="row" >
        <div className="col-lg-1"></div>
        <div className="col-lg-3"> 
          <div className="card_profile">
            <img src={Fitness_Tracker} className="img_project" alt="Fitness Tracker App" />
            <div>
              <p class="text-center">Fitness Tracker app</p>
              <span>Link: <a href="https://fitness-tracker-heroku.herokuapp.com/?id=5fdacae34ff7380017ff2c79" target="#">Heroku</a></span><br></br>
              <span>Link: <a href="https://github.com/adriana-carmo/Fitness_Tracker" target="#">Github Repository</a></span><br></br>
              <span>Technology: Html / CSS / Node.js / MongoDB Atlas </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3"> 
          <div className="card_profile">
            <img src={Budget_Control} className="img_project" alt="Budget Control App" />
            <div>
              <p class="text-center">Budget Control App</p>
              <span>Link: <a href="https://your-budget-control.herokuapp.com" target="#">Heroku</a></span><br></br>
              <span>Link: <a href="https://github.com/adriana-carmo/Budget_Control" target="#">Github Repository</a></span><br></br>
              <span>Technology: Html / CSS / Node.js / Indexed Database / PWA / Service-Worker / MongoDB Atlas </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card_profile">
            <img src={Employee_Directory} className="img_project" alt="Employee Directory App" />
            <div>
              <p class="text-center">Employee Directory</p>
              <span>Link: <a href="https://employees-list-react.herokuapp.com" target="#">Heroku</a></span><br></br>
              <span>Link: <a href="https://github.com/adriana-carmo/Employee-Directory" target="#">Github Repository</a></span><br></br>
              <span>Technology: Html / CSS / React (State and User Events) </span>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <div className="row">
        <div className="col-lg-12" style={{margin: "10px"}}>
        </div>
      </div>
      {/* third row */}
      <div className="row" >
        <div className="col-lg-1"></div>
        <div className="col-lg-3"> 
          <div className="card_profile">
            <img src={Note_Taker} className="img_project" alt="Note Taker App" />
            <div>
              <p class="text-center">Note Taker App</p>
              <span>Link: <a href="https://note-taker-adriana.herokuapp.com" target="#">Heroku</a></span><br></br>
              <span>Link: <a href="https://github.com/adriana-carmo/Note_Taker" target="#">Github Repository</a></span><br></br>
              <span>Technology: Html / CSS / Node.js / Express / Routes </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3"> 
          <div className="card_profile">
            <img src={Eat_Burger} className="img_project" alt="Eat Da Burger App" />
            <div>
              <p class="text-center">Eat Da Burger App</p>
              <span>Link: <a href="https://mighty-fjord-92514.herokuapp.com/burgers" target="#">Heroku</a></span><br></br>
              <span>Link: <a href="https://github.com/adriana-carmo/Eat_Da_Burger_App" target="#">Github Repository</a></span><br></br>
              <span>Technology: Html / CSS / Node.js / Ajax / MVC design pattern / MySQL </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card_profile">
            <img src={HR_App} className="img_project" alt="HR Management App" />
            <div>
              <p class="text-center">HR Management App</p>
              <span>Link: <a href="https://github.com/adriana-carmo/HR-Management" target="#">Github Repository</a></span><br></br>
              <span>Technology: Node.js </span>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default portfolio;