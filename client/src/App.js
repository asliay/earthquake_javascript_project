import './App.css';
import {useState, useEffect, useRef} from "react";
import {getWeekData} from "./services/MapService";
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

  useEffect(() => {
    getWeekData()
    .then((earthquakes) => {
      setRealtimeQuakes(earthquakes.features);
      console.log(earthquakes.features)

    })
  }, []);
//   const earthquakesGeoJson =
//     'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';
//   const { data, error } = useSwr(earthquakesGeoJson, { fetcher });

// const position = [39.50, -121.05]

  return (
    <>
    <h1>QUICK, IT'S A QUAKE</h1>
    <EarthquakeInfoBox/>
    <EarthquakeMap realtimeQuakes={realtimeQuakes} />
    <h2>This is where the map with all the markers will show</h2>
    
    </>
  );
}

export default App;
