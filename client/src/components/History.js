import {Fragment, useState} from 'react';
import HistoricalChart from "./HistoricalChart";
import HistoricalMap from "./HistoricalMap";
import QuakeDetails from './QuakeDetails'

const History = ({historicalQuakes}) => {

    const [selectedQuake, setSelectedQuake] = useState(null)
    
    return (
        <>   
        <div className="history-info-container">
            <div className="history-info">
                <h4>Historical Quakes</h4>
                <p>Click a marker on the map to learn more!</p>
            <QuakeDetails selectedQuake={selectedQuake} />
            </div>
            <HistoricalMap historicalQuakes={historicalQuakes} quakeSelected={setSelectedQuake} />
        </div>
        <div>
            <HistoricalChart historicalQuakes={historicalQuakes} />
        </div>
     </>
    )
}

export default History;