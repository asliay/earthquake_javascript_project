import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const RealtimeChart = ({realtimeQuakes}) => {
  // function to map through data and return an array of all magnitudes.
  const magnitudes = realtimeQuakes.map(quake => quake.properties.mag)

  // function to map through data and return array of data objects returned as date/time strings.
  const dates = realtimeQuakes.map(quake => (new Date(quake.properties.time).toDateString()))

  // sets chart info and styling, using previously defined arrays from above, to be passed to chart <HighchartsReact/> component below.
  const options = {
    title: false,
    yAxis: {
      title: {
        style: {
          color: '#FFFFFF'
        },
        text: 'Magnitudes'
      },
      lineColor: '#FFFFFF',
      lineWidth: 2,
      legend: {
        enabled: false
      },
      labels: {
        style: {
          color: '#FFFFFF'
        }
      }
    },
    plotOptions: {
      series: {
          color: '#FFFFFF'
      }
  },
    xAxis: {
      labels: {
        style: {
          color: '#FFFFFF'
        }
      },
      lineColor: '#FFFFFF',
      lineWidth: 2,
      categories: dates,
    },
    chart: {
      gridLineColor: '#FFFFFF',
      backgroundColor: '#468eaf',
    },
    legend: {
      color: '#FFFFFF',
      enabled: false
    },
    series: [{
      type: 'line',
      name: 'Magnitude',
      data: magnitudes
    }]
  }

  return(
    <div className="chart-box">
    <p className="header2">Magnitudes of all earthquakes over M2.5 in the last 7 days:</p>
    <HighchartsReact 
      highcharts={Highcharts}
      options={options}/>
    </div>
  )
}

export default RealtimeChart;