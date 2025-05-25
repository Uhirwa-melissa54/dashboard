import React from 'react'
import {Box,IconButton,useTheme} from '@mui/material'
import { useContext } from 'react'
import { colorContext,tokens } from './theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

 



function Topbar() {
    const colorMode=useContext(colorContext);
    const theme=useTheme();
    const colors= tokens(theme.palette.mode);
    return (
    <div>
        <Box  display="flex" 
            justifyContent="space-between" 
            alignItems="center" 
            p={2}
            sx={{ backgroundColor: theme.palette.background.default }}>
            <Box sx={{backgroundColor:colors.blueAccent[800], pl:1}}>
                <InputBase  placeholder='Search'/>
                <IconButton>
<SearchIcon/>
                </IconButton>

            </Box>
            <Box>
                <IconButton onClick={colorMode.changeMode}>
                    
{theme.palette.mode==='dark'? <DarkModeOutlinedIcon/>:<LightModeOutlinedIcon/>}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                 <IconButton>
<SettingsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>
               
            </Box>

        </Box>
         
    </div> 
    )
}

export default Topbar
