import React from 'react'
import {Box, Typography} from '@mui/material'
import Header from './header';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import {Button} from '@mui/material';
import {useTheme} from '@mui/material';
import { tokens } from './theme';
import StatBox from './statBox';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon  from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon  from '@mui/icons-material/Traffic';
import LineChart from './lineChart';


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
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]}  display='flex' justifyContent='center' alignItems='center'>
                    <StatBox title='12,567' subtitle='Emails Sent' icon={<EmailIcon sx={{color:colors.greenAccent[700]}}/>} progress='0.65' increase='12,345'/>


                </Box>
                    <Box gridColumn='span 3' backgroundColor={colors.primary[400]}  display='flex' justifyContent='center' alignItems='center'>
                    <StatBox title='34,597' subtitle='Sales Obtained' icon={<PointOfSaleIcon sx={{color:colors.greenAccent[700]}}/>} progress='0.95' increase='89,345'/>


                </Box>
                    <Box gridColumn='span 3' backgroundColor={colors.primary[400]}  display='flex' justifyContent='center' alignItems='center'>
                    <StatBox title='2,786' subtitle='New Clients' icon={<PersonAddIcon sx={{color:colors.greenAccent[700]}}/>} progress='0.35' increase='435'/>


                </Box>

                    <Box gridColumn='span 3' backgroundColor={colors.primary[400]}  display='flex' justifyContent='center' alignItems='center'>
                    <StatBox title='127,703' subtitle='Traffic received' icon={<TrafficIcon sx={{color:colors.greenAccent[700]}}/>} progress='0.45' increase='82,375'/>


                </Box>
                
                    <Box gridColumn='span 8' backgroundColor={colors.primary[400]}  display='flex' gridRow='span 2'>
                        <Box mt='25px' p="0 30px" display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
Revenue Generated
                            </Typography>
                            <Typography variant='h3' fontWeight='500' color={colors.greenAccent[500]}>
                                 59,342,32


                            </Typography>

                        </Box>
                        <Box>
                    <LineChart isDashboard='true'/>
                    </Box>


                </Box>

            </Box>
        </Box>
    )
}

export default Dashboard
