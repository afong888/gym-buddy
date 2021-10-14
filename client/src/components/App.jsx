import React, { useState, useEffect } from 'react';
import Map from './map/Map.jsx';
import Buttons from './buttons/Buttons.jsx';
import '../../../public/style.css';

const App = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 37.42216,
    lng: -122.08427,
  })
  const [gym, setGym] = useState(null);

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    })
  };

  const changeGym = (event) => {
    setGym(event.target.value);
  };

  useEffect(getCoordinates, []);

  return (
    <div id="app">
      <h1>Gym Buddy</h1>
      <p>Find gyms near you, get started by clicking one of the buttons</p>
      <Buttons toggle={changeGym}/>
      <Map coordinates={coordinates} gym={gym}/>
    </div>
  )
};

export default App;
