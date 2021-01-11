// Info on Historical Earthquakes from Database
const historicalURL = 'http://localhost:5000/api/earthquakes/historical'

export const getHistoricalQuakes = () => {
  return fetch(historicalURL)
  .then(res => res.json());
}