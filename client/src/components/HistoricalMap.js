import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import {Icon} from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
  
let DefaultIcon = new L.Icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
// L.Marker.prototype.options.icon = DefaultIcon;


const HistoricalMap = ({historicalQuakes}) => {
    
    return(
    <>
        <h2>This is the historical map:</h2>
    <div id="map-container">
        <MapContainer 
              className="map"
              center={[20.5844,
                       26.2456]}
              zoom={2}
              style={{ height: 450, width: 1200 }}
               >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" /> 

        {historicalQuakes.map(quake => ( 
            <Marker 
                key={quake._id}
                icon={DefaultIcon}
                position={[
                    quake.coordinates[0], 
                    quake.coordinates[1]
                    ]}>
             <Popup>
             The {quake.title} occurred on {new Date(quake.time).toDateString()} (UTC), and had a magnitude of {quake.mag}.
            </Popup>
            </Marker>
           ))} 
        </MapContainer> 
    </div>
    <p>Showing {historicalQuakes.length} of the biggest Earthquakes of the last century. </p>
    </>
    )
}

export default HistoricalMap;
