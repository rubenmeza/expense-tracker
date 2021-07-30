import './ChartBar.css'

const ChartBar = (props) => {
  const {
    value,
    label,
    max,
  } = props

  let barFillheight = '0%'

  if (max > 0) {
    barFillheight = Math.round((value / max) * 100) + '%'
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div 
          className='chart-bar__fill' 
          style={{ height: barFillheight }}>
        </div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  )
}

export default ChartBar