import React from "react";
import LinkedIn from './../img/linkedin.png';

const contact = () => {
  return (
    <div className="container">
      <div className="card">
        <h3><b>Hi everyone</b></h3>
        <br></br>
        <p>If you want to receive more information about my projects on GitHub or you have the job opportunity as a Web Developer. Please contact me.</p>
        <p>Below are 2 ways you can contact me and my GitHub repository. </p>
        <br></br>
        <div className="text-center"> 
            <a className="btn btn-secondary btn-light" rel="noreferrer" href="mailto: dri.abedala@gmail.com" target="_blank">Email</a>
            &nbsp;&nbsp;
            <a rel="noreferrer" href="https://www.linkedin.com/in/adriana-abedala-do-carmo-almeida-a03241184/" target="#"><img src={LinkedIn} className="icon_size" alt="LinkedIn"/></a>
        </div>
      </div>
    </div>
 );
};

export default contact;