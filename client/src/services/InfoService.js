// Info about Earthquakes from Database
const infoURL = 'http://localhost:5000/api/earthquakes/info'

export const getQuakeInfo = () => {
  return fetch(infoURL)
  .then(res => res.json());
}