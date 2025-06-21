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
                
                    <Box gridColumn='span 8' backgroundColor={colors.primary[400]}   gridRow='span 2'>
                        <Box mt='25px' p="0 30px"  display='flex' justifyContent='space-between'>
                            <Box>
                            <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                             Revenue Generated
                            </Typography>
                            <Typography variant='h3' fontWeight='500' color={colors.greenAccent[500]}>
                                 59,342,32
                            </Typography>
                             </Box>
                            
                    <Box>
                              <Button >
              
                    <DownloadOutlinedIcon sx={{color:colors.greenAccent[500]}} />
                  
                </Button>

                </Box>

                        </Box>
                        <Box height='200px' flex='1'>
                            <LineChart/>
                        </Box>
                       


                </Box>
                <Box gridColumn='span 4'>
                
                <Box  backgroundColor={colors.primary[400]}  p="10px 10px" height='40px' mb='8px' >
                    <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                         Recent Transactions
                    </Typography>
                </Box>

                 <Box backgroundColor={colors.primary[400]}  p="10px 10px" height='60px' display='flex' alignItems='center' justifyContent='space-between' mb='8px'>
                    <Box>
                    <Typography variant='h5' fontWeight='600' color={colors.greenAccent[500]}>
                         0f12345
                    </Typography>
                    <Typography variant='h6' fontWeight='300' color={colors.grey[100]}>
                        Tom halsey
                    </Typography>
                    </Box>
                    <Box>
                     <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                         2025-02-16
                    </Typography>
                    </Box>
                    <Box>
                         <Button 
                     sx={{backgroundColor:colors.greenAccent[300], color:colors.grey[100]}}>
                    $4,123
                    </Button>
                    </Box>

                    

                </Box>

                 <Box backgroundColor={colors.primary[400]}  p="10px 10px" height='60px' display='flex' alignItems='center' justifyContent='space-between' mb='8px'>
                    <Box>
                    <Typography variant='h5' fontWeight='600' color={colors.greenAccent[500]}>
                         1f0980df
                    </Typography>
                     <Typography variant='h6' fontWeight='300' color={colors.grey[100]}>
                         gig Hadid
                    </Typography>

                    </Box>
                    <Box>
                     <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                         2025-06-23
                    </Typography>
                    </Box>
                    <Box>
                         <Button 
                     sx={{backgroundColor:colors.greenAccent[300], color:colors.grey[100]}}>
                    $56,123
                    </Button>
                    </Box>
                </Box>

                 <Box backgroundColor={colors.primary[400]}  p="10px 10px" height='60px' display='flex' alignItems='center' justifyContent='space-between' mb='8px'>
                    <Box>
                    <Typography variant='h5' fontWeight='600' color={colors.greenAccent[500]}>
                         fg120pfg
                    </Typography>
                     <Typography variant='h6' fontWeight='300' color={colors.grey[100]}>
                         Kendall kee
                    </Typography>

                    </Box>
                    <Box>
                     <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                         2024-01-23
                    </Typography>
                    </Box>
                    <Box>
                         <Button 
                     sx={{backgroundColor:colors.greenAccent[300], color:colors.grey[100]}}>
                    $96,103
                    </Button>
                    </Box>
                </Box>

             <Box backgroundColor={colors.primary[400]}  p="10px 10px" height='50px' display='flex' alignItems='center' justifyContent='space-between' mb='8px'>
                    <Box>
                    <Typography variant='h5' fontWeight='600' color={colors.greenAccent[500]}>
                         f67hji5
                    </Typography>
                     <Typography variant='h6' fontWeight='300' color={colors.grey[100]}>
                         kylie jenner
                    </Typography>

                    </Box>
                    <Box>
                     <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                         2024-16-23
                    </Typography>
                    </Box>
                    <Box>
                         <Button 
                     sx={{backgroundColor:colors.greenAccent[300], color:colors.grey[100]}}>
                    $86,173
                    </Button>
                    </Box>
                </Box>
</Box>
            
                

            </Box>
        </Box>
    )
}

export default Dashboard
