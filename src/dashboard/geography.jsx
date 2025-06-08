import React from 'react'
import { geoFeatures } from '../data/geoFeatures'
import { ResponsiveChoropleth } from '@nivo/geo'
import { geoData } from '../data/geoDATa'
import { useTheme } from '@emotion/react'
import { tokens } from './theme'

function GeographyChart() {
    const theme=useTheme();
        const colors=tokens(theme.palette.mode)
    return (
         <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
        data={geoData}
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
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ]}
    />
        
    )
}

export default GeographyChart
