use earthquakes;
db.dropDatabase();

db.historicalEarthquakes.insertMany([
  {
    title: "1960 Valdivia Earthquake",
    time: -303281326000,
    mag: 9.5,
    coordinates: [
      -38.24,
      -73.05,
      33
    ]
  },
  {
    title: "1965 Rat Islands Earthquake",
    time: -154810718000,
    mag: 8.7,
    coordinates: [
      51.29,
      178.55,
      30.3
    ]
  },
  {
    title: "2004 Indian Ocean Earthquake and Tsunami",
    time: 1104022733000,
    mag: 9.2,
    coordinates: [
      3.31,
      95.85,
      30
    ]
  },
  {
    title: "2011 Tōhoku Earthquake and Tsunami",
    time: 1299822384000,
    mag: 9.1,
    coordinates: [
      38.322,
      142.369,
      29
    ]
  },
  {
    title: "1964 Alaska Earthquake",
    time: 181859024000,
    mag: 9.2,
    coordinates: [
      60.908,
      -147.339,
      25
    ]
  },
  {
    title: "2010 Chile Earthquake",
    time: 1267252463000,
    mag: 8.8,
    coordinates: [
      -35.909,
      -72.733,
      30.1
    ]
  },
  {
    title: "1950 Assam–Tibet Earthquake",
    time: -611574626000,
    mag: 8.6,
    coordinates: [
      28.36,
      96.45,
      15
    ]
  },
  
  
])