const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('This is our Earthquakes server! Yay learning!')
})

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('earthquakes');
  const historicalCollection = db.collection('historicalEarthquakes');
  const infoCollection = db.collection('earthquakeInfo');
  const historicalRouter = createRouter(historicalCollection);
  const earthquakeInfoRouter = createRouter(infoCollection);

  app.use('/api/earthquakes/historical', historicalRouter);
  app.use('/api/earthquakes/info', earthquakeInfoRouter);

})
  .catch(console.error);

app.listen(5000, function() {
  console.log(`Earthquake server is running on port ${this.address().port}`)
});


