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



export default function UploadCoverModal({ showModal2, handleCoverChange, handleCloseModal2, handleUploadCover }) {
    return (
        <div>

            <Modal
                open={showModal2}
                onClose={handleCloseModal2}
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
                        <Typography color='#1F485B' id="transition-modal-title" variant="h4" >
                            Update Cover Picture
                        </Typography>
                        <Alert severity="info">
                            <AlertTitle>Info</AlertTitle>
                            To have the best experience make sure to choose images with <strong>Bigger</strong> width than height  
                        </Alert>
                        <input onChange={handleCoverChange} type='file' />
                    </Box>
                    <Box display='flex' justifyContent='end' gap={0.5}>
                        <Button variant='contained' color='medical' onClick={handleUploadCover}>Upload</Button>
                        <Button variant='outlined' color='warning' onClick={handleCloseModal2}>Cancel</Button>
                    </Box>
                </Box>

            </Modal>
        </div>
    );
}