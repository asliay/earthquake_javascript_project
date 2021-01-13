import './App.css';
import {useState, useEffect, useRef} from "react";
import {getWeekData} from "./services/MapService";
import {getQuakeInfo} from "./services/InfoService";
import {getHistoricalQuakes} from "./services/HistoricalService";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// bulk import from new file index.js that exports components
import {NavBar, EarthquakeInfoBox, SafetyInfo, History, EarthquakeMap, ChartTest} from './components/index'


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

  // useEffect(() => {
  //   getTectonics()
  //   .then((tectonicPlates) => {
  //     setTectonicInfo(tectonicPlates.features);
  //   })
  // }, []);

  // console.log(tectonicInfo);
  // tectonicInfo={tectonicInfo}
  
  // console.log(quakeInfo);


  return (
    <>
    <h1>QUICK, IT'S A QUAKE</h1>
    <Router>
    <NavBar/>
    <Route exact path = "/" render = {
      () => <EarthquakeInfoBox quakeInfo={quakeInfo}/> } 
      />
    <Route path = "/safety" render = {
      () => <SafetyInfo quakeInfo={quakeInfo}/> }
      />
    <Route path = "/history" render = {
      () => <History quakeInfo={quakeInfo} historicalQuakes = {historicalQuakes} /> }
      />
    </Router>
    <EarthquakeMap realtimeQuakes={realtimeQuakes} />
    <ChartTest realtimeQuakes={realtimeQuakes} />
    
    </>
  );
}

export default App;
