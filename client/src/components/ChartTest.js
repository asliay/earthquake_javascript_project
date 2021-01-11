import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const ChartTest = ({realtimeQuakes}) => {
  // function to map through data and return an array of all magnitudes.
  
  const magnitudes = realtimeQuakes.map(quake => quake.properties.mag)
  // function to map through data and return array of data objects returned as date/time strings.
  const dates = realtimeQuakes.map(quake => (new Date(quake.properties.time).toLocaleString()))
  // sorts date array
  const sortedDates = dates.sort()

  // sets chart info, using previously defined arrays from above, to be passed to chart <HighchartsReact/> component below.
  const options = {
    title: {
      text: 'Magnitudes'
    },
    xAxis: {
      categories: sortedDates,
    },
    legend: {
      enabled: false
    },
    series: [{
      type: 'line',
      name: 'Magnitude',
      data: magnitudes
    }]
  }
  return(
    <>
    <h3>A chart showing the magnitudes of all earthquakes over M2.5 in the last 7 days:</h3>
    <HighchartsReact 
      highcharts={Highcharts}
      options={options}/>
    </>
  )
}

export default ChartTest;