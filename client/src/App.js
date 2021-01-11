import './App.css';
import {useState, useEffect, useRef} from "react";
import {getWeekData} from "./services/MapService";
import EarthquakeInfoBox from "./components/EarthquakeInfoBox";
import EarthquakeMap from "./components/EarthquakeMap";


import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function App() {
  const [realtimeQuakes, setRealtimeQuakes] = useState([]);

  useEffect(() => {
    getWeekData()
    .then((earthquakes) => {
      setRealtimeQuakes(earthquakes.features);
      console.log(earthquakes.features)

    })
  }, []);

  const mapRef = useRef();
  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if ( !map ) return;

    const quakeIcon = new L.Icon({
      iconSize: [26, 26],
      popupAnchor: [0, 15],
      shadowUrl: markerShadow,
      shadowAnchor: [13, 28]
    });

    const earthquakesGeoJson = new L.GeoJSON(getWeekData, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
          icon: quakeIcon
        });
      },
      
      
      onEachFeature: (feature = {}, layer) => {
      const { properties = {} } = feature;
      const { Name } = properties;
      if ( !Name ) return;
      layer.bindPopup(`<p>${Name}`)

    }});

    earthquakesGeoJson.addTo(map);

    console.log(map);
  }, []);

const position = [39.50, -121.05]

  return (
    <>
    <h1>QUICK, IT'S A QUAKE</h1>
    <EarthquakeInfoBox/>
    <EarthquakeMap realtimeQuakes={realtimeQuakes} />
    <h2>This is where the map with all the markers will show</h2>
    <MapContainer 
              className="map"
              center={position}
              zoom={4}
              style={{ height: 450, width: 450 }}
               >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
    <Marker position={position} >
      <Popup>
        This was an earthquake called {} with a magnitude of {}.
      </Popup>
    </Marker>
    </MapContainer>
    </>
  );
}

export default App;
