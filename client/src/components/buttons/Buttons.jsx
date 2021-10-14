import React from 'react';
import './buttons.css';

const Buttons = ({ toggle }) => {
  return (
    <div className="buttons">
      <button className="gymButtons" onClick={toggle} value="LA Fitness">LA Fitness</button>
      <button className="gymButtons" onClick={toggle} value="Life Time Fitness">Life Time Fitness</button>
      <button className="gymButtons" onClick={toggle} value="24 Hour Fitness">24 Hour Fitness</button>
      <button className="gymButtons" onClick={toggle} value="Equinox">Equinox</button>
      <button className="gymButtons" onClick={toggle} value="Gold's Gym">Gold's Gym</button>
      <button className="gymButtons" onClick={toggle} value="Planet Fitness">Planet Fitness</button>
      <button className="gymButtons" onClick={toggle} value="Crunch">Crunch</button>
    </div>
  )
}

export default Buttons;