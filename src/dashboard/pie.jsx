import React from 'react'
import { Box } from '@mui/material'
import Piechart from './piechart'
import Header from './header'

function Pie() {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="The representaion of Our Sales"/>
            <Box>
                <Piechart/>

            </Box>
             
        </Box>
        
    )
}

export default Pie
