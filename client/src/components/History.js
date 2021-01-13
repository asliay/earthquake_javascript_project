import HistoricalMap from "./HistoricalMap";

const History = ({historicalQuakes}) => {
    // function that compares magnitudes for sorting
    const compareMag = function(a,b) {
        if (a.mag > b.mag){
            return -1;
        }
        if (a.mag < b.mag)
            return 1;
    }
    // sortedByMag will be a new array of historicalQuakes sorted by Magnitude
    const sortedByMag = [...historicalQuakes].sort(compareMag);
    // top10ByMag is a new array of the top 10 from sortedByMag
    const top10ByMag = sortedByMag.slice(0, 10)
    
    return (
        <div className="history-info">
        {/* <h1>Appease the giant catfish!*</h1> */}
        <ol>
        <p className="header2">10 Largest Earthquakes of the Last Century:</p>
        {top10ByMag.map(quake => {
            return(
            <>
                <li key={quake._id}>
                    {quake.title} - {quake.location} ({new Date(quake.time).toLocaleDateString()})
                    <p>Magnitude: {quake.mag} | Casualties: {quake.casualties}<br/>Damage Cost: {quake.damageCost}</p>
                </li>
            <hr/>
            </>
            )
        })}
        </ol>

        <HistoricalMap historicalQuakes={historicalQuakes} />
        </div>
    )
}

export default History;