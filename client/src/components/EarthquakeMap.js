import Earthquake from "./Earthquake";

const EarthquakeMap = ({realtimeQuakes}) => {
    const earthquakeNodes = realtimeQuakes.map((quake => {
        return(
            <Earthquake quake={quake} key={quake.id} />
        )

    }))


    return(
        <>
        <p>This is the map, BOOYAH!</p>
        {earthquakeNodes}
        </>
    )
}

export default EarthquakeMap;
