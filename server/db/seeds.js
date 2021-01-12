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
    title: "1922 Vallenar Earthquake",
    time: -1487618829000,
    mag: 8.5,
    coordinates: [
      -28.293
      -69.852,
      70
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
  },
  {
    title: "2003 Bam Earthquake",
    time: 1072403812000,
    mag: 6.6,
    coordinates: [
      28.995,
      58.311,
      15
    ]
  },
  {
    title: "2006 Yogyakarta Earthquake",
    time: 1148684038000,
    mag: 6.3,
    coordinates: [
      -7.961,
      110.446,
      12.5
    ]
  },
  {
    title: "2010 Yushu Earthquake",
    time: 1271202578000,
    mag: 6.9,
    coordinates: [
      33.165,
      96.548,
      17
    ]
  },
  {
    title: "2003 Boumerdès Earthquake",
    time: 1053542660000,
    mag: 6.8,
    coordinates: [
      36.964,
      3.634,
      12
    ]
  },
  {
    title: "2009 Sumatra Earthquakes",
    time: 1254305770000,
    mag: 7.6,
    coordinates: [
      -0.720,
      99.867,
      81
    ]
  },
  {
    title: "2011 Christchurch Earthquake",
    time: 1298332302000,
    mag: 6.1,
    coordinates: [
      -43.583,
      172.680,
      5.9
    ]
  },
  {
    title: "2004 Chūetsu Earthquake",
    time: 1098521760000,
    mag: 6.6,
    coordinates: [
      37.226,
      138.779,
      16
    ]
  },
  {
    title: "2009 L'Aquila Earthquake",
    time: 1238981562000,
    mag: 6.3,
    coordinates: [
      42.334,
      13.334,
      8.8
    ]
  },
  {
    title: "2020 Zagreb Earthquake",
    time: 1584854643000,
    mag: 5.3,
    coordinates: [
      45.907,
      15.970,
      10
    ]
  },
  {
    title: "2007 Peru Earthquake",
    time: 1187221257000,
    mag: 8.0,
    coordinates: [
      -13.386,
      -76.603,
      39
    ]
  },
  {
    title: "2019 Albania Earthquake",
    time: 1574736852000,
    mag: 6.4,
    coordinates: [
      41.514,
      19.526,
      22
    ]
  },
  {
    title: "2016 Ecuador Earthquake",
    time: 1460851116000,
    mag: 7.8,
    coordinates: [
      0.382,
      -79.922,
      20.6
    ]
  },
  {
    title: "2013 Balochistan Earthquakes",
    time: 1380022187000,
    mag: 7.7,
    coordinates: [
      26.951,
      65.501,
      15
    ]
  },
  {
    title: "2020 Aegean Sea Earthquake",
    time: 1604058686000,
    mag: 7.0,
    coordinates: [
      37.913,
      26.779,
      21
    ]
  },
  {
    title: "2014 Ludian Earthquake",
    time: 1407054613000,
    mag: 6.2,
    coordinates: [
      27.189,
      103.409,
      12
    ]
  },
  {
    title: "2001 southern Peru Earthquake",
    time: 993328394000,
    mag: 8.4,
    coordinates: [
      -16.265,
      -73.641,
      33
    ]
  },
  {
    title: "2006 Kuril Islands Earthquake",
    time: 1163589253000,
    mag: 8.3,
    coordinates: [
      46.592,
      153.266,
      10
    ]
  },
  {
    title: "2003 Hokkaidō Earthquake",
    time: 1064519406000,
    mag: 8.3,
    coordinates: [
      41.815,
      143.910,
      27
    ]
  },
  {
    title: "2017 Chiapas Earthquake",
    time: 1504846159000,
    mag: 8.2,
    coordinates: [
      15.022,
      -93.899,
      47.4
    ]
  },
  {
    title: "2014 Iquique Earthquake",
    time: 1396396007000,
    mag: 8.2,
    coordinates: [
      -19.610,
      -70.769,
      25
    ]
  },
  {
    title: "2009 Samoa Earthquake and Tsunami",
    time: 1254246490000,
    mag: 8.1,
    coordinates: [
      -15.489,
      -172.095,
      18
    ]
  },
  {
    title: "2002 Denali Earthquake",
    time: 1036361561000,
    mag: 7.9,
    coordinates: [
      63.514,
      -147.453,
      4.2
    ]
  },
  {
    title: "1939 Chillán Earthquake",
    time: -976220866000,
    mag: 7.8,
    coordinates: [
      -36.305,
      -72.315,
      35
    ]
  },
  {
    title: "1985 Mexico City Earthquake",
    time: 495983870000,
    mag: 8.0,
    coordinates: [
      18.190,
      -102.533,
      27.9
    ]
  },
  {
    title: "1931 Fuyun Earthquake",
    time: -1211596875000,
    mag: 7.9,
    coordinates: [
      46.817,
      89.915,
      10
    ]
  },
  {
    title: "1970 Ancash Earthquake",
    time: -3142640191000,
    mag: 7.9,
    coordinates: [
      -9.183,
      -78.737,
      45
    ]
  },
  {
    title: "1944 San Juan Earthquake",
    time: -819245428000,
    mag: 7.0,
    coordinates: [
      -31.372,
      -68.436,
      15
    ]
  },
  {
    title: "1939 Erzincan Earthquake",
    time: -947203357000,
    mag: 7.8,
    coordinates: [
      39.771,
      39.577,
      20
    ]
  },
  {
    title: "1976 Guatemala Earthquake",
    time: 192272506000,
    mag: 7.5,
    coordinates: [
      15.324,
      -89.101,
      5
    ]
  },
  {
    title: "1990 Manjil–Rudbar Earthquake",
    time: 645915614000,
    mag: 7.4,
    coordinates: [
      36.957,
      49.409,
      18.5
    ]
  },
  {
    title: "1978 Tabas Earthquake",
    time: 274808155000,
    mag: 7.4,
    coordinates: [
      33.386,
      57.434,
      33
    ]
  },
  {
    title: "1970 Tonghai Earthquake",
    time: 322554000,
    mag: 7.1,
    coordinates: [
      24.185,
      102.543,
      11.3
    ]
  },
  {
    title: "1960 Agadir Earthquake",
    time: -310436382000,
    mag: 5.8,
    coordinates: [
      30.351,
      -9.690,
      15
    ]
  },
  {
    title: "1972 Nicaragua Earthquake",
    time: 93940184000,
    mag: 6.3,
    coordinates: [
      12.184,
      -86.223,
      10
    ]
  }

])

