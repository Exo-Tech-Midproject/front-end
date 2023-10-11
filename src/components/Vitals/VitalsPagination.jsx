import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function VitalsPagination({ setCurrentPage, PaginationPages }) {
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };
    return (
        <Stack spacing={2}>
            <Pagination onChange={handlePageChange} count={PaginationPages} color='medical' size='large' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
        </Stack>
    );
}