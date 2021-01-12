// Magnitude 2.5+ last 7 days
const weekURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson';
// Magnitude 4.5+ last 24 hours
const recenthighURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson';

export const getWeekData = () => {
    return fetch(weekURL)
    .then(res => res.json());
}

// const dataJson =  "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"

// export const getTectonics = () => {
//     return fetch(dataJson)
//     .then(res => res.json());
// };