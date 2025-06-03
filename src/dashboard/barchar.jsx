 import React from 'react'
 import { barchartData } from '../data/barchar'
 import { ResponsiveBar } from '@nivo/bar'
import { useTheme } from '@emotion/react'
import { tokens } from './theme'
 
 function Barchar() {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode)
    return (
        <div style={{ height: '500px', width: '100%' }}>
             <ResponsiveBar
                data={barchartData}
                theme={{
                    axis:{
                        domain:{
                            line:{
                                stroke:colors.grey[100]
                            }
                        },
                        legend:{
                        text:{
                            fill:colors.grey[100],
                            fontSize:15
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

                    },
                   
                    },
                     legends:{
                        text:{
                            fill:colors.grey[100]
                        }
                         
                          
                    },
                    
                }}
                keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                enableLabel={false} 
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.95,
                        symbolSize: 20,
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
        
    )
 }
 
 export default Barchar
 