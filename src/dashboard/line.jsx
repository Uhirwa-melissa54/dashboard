import React from 'react'
import { Box } from '@mui/material'
import Header from './header'
import LineChart from './lineChart'

function Line() {
    return (

        <Box m="20px">
            <Header title="Line  Chart" subtitle="The representaion Of Our Sales"/>
            <Box height='75vh'>

<LineChart/>


            </Box>
 
        </Box>
        
    )
}

export default Line
