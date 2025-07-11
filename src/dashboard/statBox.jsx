import React from 'react'
import { useTheme } from '@emotion/react'
import { tokens } from './theme'
import Progress from './progress'
import { Box } from '@mui/material'
import {Typography} from '@mui/material'

function StatBox({title,subtitle,icon,progress,increase}) {
    const theme=useTheme()
        const colors=tokens(theme.palette.mode);
    return (
        
        <Box width='100%' m='0 30px'> 
        <Box display ='flex' justifyContent="space-between">
            <Box>
                {icon}
                <Typography variant='h4' fontStyle='bold' sx={{color:colors.grey[100]}}>
                    {title}
                </Typography>
            </Box>
           
            <Box>
<Progress progress={progress}/>
            </Box>

        </Box>
        <Box display ='flex' justifyContent="space-between">
            <Typography variant='h5' sx={{color:colors.greenAccent[500]}}>
                {subtitle}
            </Typography>
            <Typography variant='h5' fontStyle='italic' sx={{color:colors.greenAccent[600]}}>
{increase}
            </Typography>
        </Box>



        </Box>
    )
}

export default StatBox
