import Earthquake from "./Earthquake";


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// coordinates on usgs longlatdepth, removing depth and switching to Lat Long for Leaflet
const EarthquakeMap = ({realtimeQuakes}) => {
    const earthquakeNodes = realtimeQuakes.map((quake => {
        const posLonLat = quake.geometry.coordinates.slice(0,2)
        const LatLong = posLonLat.reverse()
        console.log(posLonLat)
        console.log(LatLong)
        return(
            <>
            <Earthquake quake={quake} key={quake.id} LatLong={LatLong} />
            </>
        )

    }))


    return(
        <>
        <p>This is the map, BOOYAH!</p>
        {earthquakeNodes}
        
        </>
    )
}

export default EarthquakeMap;
