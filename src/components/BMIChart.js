import React from 'react'
import GaugeChart from 'react-gauge-chart'

const BMIChart = ({percentage}) => {
    const chartStyle = {
        width: "500px",
    };
  return (
    <div>
      <GaugeChart nrOfLevels={3} colors={["#FFFF00", "#228B22", "#FF0000"]}
 hideText={true} style={chartStyle} percent={percentage} ></GaugeChart>
    </div>
  )
}

export default BMIChart
