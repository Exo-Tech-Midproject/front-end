import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Alert, AlertTitle, Backdrop, Typography } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) ',
    // transform: 'scale(1.5)',
    width: 500,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,

};



export default function DeleteGroup ({ showModal, handleCloseDeleteModal, handleDeleteCard, cardId }) {
    return (
        <div>

            <Modal
                open={showModal}
                onClose={handleCloseDeleteModal}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 850,
                    },
                }}
            >
                <Box sx={{ ...style, borderRadius: '4px' }} >
                    <Box display='flex' flexDirection='column' gap={4} mb={2}>
                        <Typography color='#ed6c02' id="transition-modal-title" variant="h4" >
                            Delete card
                        </Typography>
                        <Alert severity="error">
                            <AlertTitle>Warning</AlertTitle>
                            If you proceed this record will be deleted  <strong>permanantly!</strong>
                        </Alert>
                    </Box>
                    <Box display='flex' justifyContent='end' gap={0.5}>
                        <Button variant='contained' color='warning' onClick={()=> handleDeleteCard(cardId)}>Proceed</Button>
                        <Button variant='contained' color='medical' onClick={handleCloseDeleteModal}>Cancel</Button>
                    </Box>
                </Box>

            </Modal>
        </div>
    );
}