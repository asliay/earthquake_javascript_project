import { MapContainer, TileLayer, Marker, Popup, LayersControl, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {platesLayer} from '../assets/PB2002_boundaries';
import marker from '../assets/marker.png'

  

// L.Marker.prototype.options.icon = DefaultIcon;


const HistoricalMap = ({historicalQuakes}) => {
// function to capitalise first letter, used for earthquake location popup
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    let DefaultIcon = new L.Icon({
        iconUrl: marker,
        iconSize: [40,40],
        iconAnchor: [20, 40],
        shadowUrl: iconShadow,
        shadowAnchor: [20,40],
        popupAnchor: [0, -40]
    });
    
    const myStyle = [{
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
    }]
    
    return(
    <>
        
    <div id="map-container" className="historical-map-container">
        <h2>{historicalQuakes.length} of the biggest Earthquakes of the last century:</h2>
        <MapContainer 
            scrollWheelZoom={false}
              className="map"
              center={[20.5844,
                       26.2456]}
              zoom={2}
              style={{ height: 450, width: '100%' }}
               >
        <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" /> </LayersControl.BaseLayer>
           
      <LayersControl.BaseLayer checked name="Grey">
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" 
      attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors, &copy; <a href=&quot;http://cartodb.com/attributions&quot;>CartoDB</a>" /></LayersControl.BaseLayer> 

        {historicalQuakes.map(quake => ( 
            <Marker 
                key={quake._id}
                icon={DefaultIcon}
                position={[
                    quake.coordinates[0], 
                    quake.coordinates[1]
                    ]}>
            <Popup>
            {/* The {quake.title} occurred on {new Date(quake.time).toLocaleString()} (UTC), and had a magnitude of {quake.mag}. */}
                {quake.title}<br/>
                {new Date(quake.time).toLocaleString()} (UTC)
                <hr/>
                Earthquake Magnitude: {quake.mag}<br/>
                Location: {capitalizeFirstLetter(quake.location)}
            </Popup>
            </Marker>
           ))} 
        </LayersControl>
        {platesLayer.features.map(plate => (
           <GeoJSON style= {myStyle} data = {plate.geometry}  />
        ))}
        </MapContainer> 
    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    
    </div>
    </>
    )
}

export default HistoricalMap;
