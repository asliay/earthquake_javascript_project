import Earthquake from "./Earthquake";


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// coordinates on usgs longlatdepth, removing depth and switching to Lat Long for Leaflet
const EarthquakeMap = ({realtimeQuakes}) => {
//     const earthquakeNodes = realtimeQuakes.map((quake => {
//         const posLonLat = quake.geometry.coordinates.slice(0,2)
//         const LatLong = posLonLat.reverse()
//         console.log(posLonLat)
//         console.log(LatLong)
//         return(
//             <>
//             {LatLong}
//             {/* <Earthquake quake={quake} key={quake.id} LatLong={LatLong} /> */}
//             </>
//         )
//     }))


    return(
        <>
        <p>This is the map, BOOYAH!</p>
        {/* {earthquakeNodes} */}
         <MapContainer 
              className="map"
              center={[0, 0]}
              zoom={4}
              style={{ height: 450, width: 450 }}
               >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" /> 

           {realtimeQuakes.map(quake => ( 
            <Marker position={[quake.geometry.coordinates[1], quake.geometry.coordinates[0]]} key={quake.id} >
             <Popup>
              This was an earthquake called {quake.properties.title} with a magnitude of {}.
            </Popup>
            {console.log(quake.geometry.coordinates.slice(0,2).reverse())}
            </Marker>
           ))} 
     </MapContainer> 
        </> 
    )
}

export default EarthquakeMap;
