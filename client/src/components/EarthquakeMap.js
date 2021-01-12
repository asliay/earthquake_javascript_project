import Earthquake from "./Earthquake";
import { MapContainer, TileLayer, Marker, Popup, LayersControl, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { getTectonics } from "../services/MapService";
import '../assets/PB2002_boundaries.json';

var mystyle = [{
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
}]


// this is some of the data from geojson file, creating a test line
var line = {
    "type": "Feature",
      "properties": {
        "LAYER": "plate boundary",
        "Name": "AF-AN",
        "Source": "Mueller et al. [1987]",
        "PlateA": "AF",
        "PlateB": "AN",
        "Type": ""
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -0.437900,
            -54.851800
          ],
          [
            -0.038826,
            -54.677200
          ],
          [
            0.443182,
            -54.451200
          ],
          [
            0.964534,
            -54.832200
          ],
          [
            1.694810,
            -54.399000
          ],
          [
            2.359750,
            -54.037400
          ],
          [
            3.025420,
            -53.650700
          ],
          [
            3.368940,
            -53.834100
          ],
        ]
}};

var line2 = "../assets/PB2002_boundaries.json"

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;
// coordinates on usgs longlatdepth, removing depth and switching to Lat Long for Leaflet
const EarthquakeMap = ({realtimeQuakes, tectonicInfo}) => {
    // const earthquakeNodes = realtimeQuakes.map((quake => {
    //     const posLonLat = quake.geometry.coordinates.slice(0,2)
    //     const LatLong = posLonLat.reverse()
    //     const timeStamp = quake.properties.time
    //     const dateObject = new Date(timeStamp);
    //     const dayTime = dateObject.toLocaleString();
    //     const dateString = dateObject.toDateString();
    //     return (    
    //         <>
    //         </>  
    //     )
    // }))
    
    return(
    <>
        <h2>This is the map showing all earthquakes, BOOYAH!</h2>
    <div id="map-container">
        <MapContainer 
              className="map"
              center={[20.5844,
                       26.2456]}
              zoom={2}
              style={{ height: 450, width: 1200 }}
               >
         <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" /> </LayersControl.BaseLayer>
           
      <LayersControl.BaseLayer name="Grey">
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" 
      attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors, &copy; <a href=&quot;http://cartodb.com/attributions&quot;>CartoDB</a>" /></LayersControl.BaseLayer> 

        {realtimeQuakes.map(quake => ( 
                <Marker 
                key={quake.id}
                position={[
                    quake.geometry.coordinates[1], 
                    quake.geometry.coordinates[0]
                    ]} >
             <Popup>
             This recent earthquake on {new Date(quake.properties.time).toDateString()} (UTC), {quake.properties.title} had a magnitude of {quake.properties.mag}.
            </Popup>
            </Marker>
           ))} 
           </LayersControl>
        {tectonicInfo.map(plate => (
           <GeoJSON data = {plate.geometry.coordinates[1], plate.geometry.coordinates[0]}  />
        ))}
           {/* <GeoJSON data = {line}  /> */}
           {/* <GeoJSON data = {line2}  /> */}

        </MapContainer> 
    </div>
    <p>In the last 7 days, there have been {realtimeQuakes.length} earthquakes over Magnitude 2.5.</p>
    </>
    )
}

export default EarthquakeMap;
