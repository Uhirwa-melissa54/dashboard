import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { pieChartData } from '../data/piechart'
import { tokens } from './theme'
import { useTheme } from '@emotion/react'



function Piechart() {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return (

    <div style={{ height: 400, width: 400 }}>
         <ResponsivePie /* or Pie for fixed dimensions */
        data={pieChartData}
        
        theme={{
            legends:{
                text:{
                    fill:colors.grey[100]
                }
            },
           
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        enableArcLabels={false}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    />
    </div>
        
    )
}

export default Piechart
