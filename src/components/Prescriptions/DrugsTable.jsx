import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Flagyl', '500mg x3', '7', '21'),
//     createData('Augmentin', '1g x2', '7', '21'),
//     createData('Omesec', '40mg x1', '7', '7'),
//     createData('Paracetamol', '1g x3', 'none', '-'),
//     // createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function DrugTable({ recipe }) {
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
                        <TableCell sx={{ color: '#1F485B', fontWeight: '700', fontSize: '12px' }}>Medication </TableCell>
                        {/* <TableCell align="right">Calories</TableCell> */}
                        <TableCell sx={{ color: '#1F485B', fontWeight: '700', fontSize: '12px' }} align="right">Dose</TableCell>
                        <TableCell sx={{ color: '#1F485B', fontWeight: '700', fontSize: '12px' }} align="right">{`Duration(Day)`}</TableCell>
                        <TableCell sx={{ color: '#1F485B', fontWeight: '700', fontSize: '12px' }} align="right">{`QTY(Tabs)`}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {recipe?.map((recipe) => (
                        <TableRow
                            key={`${recipe.name}+${Math.random()}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ color: '#1F485B', fontWeight: '600', fontSize: '10px' }} component="th" scope="recipe">
                                {recipe.drugname}
                            </TableCell>
                            <TableCell sx={{ color: '#1F485BEA', fontWeight: '100', fontSize: '10px' }} align="right">{recipe.dosage}</TableCell>
                            <TableCell sx={{ color: '#1F485BEA', fontWeight: '100', fontSize: '10px' }} align="right">{recipe.duration}</TableCell>
                            <TableCell sx={{ color: '#1F485BEA', fontWeight: '100', fontSize: '10px' }} align="right">{recipe.qty}</TableCell>
                            {/* <TableCell sx={{ color: '#1F485BAA', fontWeight: '100' }} align="right">{recipe.qty}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}