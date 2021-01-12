import HistoricalMap from "./HistoricalMap";

const History = ({quakeInfo, historicalQuakes}) => {
    
    return (
        <div>
            <p>numOfQuakesFact: `It is estimated that there are 500,000 detectable earthquakes each year, 100,00 of which can be felt.`,
          richterScaleFact: `The Richter Scale, also known as the Magnitude Scale is a measure of the strength of earthquakes, developed by Charles F. Richter in 1935.`,
          momentMagScaleFact: `Due to limitations of the Richter Scale, the Moment Magnitude Scale was defined in 1979 to measure an earquakes magnitude, based on its seismic movement. It has become the standard scale used by scientific bodies for reporting larger quakes.`,
          largestMagFact: `The largest earthquake ever recorded occurred on May 22, 1960 in Chile on a fault almost 1000 miles long. It reached a magnitude of 9.5.`,
          mag10Fact: `While technicaly possible, a magnitude 10 earthquake is very unlikely. The magnitude of an earthquake is related to the
          length of the fault-line where it occurs. The longer the fault, the larger the earthquake. A fault would need to extend around most of the globe in order to produce a magnitude 10 earthquake, and no such fault is known to exist.`,
          ringOfFireFact: `The 'Ring of Fire' is a region around the rim of the Pacific Ocean where many volcanic eruptions and earthquakes occur. It is a horseshoe-shaped area around 40,000km long and up to 500km wide.`,
          moonFact: `Moonquakes (earthquakes on the moon) were first discovered by Apollo astronauts. They happen less frequently, and have a lower magnitude than normal earthquakes.
          Between 1972 and 1977, 28 shallow moonquakes were observed.`</p>
        
        <HistoricalMap historicalQuakes={historicalQuakes} />
        </div>
    )
}

export default History;