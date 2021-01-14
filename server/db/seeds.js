use earthquakes;
db.dropDatabase();

db.historicalEarthquakes.insertMany([
  {
    title: "1960 Valdivia Earthquake",
    location: "Bio-Bio, Chile",
    casualties: "1,000 - 6,000",
    damageCost: "$4.8 billion (adj. for inflation)",
    desc: {
      paragraph1: "Also known as the Great Chilean Earthquake, this was the most powerful earthquake every recorded. It began at 3pm local time, and last for approximately 10 minutes. The resulting tsunamis affected Southern Chile, Hawaii, Japan, the Phillipines, eastern New Zealand, southeast Australia, and the Aleutian Islands.",
      paragraph2: "The localised tsunamis caused by tremors battered the Chilean coast, with waves up to 25 metres. The main tsunami traveled across the Pacific and devastated Hilo, Hawaii, where waves as high as 10.7 metres were recorded over 10,000km from the epicenter.",
      paragraph3: ""
    },  
    time: -303281326000,
    mag: 9.5,
    type: "Megathrust",
    coordinates: [
      -38.143,
      -73.407,
      33
    ]
  },
  {
    title: "1965 Rat Islands Earthquake",
    location: "Rat Islands, Aleutian Islands, Alaska",
    casualties: "No Casualties",
    damageCost: "$82.6k (adj. for inflation)",
    desc: {
      paragraph1: "The Rat Islands are a group of volcanic islands in the Aleutian Islands, in southwestern Alaska. They were given their name because rats were accidentally introducted after a Japanese shipwreck around 1780 (as of 2009, they are believed to be rat-free). These islands are on the boundary of the Pacific and North American tectonic plates, and as such are very earthquake-prone.",
      paragraph2: "This earthquake triggered a tsunami of over 10m on Shemya Island, causing very little damage."
    },
    time: -154810718000,
    mag: 8.7,
    coordinates: [
      51.251,
      178.715,
      30.3
    ],
    tsunami: {
      occurred: true,
      height: "10.7m"
    }
  },
  {
    title: "1922 Vallenar Earthquake",
    location: "Atacama Region, Chile",
    casualties: "Several hundred",
    damageCost: "$76-380 million (adj. for inflation)",
    desc: {
      paragraph1: "This earthquake took place along the boundary between the Nazca and South American tectonic plates, near the border of Argentina. It triggered a destructive tsunami that caused significant damage to the coast of Chile, and was observed as far away as Australia.",
      paragraphe2: "Chile has been at a convergent plate boundary that generates megathrust earthquakes since the Paleozoic Era. As such, the Chilean coast has suffered many megathrust earthquakes along this plate boundary, including the strongest earthquake ever measured, in 1960."
    },
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
    location: "Off the West Coast of Northern Sumatra",
    casualties: "227,898",
    damageCost: "Estimated $13 billion (adj. for inflation)",
    desc: {
      paragraph1: "Also known as the Boxing Day Tsunami and the Sumatra-Adaman earthquake, this was an undersea megathrust earthquake with an epicentre off the west coast of norther Sumatra, Indonesia. A series of massive tsunami waves grew up to 30 metres high once heading inland, created by underwater seismic activity. The earthquake was caused by a rupture along the fault between the Burma and Indian Plates.",
      paragraph2: "This earthquake was the 3rd larget ever recorded and had the longest duration of faulting ever observed (between 8 and 10 minutes), and caused the planet to vibrate as much as 10mm. The huge destruction and high death toll prompted a worldwide humanitarian response, with donations totalling more than $14 billion. "
    },
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
    location: "Near the East Coast of Honshu, Japan",
    casualties: "15,899 deaths, 6,157 injured, 2,529 missing",
    damageCost: "$409 billion (adj. for inflation)",
    desc: {
      paragraph1: "Also known in Japan as the Great East Japan Earthquake,this was the most powerful earthquake ever recorded in Japan and the 4th most powerful earthquake in the world since modern record-keeping began in 1900. It triggered powerfu tsunami waves that may have reached up to heights of 40.5 metres in Miyako, and which, in the Sendai area, travelled at 700km/h and up to 10km inland. Residents of Sendai had only 10 minutes warning. The earthquake moved the main island of Japan 2.4 metres east, and shifted the Earth on its axis by between 10 and 25cm.",
      paragraph2: "A report by the National Police Agency of Japan listed 121, 778 buildings as 'total collapsed', 280,926 buildings 'half collapse', and another 699,180 buildings 'partially damaged'. The resulting tsunami caused nuclear accidents, primarily the level 7 meltdowns at 3 reactors of the Fukushima Nuclear Power Plant."

    },
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
    location: "Southern Alaska",
    casualties: "131",
    damageCost: "$2.5 billion (adj. for inflation)",
    desc: {
      paragraph1: "Also known as the Great Alaskan earthquake and the Good Friday earthquake, this earthquake lasted 4 minutes and 38 seconds, and remains the most powerful earthquake recorded in North American history. Six hundred miles of fault ruptured at once and moved up to 18 metres, releasing about 500 years of stress buildup. A 82 metre high tsunami destroyed the village of Chenega, and post-quake tsunamis severely affected several Alaskan communities, as well as people and property in British Columbia, Washington, Oregon and California. Hawaii and Japan were also affected by tsunami damage."
    },
    time: -181859024000,
    mag: 9.2,
    coordinates: [
      60.908,
      -147.339,
      25
    ],
    tsunami: {
      height: "67m"
    }
  },
  {
    title: "2010 Chile Earthquake",
    location: "Offshore Bio-Bio, Chile",
    casualties: "550",
    damageCost: "$17.5-35 billion (adj. for inflation)",
    desc: {
      paragraph1: "This was the strongest earthquake affecting Chile since the magnitude 9.5 1960 Valdivia earthquake. The instense shaking of this lasted for about 3 minutes, and was felt stronly in six Chilean regions which together make up about 80% of the country's population. It triggered a tsunami which devastated several coastal towns in south-central Chile, and Tsunami warnings were issues in 53 countries. The wave caused an estimated $66.7 million damage to the Japanese fisheries business.",
      paragraph2: "Chile has been at a convergent plate boundary that generates megathrust earthquakes since the Paleozoic Era. As such, the Chilean coast has suffered many megathrust earthquakes along this plate boundary, including the strongest earthquake ever measured, in 1960."
    },
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
    location: "Eastern Xizang-India border region",
    casualties: "4,800",
    damageCost: "$270 million (adj. for inflation)",
    desc: {
      paragraph1: "This earthquake occurred in the rugged mountainous areas between the Himalayas and the Hengduan Mountains, and had devastating effects in both India and Tibet. It was the sixth largst earthquake of the 20th century, and is the largest known earthquake to have not been cause by an oceanic subduction. Instead, this quake was caused by two continental plates colliding.",
    },
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
    location: "Andreanof Islands, Aleutian Islands, Alaska",
    casualties: "No Casualties",
    damageCost: "$46.3 million (adj. for inflation)",
    desc: {
      paragraph1: "This occurred along the  Aleutian Trench, the convergent plate boundary that separates the Pacific Plate and the North American Plates near Alaska. A basin wide tsunami followed, with effects felt in Alaska and Hawaii.",
      paragraph2: "The earthquake caused severe damage to roads and buildings on Adak Island, but no lives were lost. In Hawaii, damages was much more extensive. On the island of Kauai, the wave height reached 16 metres. The effects were considered about twice as strong as that of the 1946 Aleutian Islands earthquake and tsnami."

    },
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
    location: "Northern Sumatra, Indonesia",
    casualties: "915-2000",
    damageCost: "No Estimate",
    desc: {
      paragraph1: "This earthquake lasted for about 2 minutes, and there were 8 major aftershocks in the following 24 hours. On the Indonesian island of Nias, hundreds of buildings were destroyed and accounted for the majority of the death toll. The earthquake was felt strongly across the island of Sumatra and caused widespread power outages.",
      paragraph2: "This event caused panic in the region, having already been devasted by the Boxing Day earthquake and tsunami in 2004, but this earthquake generated a relatively small tsunami that caused limited damage. The effects were felt as far away as Bangkok, Thailand, over 1,000km away."
    },
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
    location: "Off the West Coast of Northern Sumatra",
    desc: {
      paragraph1: ""
    },
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
    location: "Kuril Islands",
    desc: {},
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
    location: "1km NNW of Reseda, CA",
    desc: {},
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
    location: "Off the East Coast of the Kamchatka Peninsula, Russia",
    casualties: "2,336",
    damageCost: "$17 million",
    desc: {},
    time: -541407690000,
    mag: 9.1,
    coordinates: [
      52.623,
      159.779,
      21.6
    ]
  },
  {
    title: "1994 Bolivia Earthquake",
    location: "La Paz, Bolivia",
    desc: {},
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
    location: "Eastern Sichuan, China",
    desc: {},
    time: 1210573681000,
    mag: 8.0,
    coordinates: [
      31.002,
      103.322,
      19
    ]
  },
  {
    title: "2015 April Nepal Earthquake",
    location: "38km E of Khudi, Nepal",
    desc: {},
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
    location: "Western Turkey",
    desc: {},
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
    location: "Haiti region",
    desc: {},
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
    location: "Gujarat, India",
    desc: {},
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
    location: "Southern Sumatra, Indonesia",
    desc: {},
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
    location: "Southern Sumatra, Indonesia",
    desc: {},
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
    location: "Pakistan",
    desc: {},
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
    location: "Hindu Kush region, Afghanistan",
    desc: {},
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
    location: "Hindu Kush region, Afghanistan",
    desc: {},
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
    location: "Banda Sea",
    desc: {},
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
    location: "Southeastern Iran",
    desc: {},
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
    location: "Java, Indonesia",
    desc: {},
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
    location: "Southern Qinghai, China",
    desc: {},
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
    location: "Boumerdès, Algeria",
    desc: {},
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
    location: "Southern Sumatra, Indonesia",
    desc: {},
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
    location: "South Island of New Zealand",
    desc: {},
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
    location: "Niigata Prefecture, Japan",
    desc: {},
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
    location: "Central Italy",
    desc: {},
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
    location: "2km WSW of Kasina, Croatia",
    desc: {},
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
    location: "Near the coast of Central Peru",
    desc: {},
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
    location: "15km WSW of Mamurras, Albania",
    desc: {},
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
    location: "27km SSE of Muisne, Ecuador",
    desc: {},
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
    location: "61km NNE of Awaran, Pakistan",
    desc: {},
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
    location: "14km NNE of Néon Karlovásion, Greece",
    desc: {},
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
    location: "11km W of Wenping, China",
    desc: {},
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
    location: "Near the coast of Southern Peru",
    desc: {},
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
    location: "Kuril Islands",
    desc: {},
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
    location: "Hokkaido, Japan",
    desc: {},
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
    location: "101km SSW of Tres Picos, Mexico",
    desc: {},
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
    location: "94km NW of Iquique, Chile",
    desc: {},
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
    location: "Samoa Islands Region",
    desc: {},
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
    location: "Central Alaska",
    desc: {},
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
    location: "Bio-Bio, Chile",
    desc: {},
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
    location: "Michoacan, Mexico",
    desc: {},
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
    location: "Northern Xinjiang, China",
    desc: {},
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
    location: "Ancash region, Peru",
    desc: {},
    time: 13033419000,
    mag: 7.9,
    coordinates: [
      -9.183,
      -78.737,
      45
    ]
  },
  {
    title: "1944 San Juan Earthquake",
    location: "San Juan, Argentina",
    desc: {},
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
    location: "Eastern Turkey",
    desc: {},
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
    location: "Guatemala",
    desc: {},
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
    location: "Northern Iran",
    desc: {},
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
    location: "Central Iran",
    desc: {},
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
    location: "Western Sichuan, China",
    desc: {},
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
    location: "Morocco",
    desc: {},
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
    location: "Nicaragua",
    desc: {},
    time: 93940184000,
    mag: 6.3,
    coordinates: [
      12.184,
      -86.223,
      10
    ]
  },
  {
    title: "1556 Shaanxi earthquake",
    location: "Shaanxi, China",
    casualties:	"830,000",
    desc: {
        paragraph1: "Almost impossible to measure the damage cost in modern terms, property damage would have been incalculable—an entire region of inner China had been destroyed and an estimated 60% of the region's population died."
    },  
    time: -13062697200000, 
    mag: 8,
    coordinates: [
      34.30,
      109.18,
      0
    ]
  },
  {
    title: "1976 Tangshan earthquake",
    location: "Hebei, China",
    casualties:	"242,000",
    desc: {
        paragraph1: "Also known as the Great Tangshan earthquake. In minutes, eighty-five percent of the buildings in Tangshan collapsed or were unusable, all services failed, and most of the highway and railway bridges collapsed or were seriously damaged.",
        paragraph2: "At least 242,000 people died (some have said three times that), making this the third (or possibly second) deadliest earthquake in recorded history."
    },  
    time: 207344575000,
    mag: 7.6,
    coordinates: [
      39.63,
      118.44,
      12.2
    ]
  },
  {
    title: "1920 Haiyuan earthquake",
    location: "Ningxia–Gansu, China",
    casualties:	"273,400",
    desc: {
        paragraph1: "About 230 km (140 mi) of surface faulting was seen from Lijunbu through Ganyanchi to Jingtai. There were more than 50,000 landslides in the epicentral area and ground cracking was widespread.",
        paragraph2: "Some rivers were dammed, others changed course. This earthquake was followed by a series of aftershocks for three years."
    },  
    time: -1547639645000,
    mag: 7.8,
    coordinates: [
      36.50,
      105.70,
      0
    ]
  },
  {
    title: "526 Antioch earthquake",
    location: "Antioch, Byzantine Empire (modern-day Turkey)",
    casualties:	"250,000",
    desc: {
        paragraph1: "The earthquake caused severe damage to many of the buildings in Antioch, including Constantine's great octagonal church Domus Aurea built on an island in the Orontes River. ",
        paragraph2: "Only houses built close to the mountain are said to have survived. Most of the damage however, was a result of the fires that went on for many days in the immediate aftermath of the earthquake, made worse by the wind.",
        paragraph3: "This earthquake was followed by a series of aftershocks for three years."
    },  
    time: -45556084800000,
    mag: 7,
    coordinates: [
      36.23,
      36.12,
      0
    ]
  },  
  {
    title: "1138 Aleppo earthquake",
    location: "Aleppo, Syria",
    casualties:	"230,000",
    desc: {
        paragraph1: "In the mid-twelfth century, northern Syria was a war-ravaged land. The worst hit area was Harem, where Crusaders had built a large citadel. Sources indicate that the castle was destroyed and the church fell in on itself.",
        paragraph2: "The fort of Atharib, then occupied by Muslims, was destroyed. The citadel also collapsed, killing 600 of the castle guard, though the governor and some servants survived, and fled to Mosul.",
        paragraph3: "The residents of Aleppo, a large city of several tens of thousands during this period, had been warned by the foreshocks and fled to the countryside before the main earthquake."
    },  
    time: -26230910400000,
    mag: 7.1,
    coordinates: [
      36.13,
      37.10,
      0
    ]
  },  
  {
    title: "1303 Hongdong earthquake",
    location: "	Shanxi, China",
    casualties:	"200,000",
    desc: {
        paragraph1: "Because of the time period in which it struck, very little is known about the nature of the earthquake, however devastation was widespread throughout the area struck by the earthquake.",
        paragraph2: "In the nearby towns of Zhaocheng and Hongdong, every major temple and school building collapsed and over half the towns' populations perished. Every building in Huo county, Shanxi was destroyed."
    },  
    time: -21030753600000,
    mag: 8.0,
    coordinates: [
      36.30,
      111.70,
      0
    ]
  },  
  {
    title: "856 Damghan earthquake",
    location: "Damghan, Iran",
    casualties:	"200,000",
    desc: {
        paragraph1: "The area of significant damage extended along the Alborz for about 350 kilometres (220 mi).Šahr-e Qumis was so badly damaged that it appears to have been abandoned following the earthquake. ",
        paragraph2: "The effects of the earthquake were still visible in the area between Bastam and Damghan 46 years later."
    },  
    time: -35123630400000,
    mag: 7.9,
    coordinates: [
      36.20,
      54.30,
      0
    ]
  }
])




