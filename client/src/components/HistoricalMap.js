import { MapContainer, TileLayer, Marker, Popup, LayersControl, GeoJSON, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {platesLayer} from '../assets/PB2002_boundaries';
import marker from '../assets/marker.png'


const HistoricalMap = ({historicalQuakes, quakeSelected}) => {
// function to capitalise first letter, used for earthquake location popup
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    //custom marker icon settings
    let customIcon = new L.Icon({
        iconUrl: marker,
        iconSize: [40,40],
        iconAnchor: [20, 40],
        shadowUrl: iconShadow,
        shadowAnchor: [20,40],
        popupAnchor: [0, -40]
    });
    // styling for plates map layer
    const myStyle = [{
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
    }]
    
    return(
    <>
        
    <div id="map-container" className="historical-map-container">
        <p className="header3">{historicalQuakes.length} of the biggest Earthquakes throughout history:</p>
        <MapContainer 
            scrollWheelZoom={false}
              className="map"
              center={[20.5844,
                       26.2456]}
              zoom={2}
              style={{ height: 450, width: '100%' }}
              zoomControl={false}
               >
        <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" /> </LayersControl.BaseLayer>
           
      <LayersControl.BaseLayer checked name="Grey">
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" 
      attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors, &copy; <a href=&quot;http://cartodb.com/attributions&quot;>CartoDB</a>" /></LayersControl.BaseLayer> 
            <ZoomControl position="bottomright"  />


        {historicalQuakes.map(quake => ( 
            <Marker 
                key={quake._id}
                icon={customIcon}
                eventHandlers={{
                    click: () => {
                      quakeSelected(quake)
                    },
                  }}
                position={[
                    quake.coordinates[0], 
                    quake.coordinates[1]
                    ]}>
            <Popup>
                {quake.title}<br/>
                {new Date(quake.time).toLocaleString()} (UTC)
                <hr/>
                Earthquake Magnitude: {quake.mag.toFixed(1)}<br/>
                Location: {capitalizeFirstLetter(quake.location)}
            </Popup>
            </Marker>
           ))} 
        </LayersControl>
        {platesLayer.features.map((plate, index) => (
           <GeoJSON style= {myStyle} data = {plate.geometry} key={index}  />
        ))}
        </MapContainer> 
    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    
    </div>
    </>
    )
}

export default HistoricalMap;
