import './App.css';
import {useState, useEffect} from "react";
import {getWeekData} from "./services/MapService";
import {getHistoricalQuakes} from "./services/HistoricalService";
import {BrowserRouter as Router, Route} from "react-router-dom";
// bulk import from new file index.js that exports components
import {NavBar, EarthquakeInfoBox, SafetyInfo, History, EarthquakeMap, ChartTest} from './components/index'
import Image1 from './assets/wobblybobbly.jpg';


function App() {
  const [realtimeQuakes, setRealtimeQuakes] = useState([]);
  const [historicalQuakes, setHistoricalQuakes] = useState([]);

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

  return (
    <>
   
    <Router>
    <img src={Image1} alt="whyyyy" className="header-image" width="400px"/>
    <p className="header1">QUICK, IT'S A QUAKE!</p>
    <NavBar/>
    <Route exact path = "/" render = {
      () => <EarthquakeInfoBox realtimeQuakes = {realtimeQuakes} /> }
      />
    <Route path = "/safety" component={SafetyInfo}/>
    <Route path = "/history" render = {
      () => <History historicalQuakes = {historicalQuakes} /> }
      />
    </Router>
    </>
  );
}

export default App;
