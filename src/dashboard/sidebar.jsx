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
import PersonOUtlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MaplineOutlinedIcon from '@mui/icons-material/MapOutlined';
import profile  from '../assets/me.jpg'
function Item({title,to, icon,selected, setIsSelected,colors}){
 return(
    <Link to={to}>
    <MenuItem active={selected===title} style={{color:colors.grey[100]}} onClick={()=>{
setIsSelected(title)
    } } >
    <Box display="flex" alignItems="center">
        {icon}
        <Typography variant="body1"  csx={{ ml: 2 ,color:colors.grey[100]}}>{title}</Typography>   

    
    </Box>

    </MenuItem>
    </Link>
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
            },
             "& .pro-menu-item": {
      listStyle: "none", 
    },
    "& .pro-inner-item a": {
  textDecoration: "none !important",}

        }}>
<ProSidebar collapsed={isCollapsed}>
<Menu>
    <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlinedIcon/>:undefined} >
    {!isCollapsed && (
        <>
        <Box display='flex' justifyContent='space-between' sx={{mt:3}}>
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
    <Typography variant='h6' color={colors.greenAccent[400]} sx={{mb:2}}> 
        The superManager
    </Typography>
</Box>
</Box> 
    

 </Box>
)}
<Box paddingLeft={isCollapsed ? undefined : '10%'}>
<Item title='Dashboard' to='/' icon={<HomeOutlinedIcon/>} selected={selected} setIsSelected={setIsSelected} colors={colors} />
<Typography variant='h6'>
Data
</Typography>
<Item title='Team' to='/team' icon={<PeopleOutlineOutlinedIcon/>} selected={selected} setIsSelected={setIsSelected} colors={colors} />
<Item title='Contancts' to='/contancts' icon={<ContactPageOutlinedIcon/>} selected={selected} setIsSelected={setIsSelected} colors={colors} />
<Item title='Invoices' to='/invoice' icon={<ReceiptOutlinedIcon/>} selected={selected} setIsSelected={setIsSelected} colors={colors} />
<Typography variant='h6'>
Pages
</Typography>
<Item title='Profile' to='/Profile' icon={<PersonOUtlinedIcon/>} selected={selected} setIsSelected={setIsSelected} colors={colors} />
<Item title='Calendar' to='/calendar' icon={<CalendarTodayOutlinedIcon/>} selected={selected} setIsSelected={setIsSelected} colors={colors} />
<Item title='FAQ Page' to='/faq' icon={<HelpOutlineOutlinedIcon/>} selected={selected} setIsSelected={setIsSelected} colors={colors} />
<Typography variant='h6'>
Charts
</Typography>
<Item title='Bar Chart' to='/bar' icon={<BarChartOutlinedIcon/>} selected={selected} setIsSelected={setIsSelected} colors={colors} />
<Item title='Pie chart' to='/pie' icon={<PieChartOutlineOutlinedIcon/>} selected={selected} setIsSelected={setIsSelected} colors={colors} />
<Item title='Line Chart' to='/line' icon={<TimelineOutlinedIcon/>} selected={selected} setIsSelected={setIsSelected} colors={colors} />
<Item title='Geograpy Chart' to='/geography' icon={<MaplineOutlinedIcon/>} selected={selected} setIsSelected={setIsSelected} colors={colors} />
</Box>
</ProSidebar>
   
 </Box>
    
    )}

export default Sidebar
