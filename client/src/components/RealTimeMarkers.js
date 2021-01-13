import L from 'leaflet';
import marker from '../assets/marker.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Marker, Popup } from 'react-leaflet';


const RealTimeMarkers = ({ realtimeQuakes }) => {

    // function to capitalise first letter, used for earthquake location popup  
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let DefaultIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    shadowUrl: iconShadow,
    shadowAnchor: [20, 40],
    popupAnchor: [0, -40]
});
L.Marker.prototype.options.icon = DefaultIcon;

// const markers = realtimeQuakes.map(quake => (
//         <Marker
//             key={quake.id}
//             icon={DefaultIcon}
//             position={[
//                 quake.geometry.coordinates[1],
//                 quake.geometry.coordinates[0]
//             ]} >
//             <Popup>
//                 {capitalizeFirstLetter(quake.properties.place)}<br />
//                 {new Date(quake.properties.time).toLocaleString()} (UTC)
//     <hr />
//     Earthquake Magnitude: {quake.properties.mag}
//             </Popup>
//         </Marker>
//     ));

//     return {markers}
return null
};


export default RealTimeMarkers;

