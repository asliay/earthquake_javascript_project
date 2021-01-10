const weekURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

export const getWeekData = () => {
    return fetch(weekURL)
    .then(res => res.json());
}