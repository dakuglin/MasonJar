import React from "react";
import logo from "../images/New_Jar.svg";
import "../index.css";
import Typical from 'react-typical';
import LoginButton from '../components/LoginButton';
import GuestButton from '../components/GuestButton.js';
import Logo from "../components/Logo"
// import GuestButton from '../components/GuestButton.js';
import Nav from "../components/Nav";


const Enter = () => {
  
  return (
    <>
      <div className="enter-container">
        <div className="split left">
          {/* <Nav /> */}
          <div className="centered">
            <Logo />
            {/* <img src={logo} alt="shaker" height="400px" /> */}
            {/* <h1>Welcome To Shake It Up! </h1> */}
            <p className="enterText">new ideas...no decisions</p>
          </div>
        </div>
        <div className="split right">
          <div className="centered-right">
            <h2>SHAKE IT UP</h2>
            {/* <p className="">new ideas...no decisions</p> */}
            <Typical className=""
              steps={['What should we do?', 300,
                'How about a movie?', 300,
                'Maybe a dinner date?', 300]}
              loop={Infinity}
              wrapper="p"
            />
           
              <div className="row">
              <div className="col-md-3">
              <LoginButton/>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-3">
              <GuestButton/>
              </div>
              
              </div>
            
            
            
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Enter;