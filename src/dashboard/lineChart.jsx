import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { lineData } from '../data/lineData'
import { tokens } from './theme'
import { useTheme } from '@emotion/react'

function LineChart({isDashboard='false'}) {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
     
    return (


        // <div style={{ height: '500px', width: '100%' }}>

         <ResponsiveLine
  data={lineData}
  curve='cardinal'
   enableGridX={false}
  enableGridY={false}
  theme={{
    axis: {
      domain: {
        line: {
          stroke: colors.grey[100],
        },
      },
      legend: {
        text: {
          fill: colors.grey[100],
          fontSize: isDashboard ? 12 : 20,  // smaller font for dashboard
        },
      },
      ticks: {
        line: {
          stroke: colors.grey[100],
          strokeWidth: 1,
        },
        text: {
          fill: colors.grey[100],
          fontSize: isDashboard ? 10 : 14, // smaller font for dashboard
        },
      },
    },
    legends: {
      text: {
        fill: colors.grey[100],
        fontSize: isDashboard ? 10 : 14,
      },
    },
  }}
  margin={{
    top: 20,
    right: isDashboard ? 20 : 110,
    bottom: isDashboard ? 30 : 50,
    left: isDashboard ? 30 : 60,
  }}
  yScale={{
    type: 'linear',
    min: 'auto',
    max: 'auto',
    stacked: true,
    reverse: false,
  }}
  axisBottom={{
    legend: isDashboard ? undefined : 'Transportation',
    legendOffset: 36,
    tickRotation: isDashboard ? 45 : 0, // helps avoid overlap
  }}
  axisLeft={{
    legend: isDashboard ? undefined : 'Count',
    legendOffset: -40,
  }}
  pointSize={isDashboard ? 4 : 10}
  pointColor={{ theme: 'background' }}
  pointBorderWidth={1}
  pointBorderColor={{ from: 'seriesColor' }}
  pointLabelYOffset={-12}
  enableTouchCrosshair={true}
  useMesh={true}
  legends={[
    {
      anchor: 'bottom-right',
      direction: 'column',
      translateX: 100,
      itemWidth: 80,
      itemHeight: 22,
      symbolShape: 'circle',
    },
  ]}
/>

    // </div>
        
    )
}

export default LineChart
