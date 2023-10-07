import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Flagyl', '500mg x3', '7', '21'),
    createData('Augmentin', '1g x2', '7', '21'),
    createData('Omesec', '40mg x1', '7', '7'),
    createData('Paracetamol', '1g x3', 'none', '-'),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DrugTable() {
    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: 0,
                // borderTop: '0.5px solid black',
                backgroundColor: 'transparent',
                position: 'absolute',
                bottom: '0',
                maxHeight: '220px',
                scrollbarWidth: 'none',
                '-ms-overflow-style': 'none',
                '&::-webkit-scrollbar': {
                    width: '0.5em',
                    display: 'none',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'transparent',
                },
            }}  >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ color: '#1F485B', fontWeight: '700' }} >
                        <TableCell sx={{ color: '#1F485B', fontWeight: '700' }}>Medication </TableCell>
                        {/* <TableCell align="right">Calories</TableCell> */}
                        <TableCell sx={{ color: '#1F485B', fontWeight: '700' }} align="right">Dose</TableCell>
                        <TableCell sx={{ color: '#1F485B', fontWeight: '700' }} align="right">{`Duration(Day)`}</TableCell>
                        <TableCell sx={{ color: '#1F485B', fontWeight: '700' }} align="right">{`QTY(Tabs)`}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ color: '#1F485B', fontWeight: '600' }} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell sx={{ color: '#1F485BAA', fontWeight: '100' }} align="right">{row.calories}</TableCell>
                            <TableCell sx={{ color: '#1F485BAA', fontWeight: '100' }} align="right">{row.fat}</TableCell>
                            <TableCell sx={{ color: '#1F485BAA', fontWeight: '100' }} align="right">{row.carbs}</TableCell>
                            <TableCell sx={{ color: '#1F485BAA', fontWeight: '100' }} align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}