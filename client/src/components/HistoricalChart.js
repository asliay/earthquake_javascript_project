import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HistoricalChart = ({historicalQuakes}) => {
  // function to help sort quakes by date
  const compareTime = function(a,b) {
    if (a.time > b.time){
        return 1;
    }
    if (a.time < b.time)
        return -1;
  }
  // sorts quake data by date
  const sortedByDate = [...historicalQuakes].sort(compareTime);
  // maps to return array of year strings
  const quakeYears = sortedByDate.map(quake => (new Date(quake.time).getFullYear()))
  // maps to return array of magnitudes
  const historicMags = sortedByDate.map(quake => quake.mag)


  // sets chart info and styling, using previously defined arrays from above, to be passed to chart <HighchartsReact/> component below.
  const options = {
    title: false,
    navigation: {
      menuStyle: {
        enabled: true,
        background: 'none'
      }
    },
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
      categories: quakeYears,
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
      data: historicMags
    }]
  }
  return (
    <div className="chart-box">
    <h4>Magnitudes of Historical Earthquakes</h4>
    <HighchartsReact 
      highcharts={Highcharts}
      options={options}/>
    </div>
  )
}

export default HistoricalChart;