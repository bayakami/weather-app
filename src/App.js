import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import { Dimmer, Loader } from 'semantic-ui-react';
export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      console.log("Latitude is:", lat)
      console.log("Longitude is:", long)

      const apiKey = process.env.REACT_APP_API_KEY;

      await fetch("https://api.openweathermap.org/data/2.5/weather?q=Sabinov,sk&APPID=c461813b4d9d1e6134958cde9bab88ac")
      //("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c461813b4d9d1e6134958cde9bab88ac")
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
       </div>
     )}
 </div>
  );
}