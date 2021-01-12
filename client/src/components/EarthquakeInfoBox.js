
const EarthquakeInfoBox = ({quakeInfo}) => {


    return(
        <>
        <h1>What is an earthquake?</h1>
            {quakeInfo.map((quakeInfo, index) => (
            <p>{quakeInfo.historical.funFacts.numOfQuakesFact}<br/><br/>
            {quakeInfo.historical.funFacts.richterScaleFact}<br/><br/>
            {quakeInfo.historical.funFacts.momentMagScaleFact}</p>
            )
            )}
            <p>This is the info box, hooray!</p>

            <p>The hypocenter of an earthquake is the location beneath the earth’s surface where the rupture of the fault begins.</p>
            <p>The epicenter of an earthquake is the location directly above the hypocenter on the surface of the earth. An earthquake is felt the strongest at this point on the surface.</p>
            <p>Soil liquefaction occurs when, because of the shaking, water-saturated granular material (such as sand) temporarily loses its strength and transforms from a solid to a liquid. Soil liquefaction may cause rigid structures, like buildings and bridges, to tilt or sink into the liquefied deposits. For example, in the 1964 Alaska earthquake, soil liquefaction caused many buildings to sink into the ground, eventually collapsing upon themselves.</p>
            <p>There are about 500,000 earthquakes a year around the world, as detected by sensitive instruments. About 100,000 of those can be felt, and 100 or so cause damage each year. Each year the southern California area alone experiences about 10,000 earthquakes, most of them not felt by people.</p>
            <p>The magnitude of an earthquake is a measured value of the earthquake size. The magnitude is the same no matter where you are, or how strong or weak the shaking was in various locations. The intensity of an earthquake is a measure of the shaking created by the earthquake, and this value does vary with location.</p>

        </>
    )
}

export default EarthquakeInfoBox;