import './App.css';
import {useState, useEffect} from "react";
import {getWeekData} from "./services/MapService";

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
    </>
  );
}

export default App;
