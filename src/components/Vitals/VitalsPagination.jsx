import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function VitalsPagination() {
    return (
        <Stack spacing={2}>
            <Pagination count={10} color='medical' size='large' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
        </Stack>
    );
}