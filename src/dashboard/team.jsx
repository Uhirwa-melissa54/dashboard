import React from 'react'
import {Box, Typography, useTheme} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { data } from '../data/data';
import { useState } from 'react';
import Header from './header'
import { tokens } from './theme';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

function Team() {
    const theme=useTheme()
    const row=data;
    const colors=tokens(theme.palette.mode)
    const column=[
        {field:'id', headerName:'ID', flex:1},
         { field: 'name', headerName: 'Name', flex:1 },
  { field: 'email', headerName: 'Email', flex:1},
  { field: 'access', headerName: 'Access Level', flex:1, renderCell:({row:{access}})=>{
    return (
      <Box  width='60%' m='0 auto' p='5px' borderRadius='4px' display='flex'  justifyContent=' center' backgroundColor={
        access==='admin'? colors.greenAccent[600] : colors.greenAccent[700]
      }>
        {access==='admin' && <AdminPanelSettingsOutlinedIcon/>}
        {(access==='SuperManager' || access==='manager') && <SecurityOutlinedIcon/>}
          {access==='user' && <LockOutlinedIcon/>}
          {access==='secretary' && <NoteAltIcon/>}
<Typography  color={colors.grey[100]} sx={{ml:1}}>
  {access}
</Typography>
      </Box>
    )
  }},
  { field: 'age', headerName: 'Age', type: 'number',headerAlign:'left', align:'left',flex:1},
  
    ]
    return (
        <Box sx={{ml:3, }}>
<Header title="Team" subtitle="My Team members in this project"/>
 <Box
    mt={4}
    height="75vh"
    sx={{
      '& .MuiDataGrid-root': {
        border: 'none',
      },
      '& .MuiDataGrid-cell': {
        borderBottom: 'none',
      },
      '& .MuiDataGrid-columnHeaders': {
        backgroundColor: colors?.blueAccent?.[700] || '#3e4396',
        borderBottom: 'none',
      },
      '& .MuiDataGrid-virtualScroller': {
        backgroundColor: colors?.primary?.[400] || '#1F2A40',
      },
      '& .MuiDataGrid-footerContainer': {
        borderTop: 'none',
        backgroundColor: colors?.blueAccent?.[700] || '#3e4396',
      },
    }}
  >
<DataGrid
  rows={row}
  columns={column}
  pageSizeOptions={[5, 10, 25]}
  initialState={{
    pagination: {
      paginationModel: { pageSize: 5, page: 0 },
    },
  }}
  pagination
/>

</Box>
        </Box>
    )
}

export default Team
