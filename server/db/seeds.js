use earthquakes;
db.dropDatabase();

db.historicalEarthquakes.insertMany([
  {
    title: "1960 Valdivia Earthquake",
    mag: 9.5,
    coordinates: [
      -38.24,
      -73.05,
      33
    ]
  },
  {
    title: "1965 Rat Islands Earthquake",
    mag: 8.7,
    coordinates: [
      51.29,
      178.55,
      30.3
    ]
  },
  {
    title: "2004 Indian Ocean Earthquake and Tsunami",
    mag: 9.2,
    coordinates: [
      3.31,
      95.85,
      30
    ]
  }
])