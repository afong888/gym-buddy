import React from 'react';

const Buttons = ({ toggle }) => {
  return (
    <div className="gymButtons">
      <button onClick={toggle} value="LA Fitness">LA Fitness</button>
      <button onClick={toggle} value="Life Time Fitness">Life Time Fitness</button>
      <button onClick={toggle} value="24 Hour Fitness">24 Hour Fitness</button>
      <button onClick={toggle} value="Equinox">Equinox</button>
      <button onClick={toggle} value="Gold's Gym">Gold's Gym</button>
      <button onClick={toggle} value="Planet Fitness">Planet Fitness</button>
      <button onClick={toggle} value="Crunch">Crunch</button>
    </div>
  )
}

export default Buttons;