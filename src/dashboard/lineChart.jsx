import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { lineData } from '../data/lineData'
import { tokens } from './theme'
import { useTheme } from '@emotion/react'

function LineChart() {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return (


        <div style={{ height: '500px', width: '100%' }}>

          <ResponsiveLine /* or Line for fixed dimensions */
        data={lineData}
        theme={{
            axis:{
                domain:{
                    line:{
                        fill:colors.grey[100]
                    }
                    
                },
                legend:{
                    text:{
                        fill:colors.grey[100],
                        fontSize:20
                    }
                },
                ticks:{

                    line:{
                        stroke:colors.grey[100],
                        strokeWidth:1
                    },
                    
                        text:{
                            fill:colors.grey[100]
                        }
                    
                }
            },

           legends:{
            text:{
                fill:colors.grey[100]
            }

           } 

        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: 'Transportation', legendOffset: 36 }}
        axisLeft={{ legend: 'Count', legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
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
                symbolShape: 'circle'
            }
        ]}
    />
    </div>
        
    )
}

export default LineChart
