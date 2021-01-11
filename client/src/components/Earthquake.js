import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import { Icon } from "leaflet";

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

// const quakeMarker = new Icon({
//   iconUrl: "/quakeMarker_outline.svg",
//   iconSize: [25, 25]
// });

L.Marker.prototype.options.icon = DefaultIcon;



const Earthquake = ({quake, LatLong})=>{
    const timeStamp = quake.properties.time
    const dateObject = new Date(timeStamp);
    const dayTime = dateObject.toLocaleString();

    const dateString = dateObject.toDateString();

    return (
        <>
        <h3>{quake.properties.title}</h3>
        <p>{quake.properties.mag}</p>
<MapContainer 
            key = {quake.properties.code}
            className="map"
            center={LatLong}
            zoom={4}
            style={{ height: 450, width: 450 }}
             >
                 
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
  <Marker position={LatLong} Icon={DefaultIcon} >
    <Popup>
      This recent earthquake on {dateString} (UTC), {quake.properties.title} had a magnitude of {quake.properties.mag}.
    </Popup>
  </Marker>
  </MapContainer>
        </>

    )

}

export default Earthquake;