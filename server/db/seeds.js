use earthquakes;
db.dropDatabase();

db.historicalEarthquakes.insertMany([
  {
    title: "1960 Valdivia Earthquake",
    time: -303281326000,
    mag: 9.5,
    coordinates: [
      -38.143,
      -73.407,
      33
    ]
  },
  {
    title: "1965 Rat Islands Earthquake",
    time: -154810718000,
    mag: 8.7,
    coordinates: [
      51.251,
      178.715,
      30.3
    ]
  },
  {
    title: "2004 Indian Ocean Earthquake and Tsunami",
    time: 1104022733000,
    mag: 9.2,
    coordinates: [
      3.295,
      95.982,
      30
    ]
  },
  {
    title: "2011 Tōhoku Earthquake and Tsunami",
    time: 1299822384000,
    mag: 9.1,
    coordinates: [
      38.297,
      142.373,
      29
    ]
  },
  {
    title: "1964 Alaska Earthquake",
    time: -181859024000,
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
      -36.122,
      -72.898,
      30.1
    ]
  },
  {
    title: "1950 Assam–Tibet Earthquake",
    time: -611574626000,
    mag: 8.6,
    coordinates: [
      28.363,
      96.445,
      15
    ]
  },
  {
    title:"1957 Andreanof Islands Earthquake",
    time: -404386647000,
    mag: 8.6,
    coordinates: [
      51.449,
      -175.626,
      25
    ]
  },
  {
    title:"2005 Nias–Simeulue Earthquake",
    time: 1112026176000,
    mag: 8.6,
    coordinates: [
      2.085,
      97.108,
      30
    ]
  },
  {
    title:"2012 Indian Ocean Earthquakes",
    time: 1334133516000,
    mag: 8.6,
    coordinates: [
      2.327,
      93.063,
      20
    ]
  },
  {
    title:"1963 Kuril Islands Earthquake",
    time: -196281721000,
    mag: 8.5,
    coordinates: [
      44.872,
      149.483,
      35
    ]
  },
  {
    title: "1994 Northridge Earthquake",
    time: 758809855000,
    mag: 6.7,
    coordinates: [
      34.213,
      -118.537,
      18.2
    ]
  },
  {
    title: "1952 Severo-Kurilsk Earthquake",
    time: -541407690000,
    mag: 9.0,
    coordinates: [
      52.623,
      159.779,
      21.6
    ]
  },
  {
    title: "1994 Bolivia Earthquake",
    time: 771121997000,
    mag: 8.2,
    coordinates: [
      -13.841,
      -67.553,
      631.6
    ]
  },
  {
    title: "2008 Sichuan Earthquake",
    time: 1210573681000,
    mag: 8,
    coordinates: [
      31.002,
      103.322,
      19
    ]
  },
  {
    title: "2015 April Nepal Earthquake",
    time: 1429942285000,
    mag: 7.8,
    coordinates: [
      28.231,
      84.731,
      8.2
    ]
  },
  {
    title: "1999 İzmit Earthquake",
    time: 934848099000,
    mag: 7.6,
    coordinates: [
      40.748,
      29.864,
      17
    ]
  },
  {
    title: "2010 Haiti Earthquake",
    time: 1263333190000,
    mag: 7.0,
    coordinates: [
      18.443,
      -72.571,
      13
    ]
  },
  {
    title: "2001 Gujarat Earthquake",
    time: 980479000000,
    mag: 7.7,
    coordinates: [
      23.419,
      70.232,
      16
    ]
  },
  {
    title: "2007 Sumatra Earthquake (A)",
    time: 1189595426000,
    mag: 8.4,
    coordinates: [
      -4.438,
      101.367,
      34
    ]
  },
  {
    title: "2007 Sumatra Earthquake (B)",
    time: 1189640943000,
    mag: 7.9,
    coordinates: [
      -2.625,
      100.841,
      35
    ]
  },
  {
    title: "2005 Kashmir Earthquake",
    time: 1128743440000,
    mag: 7.6,
    coordinates: [
      34.539, 
      73.588,
      26
    ]
  },
  {
    title: "2002 Hindu Kush Earthquake (A)",
    time: 1015157299000,
    mag: 7.4,
    coordinates: [
      36.502,
      70.482,
      225.6
    ]
  },
  {
    title: "2002 Hindu Kush Earthquake (B)",
    time: 1017068193000,
    mag: 6.1,
    coordinates: [
      36.062,
      69.315,
      8
    ]
  },
  {
    title: "1938 Banda Sea Earthquake",
    time: -1007096137000,
    mag: 8.5,
    coordinates: [
      -5.045,
      131.614,
      35
    ]
  }
  
])

db.earthquakeInfo.insertMany([
  { 
    generalInfo: "info goes here",
    safetyInfo: "",
    funFacts: ""
  },
])