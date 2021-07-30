import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
  const {
    dataPoints
  } = props

  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value)
  const max = Math.max(...dataPointValues)

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} 
          value={dataPoint.value} 
          max={max} 
          label={dataPoint.label}
        />
      ))}
    </div>    
  )
}

export default Chart