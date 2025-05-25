import React, { useState } from 'react'
import {ProSidebar, Menu ,MenuItem} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import {Box,IconButton,Typography, useTheme}  from '@mui/material'
import {tokens} from './theme'
import {Link} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MaplineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import profile  from '../assets/me.jpg'
function Item({title,to, icon,selected, setIsSelected,colors}){
 return(
    <MenuItem active={selected===title} style={{color:colors.grey[100]}} onClick={()=>{
setIsSelected(title)
    } } icon={icon}>   <Typography>{title}</Typography>
    <Link to={to}/>
    </MenuItem>
 )
}

function Sidebar() {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const [isCollapsed,setIsCollapsed]=useState(false);
    const [selected,setIsSelected]=useState('Dashboard')
    

    return (
        

        <Box sx={{
            " & .pro-sidebar-inner":{
                background:`${colors.primary[600]} !important`
            },
            "& .pro-icon-wrapper":{
                backgroundColor:'transparent !important'
            },
            "& .pro-inner-item":{
                padding:"5px 35px 5px 20px"
            },
            "& .pro-inner-item:hover":{
                color:"#868dfb !important"
            },
            "& .pro-menu-item.active":{
                color:"#6870fa !important"
            }

        }}>
<ProSidebar collapsed={isCollapsed}>
<Menu>
    <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlinedIcon/>:undefined}>
    {!isCollapsed && (
        <>
        <Box display='flex' justifyContent='space-between'>
            <Typography variant='h4' color={colors.grey[500]}>
                ADMINS
            </Typography>
            <IconButton onClick={()=>setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlinedIcon/>:undefined}>
                <MenuOutlinedIcon/>
            </IconButton>
        </Box>
    </>)}</MenuItem>

</Menu>
{!isCollapsed && (

 <Box>
    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' >
    <img
    src={profile}
    width='100px'
    height='100px'
    style={{borderRadius:'50%'}}
    />
   <Box textAlign='center'>
     <Typography variant='h2' color={colors.grey[100]} sx={{ mt: 2 }} >
Melissa S.
    </Typography>
    <Typography variant='h6' color={colors.greenAccent[400]}> 
        The superManager
    </Typography>
</Box>
</Box> 
    

 </Box>
)}
<Box>
<Item title='Dashboard' to='/' icon={<HomeOutlinedIcon/>} selected={selected} setIsSelected={setIsSelected} colors={colors} />

</Box>
</ProSidebar>
   
 </Box>
    
    )}

export default Sidebar
