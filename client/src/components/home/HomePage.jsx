import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HomePage = () => (
  <>
  <div id="bg">
    <img src="https://wallpaperaccess.com/full/1108004.jpg" alt=""/>
  </div>
  <div className="start">
    <Link to="/map">
      <button className="getStarted" type="button"> Get Started </button>
    </Link>
  </div>
  </>
);

export default HomePage;
