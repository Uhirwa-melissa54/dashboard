import React from 'react'
import  FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core';
import {Box,List,ListItem,Typography, useTheme} from '@mui/material'
import Header from './header'
import { tokens } from './theme'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'
function Calendar() {
      const theme=useTheme()
       const colors=tokens(theme.palette.mode)

     const handleDateClick=(selected)=>{
        const title=prompt("Enter the event that will take place");
        const calendarApi=selected.view.calendar
        calendarApi.unselect();

        if(title){
            calendarApi.addEvent({
                id:`${selected.dateStr}-${title}`,
                title,
                start:selected.startStr,
                end:selected.endStr,
                allDay

            })
        }

     }  
    
    return (
        <Box m='20px'>
            <FullCalendar
            height='75vh'
            plugins={[
                dayGridPlugin,
                timeGridPlugin,
                listPlugin,
                interactionPlugin
            ]}

            headerToolbar={{
                left:'prev,next today',
                center:'title',
                right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}

            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}//for user experience when selecting time range
            dayMaxEvents={true}
            select={handleDateClick}
            />
       
        </Box>
    )
}

export default Calendar
