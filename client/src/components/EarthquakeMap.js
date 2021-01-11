import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';



// coordinates on usgs longlatdepth, removing depth and switching to Lat Long for Leaflet
const EarthquakeMap = ({realtimeQuakes}) => {
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

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
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" /> 

        {realtimeQuakes.map(quake => ( 
            <Marker 
                key={quake.id}
                icon={DefaultIcon}
                position={[
                    quake.geometry.coordinates[1], 
                    quake.geometry.coordinates[0]
                    ]}>
             <Popup>
             This recent earthquake on {new Date(quake.properties.time).toDateString()} (UTC), {quake.properties.title} had a magnitude of {quake.properties.mag}.
            </Popup>
            </Marker>
           ))} 
        </MapContainer> 
    </div>
    <p>In the last 7 days, there have been {realtimeQuakes.length} earthquakes over Magnitude 2.5.</p>
    </>
    )
}

export default EarthquakeMap;
