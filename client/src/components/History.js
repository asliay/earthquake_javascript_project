import HistoricalMap from "./HistoricalMap";

const History = ({quakeInfo, historicalQuakes}) => {
    
    return (
        <>
        <h1>Appease the giant catfish!*</h1>
        {quakeInfo.map((quakeInfo, index) => (
            <p>{quakeInfo.historical.funFacts.numOfQuakesFact}<br/><br/>
             {quakeInfo.historical.funFacts.richterScaleFact}<br/><br/>
              {quakeInfo.historical.funFacts.momentMagScaleFact}<br/><br/>
              {quakeInfo.historical.funFacts.largestMagFact}<br/><br/>
             {quakeInfo.historical.funFacts.mag10Fact}<br/><br/>
              {quakeInfo.historical.funFacts.ringOfFireFact}<br/><br/>
              {quakeInfo.historical.funFacts.moonFact}<br/><br/>
              {quakeInfo.historical.funFacts.mythologyFact}
              </p>
            )
            )}
        <div>

        
        <HistoricalMap historicalQuakes={historicalQuakes} />
        </div>
        </>
    )
}

export default History;