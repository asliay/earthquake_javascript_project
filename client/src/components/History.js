import {Fragment, useState} from 'react';
import HistoricalChart from "./HistoricalChart";
import HistoricalMap from "./HistoricalMap";
import QuakeDetails from './QuakeDetails'

const History = ({historicalQuakes}) => {

    const [selectedQuake, setSelectedQuake] = useState(null)
    
    return (
        <>   
        <div className="history-info">
            <QuakeDetails selectedQuake={selectedQuake} />
            <HistoricalMap historicalQuakes={historicalQuakes} quakeSelected={setSelectedQuake} />
        </div>
        <div>
            <HistoricalChart historicalQuakes={historicalQuakes} />
        </div>
     </>
    )
}

export default History;