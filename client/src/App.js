import './App.css';
import {useState, useEffect} from "react";
import {getWeekData} from "./services/MapService";
import EarthquakeInfoBox from "./components/EarthquakeInfoBox";
import EarthquakeMap from "./components/EarthquakeMap";

function App() {
  const [realtimeQuakes, setRealtimeQuakes] = useState([]);

  useEffect(() => {
    getWeekData()
    .then((earthquakes) => {
      setRealtimeQuakes(earthquakes);
    })
  }, []);

  return (
    <>
    <h1>QUICK, IT'S A QUAKE</h1>
    <EarthquakeInfoBox/>
    <EarthquakeMap/>
    </>
  );
}

export default App;