db.earthquakeInfo.insertMany([
  { 
    generalInfo: "info goes here",
    safetyInfo: "how to be safe during an earthquake!",
    historical: {
      funFacts: {
          numOfQuakesFact: `It is estimated that there are 500,000 detectable earthquakes each year, 100,00 of which can be felt.`,
          richterScaleFact: `The Richter Scale, also known as the Magnitude Scale is a measure of the strength of earthquakes, developed by Charles F. Richter in 1935.`,
          momentMagScaleFact: `Due to limitations of the Richter Scale, the Moment Magnitude Scale was defined in 1979 to measure an earquakes magnitude, based on its seismic movement. It has become the standard scale used by scientific bodies for reporting larger quakes.`,
          largestMagFact: `The largest earthquake ever recorded occurred on May 22, 1960 in Chile on a fault almost 1000 miles long. It reached a magnitude of 9.5.`,
          mag10Fact: `While technicaly possible, a magnitude 10 earthquake is very unlikely. The magnitude of an earthquake is related to the
          length of the fault-line where it occurs. The longer the fault, the larger the earthquake. A fault would need to extend around most of the globe in order to produce a magnitude 10 earthquake, and no such fault is known to exist.`,
          ringOfFireFact: `The 'Ring of Fire' is a region around the rim of the Pacific Ocean where many volcanic eruptions and earthquakes occur. It is a horseshoe-shaped area around 40,000km long and up to 500km wide.`,
          moonFact: `Moonquakes (earthquakes on the moon) were first discovered by Apollo astronauts. They happen less frequently, and have a lower magnitude than normal earthquakes.
          Between 1972 and 1977, 28 shallow moonquakes were observed.`
      },
      top10Quakes: [
        {
          title: "1960 Valdivia Earthquake",
          year: 1960,
          locationName: "Bio-Bio, Chile",
          time: -303281326000,
          mag: 9.5,
          coordinates: [
            -38.143,
            -73.407,
            33
          ],
          description: ``
        },
        {
          title: "1964 Alaska Earthquake",
          year: 1963,
          locationName: "Southern Alaska",
          time: -181859024000,
          mag: 9.2,
          coordinates: [
            60.908,
            -147.339,
            25
          ]
        },
        {
          title: "2004 Indian Ocean Earthquake and Tsunami",
          year: 2004,
          location: "Off the West Coast of Northern Sumatra",
          time: 1104022733000,
          mag: 9.2,
          coordinates: [
            3.295,
            95.982,
            30
          ],
          description: `Also known as the Boxing Day Tsunami and the Sumatra-Andaman Earthquake, this was an undersea megathrust earthquake. It was caused by a rupture along the fault between the Burma Plate and the Indian Plate. 
          The tsunami waves grew up with 30m (100ft) high, and communities along the coast of the Indian Ocean were severly affected. 
          The tsunamis killed an estimated 227,898 people in 14 countries, making it the deadliest natural disaster of the 21st century.`
        },
        {
          title: "2011 Tōhoku Earthquake and Tsunami",
          year: 2011,
          location: "Near the East Coast of Honshu, Japan",
          time: 1299822384000,
          mag: 9.1,
          coordinates: [
            38.297,
            142.373,
            29
          ]
        },
        {
          title: "1952 Severo-Kurilsk Earthquake",
          year: 1952,
          location: "Off the East Coast of the  Kamchatka Peninsula, Russia",
          time: -541407690000,
          mag: 9.0,
          coordinates: [
            52.623,
            159.779,
            21.6
          ]
        },
        {
          title: "2010 Chile Earthquake",
          year: 2010,
          location: "Offshore Bio-Bio, Chile",
          time: 1267252463000,
          mag: 8.8,
          coordinates: [
            -36.122,
            -72.898,
            30.1
          ]
        },
        {
          title: "1965 Rat Islands Earthquake",
          year: 1965,
          location: "Rat Islands, Aleutian Islands, Alaska",
          time: -154810718000,
          mag: 8.7,
          coordinates: [
            51.251,
            178.715,
            30.3
          ]
        },
        {
          title: "1950 Assam–Tibet Earthquake",
          year: 1950,
          location: "Eastern Xizang-India border region",
          time: -611574626000,
          mag: 8.6,
          coordinates: [
            28.363,
            96.445,
            15
          ]
        },
        {
          title:"2005 Nias–Simeulue Earthquake",
          year: 2005,
          location: "Northern Sumatra, Indonesia",
          time: 1112026176000,
          mag: 8.6,
          coordinates: [
            2.085,
            97.108,
            30
          ]
        },
        {
          title:"1957 Andreanof Islands Earthquake",
          year: 1957,
          location: "Andreanof Islands, Aleutian Islands, Alaska",
          time: -404386647000,
          mag: 8.6,
          coordinates: [
            51.449,
            -175.626,
            25
          ]
        }
      ]
    }
  }
])


