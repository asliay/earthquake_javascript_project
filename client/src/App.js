import './App.css';
import {useState, useEffect, useRef} from "react";
import {getWeekData} from "./services/MapService";
import {getQuakeInfo} from "./services/InfoService";
import {getHistoricalQuakes} from "./services/HistoricalService";
import EarthquakeInfoBox from "./components/EarthquakeInfoBox";
import EarthquakeMap from "./components/EarthquakeMap";
import HistoricalMap from "./components/HistoricalMap"

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
  const [historicalQuakes, setHistoricalQuakes] = useState([]);


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

  useEffect(() => {
    getHistoricalQuakes()
    .then((data) => {
      setHistoricalQuakes(data);
    })
  }, [])

  console.log(quakeInfo);
  console.log(realtimeQuakes);



  return (
    <>
    <h1>QUICK, IT'S A QUAKE</h1>
    <EarthquakeInfoBox quakeInfo={quakeInfo}/>
    <EarthquakeMap realtimeQuakes={realtimeQuakes} />
    <HistoricalMap historicalQuakes={historicalQuakes} />
    
    
    </>
  );
}

export default App;
