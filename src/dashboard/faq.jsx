import React from 'react'
import Header from './header'
import {Box,Typography,useTheme} from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import { tokens } from './theme'


function Faq() {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions'/>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>What is  MUI/MUI Base </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography> MUI stands for Material UI, and it's a React component library that helps you build modern, responsive, and accessible user interfaces faster.

It provides ready-to-use components like:</Typography>
                </AccordionDetails>
            </Accordion>
             <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>What is  DataGrid </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography> A Data Grid is a powerful table component used to display, edit, filter, and manage data in a grid format — like a spreadsheet or database table.

In MUI, the component is called:</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>What is  ProsideBar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography> 
                        react-pro-sidebar (commonly referred to as ProSidebar) is a React component library used to create beautiful, collapsible side navigation menus (sidebars) for web apps.

It helps you easily build responsive, modern dashboards or admin panels with a sidebar on the left or right.
                    </Typography>
                </AccordionDetails>
            </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant='h5'>Difference Between React Hook form and Formik</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography> 
                        react-pro-sidebar (commonly referred to as ProSidebar) is a React component library used to create beautiful, collapsible side navigation menus (sidebars) for web apps.

It helps you easily build responsive, modern dashboards or admin panels with a sidebar on the left or right.
                    </Typography>
                </AccordionDetails>
            </Accordion>

              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography>What is more important skills or money</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography> 
                        react-pro-sidebar (commonly referred to as ProSidebar) is a React component library used to create beautiful, collapsible side navigation menus (sidebars) for web apps.

It helps you easily build responsive, modern dashboards or admin panels with a sidebar on the left or right.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            
        </Box>
    )
}

export default Faq
