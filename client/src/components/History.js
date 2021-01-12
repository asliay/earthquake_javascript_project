import HistoricalMap from "./HistoricalMap";

const History = ({quakeInfo, historicalQuakes}) => {
    const quakeInfoArray = quakeInfo.map(info => info.funFacts)
    return (
        <>
        {quakeInfoArray}
        <HistoricalMap historicalQuakes={historicalQuakes} />
        </>
    )
}

export default History;