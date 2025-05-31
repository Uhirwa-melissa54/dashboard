import React from 'react'
import {Box, Toolbar, useTheme} from '@mui/material';
import { DataGrid,GridToolbarContainer,GridToolbarExport } from '@mui/x-data-grid';
import { people } from '../data/contacts';
import Header from './header'
import { tokens } from './theme';
function CustomToolbar() {
  return (
    <GridToolbarContainer>
    
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function Contancts() {
    const theme=useTheme()
    const row=people;
    const colors=tokens(theme.palette.mode)
    const column=[
        {field:'name', headerName:'Name', flex:1},
  { field: 'phone', headerName: 'Phone Number', flex:1},
  { field: 'street', headerName: 'Street Number', flex:1},
  { field: 'city', headerName: 'City', flex:1},
  { field: 'zip', headerName: 'Zip', flex:1},
   { field: 'email', headerName: 'Email', flex:1},

  
    ]
    return (
        <Box sx={{ml:3, }}>
<Header title="Contacts" subtitle="Contancts of Our people"/>
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
     '& .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeadersInner': {
  backgroundColor:`${colors.blueAccent[700]}` ,
  borderBottom:'none'
},
      '& .MuiDataGrid-virtualScroller': {
        backgroundColor: colors?.primary?.[400] || '#1F2A40',
      },
      '& .MuiDataGrid-footerContainer': {
        borderTop: 'none',
        backgroundColor: colors?.blueAccent?.[700] || '#3e4396',
      },
      '& .MuiDataGrid-toolbarContainer .MuiButton-text':{
        color:`${colors.grey[100]} !important`
      }
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
 components={{Toolbar:CustomToolbar}}/>

</Box>
        </Box>
    )
}

export default Contancts;
