import './App.css';
import {useState, useEffect, useRef} from "react";
import {getWeekData, getTectonics} from "./services/MapService";
import {getQuakeInfo} from "./services/InfoService";
import EarthquakeInfoBox from "./components/EarthquakeInfoBox";
import EarthquakeMap from "./components/EarthquakeMap";


// import L from 'leaflet';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';
// import useSwr from "swr";

// const fetcher = (...args) => fetch(...args).then(response => response.json());

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

function App() {
  const [realtimeQuakes, setRealtimeQuakes] = useState([]);
  const [quakeInfo, setQuakeInfo] = useState([]);
  const [tectonicInfo, setTectonicInfo] = useState([]);



  useEffect(() => {
    getQuakeInfo()
    .then((data) => {
      setQuakeInfo(data)
    })
  }, []);

  useEffect(() => {
    getWeekData()
    .then((earthquakes) => {
      setRealtimeQuakes(earthquakes.features);
    })
  }, []);

  console.log(quakeInfo);
  console.log(realtimeQuakes);

  useEffect(() => {
    getTectonics()
    .then((tectonicPlates) => {
      setTectonicInfo(tectonicPlates.features);
    })
  }, []);

  console.log(tectonicInfo);
  
  // console.log(quakeInfo);


  return (
    <>
    <h1>QUICK, IT'S A QUAKE</h1>
    <EarthquakeInfoBox quakeInfo={quakeInfo}/>
    <h2>This is where the map with all the markers will show</h2>
    <EarthquakeMap realtimeQuakes={realtimeQuakes} tectonicInfo={tectonicInfo} />
    
    
    </>
  );
}

export default App;
