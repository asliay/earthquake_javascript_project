import Earthquake from "./Earthquake";
import { MapContainer, TileLayer, Marker, Popup, LayersControl, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {platesLayer} from '../assets/PB2002_boundaries';
import marker from '../assets/marker.png'



const EarthquakeMap = ({realtimeQuakes}) => {
  
    const myStyle = [{
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
    }]
    
    let DefaultIcon = new L.Icon({
        iconUrl: marker,
        iconSize: [40,40],
        iconAnchor: [20, 40],
        shadowUrl: iconShadow,
        shadowAnchor: [20,40],
        popupAnchor: [0, -40]
    });
    L.Marker.prototype.options.icon = DefaultIcon;
    
    return(
    <>
        <h2>This is the map showing all earthquakes, BOOYAH!</h2>
       
    <div id="map-container">
        <MapContainer 
            scrollWheelZoom={false}
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
                icon={DefaultIcon}
                position={[
                    quake.geometry.coordinates[1], 
                    quake.geometry.coordinates[0]
                    ]} >
             <Popup>
             This recent earthquake on {new Date(quake.properties.time).toLocaleString()} (UTC), {quake.properties.title} had a magnitude of {quake.properties.mag}.
            </Popup>
            </Marker>
           ))} 
           </LayersControl>
        {platesLayer.features.map(plate => (
           <GeoJSON style= {myStyle} data = {plate.geometry}  />
        ))}

        </MapContainer> 
    </div>
    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <p>In the last 7 days, there have been {realtimeQuakes.length} earthquakes over Magnitude 2.5.</p>
    </>
    )
}

export default EarthquakeMap;
