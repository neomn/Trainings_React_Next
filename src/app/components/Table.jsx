"use client";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Divider, Stack, Checkbox, FormControlLabel } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

function createData(name, calories, fat, carbs, protein, status) {
  return { name, calories, fat, carbs, protein, status, selected: false };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'successful'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'failed'),
  createData('Eclair', 262, 16.0, 24, 6.0, 'successful'),
  createData('Cupcake', 305, 3.7, 67, 4.3, 'failed'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'successful'),
];

export default function BasicTable() {
  const [tableData, setTableData] = useState(rows);
  const [filterStatus, setFilterStatus] = useState({
    successful: false,
    failed: false
  });

  const handleStatusFilterChange = (status) => {
    const newFilterStatus = {
      ...filterStatus,
      [status]: !filterStatus[status]
    };
    setFilterStatus(newFilterStatus);
    
    // Reset all selections when filter changes
    setTableData(rows.map(row => ({
      ...row,
      selected: newFilterStatus[row.status]
    })));
  };

  const handleRowCheckboxChange = (index) => {
    setTableData(tableData.map((row, i) => 
      i === index ? { ...row, selected: !row.selected } : row
    ));
  };

  return (
    <Stack 
      direction="column" 
      spacing={2} 
      alignItems="center" 
      sx={{ 
        width: '95%',
        margin: '0 auto',
        padding: '16px',
        border: '1px solid rgb(101, 107, 104)',
        borderRadius: '8px',
        justifyContent: 'center'
      }}>
      <Container sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
      </Container>
      <Divider sx={{ 
        width: '100%', 
        maxWidth: 1500, 
        textAlign: 'center',
        '&::before': {
          borderImage: 'linear-gradient(to left,rgb(3, 201, 118), transparent)',
          borderImageSlice: 1,
          borderWidth: '2px'
        },
        '&::after': {
          borderImage: 'linear-gradient(to right,rgb(3, 201, 118), transparent)',
          borderImageSlice: 1,
          borderWidth: '2px'
        },
        '& .MuiDivider-wrapper': {
          padding: '0 24px',
          color: 'rgb(3, 201, 118)',
          fontWeight: 'bold'
        }
      }}>Diffs Table</Divider>
      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Stack direction="column">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filterStatus.successful}
                        onChange={() => handleStatusFilterChange('successful')}
                        sx={{ '& .MuiSvgIcon-root': { color: 'rgb(3, 201, 118)' } }}
                      />
                    }
                    label="Successful"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filterStatus.failed}
                        onChange={() => handleStatusFilterChange('failed')}
                        sx={{ '& .MuiSvgIcon-root': { color: '#d32f2f' } }}
                      />
                    }
                    label="Failed"
                  />
                </Stack>
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Dessert (100g serving)</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Calories</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Fat (g)</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Carbs (g)</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Protein (g)</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: row.selected ? 'rgba(3, 201, 118, 0.1)' : 'inherit'
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={row.selected}
                    onChange={() => handleRowCheckboxChange(index)}
                    sx={{ 
                      '& .MuiSvgIcon-root': { 
                        color: row.status === 'successful' ? 'rgb(3, 201, 118)' : '#d32f2f' 
                      } 
                    }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    color: row.status === 'successful' ? 'rgb(3, 201, 118)' : '#d32f2f',
                    fontWeight: 'bold'
                  }}
                >
                  {row.status.toUpperCase()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
