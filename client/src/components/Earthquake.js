import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Earthquake = ({quake, LatLong})=>{
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
  <Marker position={LatLong} >
    <Popup>
      This recent earthquake date/time: {quake.properties.time}, {quake.properties.title} had a magnitude of {quake.properties.mag}.
    </Popup>
  </Marker>
  </MapContainer>
        </>

    )

}

export default Earthquake;