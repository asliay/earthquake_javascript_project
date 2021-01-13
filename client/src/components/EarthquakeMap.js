import { MapContainer, TileLayer, Marker, Popup, LayersControl, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {platesLayer} from '../assets/PB2002_boundaries';
import marker from '../assets/marker.png'



const EarthquakeMap = ({realtimeQuakes}) => {

  // function to capitalise first letter, used for earthquake location popup  
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  // styling for plates map layer
    const myStyle = [{
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
    }]
    //custom marker icon settings
    let customIcon = new L.Icon({
        iconUrl: marker,
        iconSize: [40,40],
        iconAnchor: [20, 40],
        shadowUrl: iconShadow,
        shadowAnchor: [20,40],
        popupAnchor: [0, -40]
    });
    
    
    return(
    <>
       
    <div id="map-container" className="main-map-container">
        <p className="header2">This is the map showing all earthquakes, BOOYAH!</p>
        <MapContainer 
            scrollWheelZoom={false}
              className="map"
              center={[20.5844,
                       26.2456]}
              zoom={2}
              style={{ height: 450, width: 600 }}
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
                icon={customIcon}
                position={[
                    quake.geometry.coordinates[1], 
                    quake.geometry.coordinates[0]
                    ]} >
            <Popup key={quake.id}>
                {capitalizeFirstLetter(quake.properties.place)}<br/>
                {new Date(quake.properties.time).toLocaleString()} (UTC)
                <hr/>
                Earthquake Magnitude: {quake.properties.mag}
                
                
            </Popup>
            </Marker>
           ))} 
           </LayersControl>
        {platesLayer.features.map(plate => (
           <GeoJSON style= {myStyle} data = {plate.geometry}  />
           ))}

        </MapContainer> 
    <p>In the last 7 days, there have been {realtimeQuakes.length} earthquakes over Magnitude 2.5.</p>
    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
    </div>
    </>
    )
}

export default EarthquakeMap;
