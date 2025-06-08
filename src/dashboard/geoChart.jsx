import React from 'react'
import GeographyChart from './geography'
import Header from './header'
import { Box } from '@mui/material'


function  GeoChart() {
    return (
        <Box m='20px'>
         <Header title="Geography Map" subtitle="Representation of Our Sales in different areas"/>  
         <Box height='75vh'>
            <GeographyChart/>

         </Box> 





        </Box>
    )
}

export default  GeoChart 
