const weekURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';
const recenthighURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson';

export const getWeekData = () => {
    return fetch(recenthighURL)
    .then(res => res.json());
}