import React from 'react'
import {Box} from '@mui/material'
import Header from './header';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import {Button} from '@mui/material';
import {useTheme} from '@mui/material';
import { tokens } from './theme';

function Dashboard() {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode);
    return (
        <Box m='20px'>
            <Box display='flex' justifyContent='space-between'>
            <Header title='DASHBOARD' subtitle='Welcome to admin dashboard'/>
            <Box>
                <Button 
                sx={{
                    backgroundColor:colors.blueAccent[700],
                    color:colors.grey[100]
                }}>
                    <DownloadOutlinedIcon sx={{mr:'10px'}}/>
                    Download Reports
                </Button>
            </Box>
            </Box>
            <Box display='grid' gridTemplateColumns='repeat(12,1fr)'  gridAutoRows='140px' gap='20px'>
                <Box gridColumn='3' backgroundColor={colors.primary[400]}>

                </Box>

            </Box>
        </Box>
    )
}

export default Dashboard
