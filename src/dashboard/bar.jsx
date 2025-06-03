import React from 'react'
import Barchar from './barchar'
import Header from './header'
import { Box } from '@mui/material'


function  Bar () {
    return (
        <Box m='20px'>
         <Header title="Bar Chart" subtitle="Representation of Our Sales"/>  
         <Box height='75vh'>
            <Barchar/>

         </Box> 





        </Box>
    )
}

export default  Bar 
