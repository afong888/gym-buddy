import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@material-ui/core';
import LocationOn from '@material-ui/icons/LocationOn';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import config from '../../../../config/config.js';
import './map.css'

const Map = ({ coordinates, gym }) => {
  // const [gym, setGym] = useState('LA Fitness');
  const [locations, setLocations] = useState([]);

  const getGyms = () => {
    axios.get('/json', {
      params: {
        query: gym,
        key: config,
        latitude: location.lat,
        longitude: location.lng,
        type: gym,
      }
    })
      .then((results) => {
        setLocations(results.data.results);
      });
  }

  useEffect(getGyms, [gym]);

  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: config }}
          center={coordinates}
          defaultZoom={12}
          margin={[50, 50, 50, 50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}
        >
          <div
            className="home"
            lat={coordinates.lat}
            lng={coordinates.lng}
          >
            <LocationOn/>
          </div>
          {locations.map((location) => {
            return (
              <div
                className="location"
                lat={location.geometry.location.lat}
                lng={location.geometry.location.lng}
                key={location.formatted_address}
              >
                <LocationOnOutlinedIcon/>
              </div>
            )
          })}
        </GoogleMapReact>
      </div>
    </div>
  )
};

export default Map;
