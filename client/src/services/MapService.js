// Magnitude 2.5+ last 7 days
const weekURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson';
// Magnitude 4.5+ last 24 hours


export const getWeekData = () => {
    return fetch(weekURL)
    .then(res => res.json());
}
