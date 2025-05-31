import React from 'react'
import {Box, Toolbar, useTheme} from '@mui/material';
import { DataGrid,GridToolbarContainer,GridToolbarExport } from '@mui/x-data-grid';
import { invoices } from '../data/invoice';
import Header from './header'
import { tokens } from './theme';
function CustomToolbar() {
  return (
    <GridToolbarContainer>
    
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function Invoice() {
    const theme=useTheme()
    const row=invoices;
    const colors=tokens(theme.palette.mode)
    const column=[
        {field:'invoiceId', headerName:'ID', flex:1},
  { field: 'customerName', headerName: 'Customer Name', flex:1},
  { field: 'dateIssued', headerName: 'Date Issued', flex:1},
  { field: 'dueDate', headerName: 'Deadline Date', flex:1},
  { field: 'amount', headerName: 'Amount', flex:1},
   { field: 'status', headerName: 'Status', flex:1},

  
    ]
    return (
        <Box sx={{ml:3, }}>
<Header title="INVOICES" subtitle="Company's invoices status"/>
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

export default Invoice;
