import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Alert, AlertTitle, Backdrop, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


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



export default function LoginModalPatient({ showModal, setShowModal, handleCloseModal, doneMsg }) {

    console.log(showModal, '213123123')
   
    return (
        <div>

            <Modal
                open={showModal}
                // onClose={() => setShowModal(false)}
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
                        <Typography color={doneMsg.type === 'success' ? '#2e7d32' : '#ed6c02'} id="transition-modal-title" variant="h4" >
                            {doneMsg.message}
                        </Typography>
                        <Alert severity={doneMsg.type}>
                            <AlertTitle>{doneMsg.head}</AlertTitle>
                            {doneMsg.submsg}
                        </Alert>
                    </Box>
                    <Box display='flex' justifyContent='end' gap={0.5}>
                        {doneMsg.type !== 'success' && <Button variant='contained' color='medical' onClick={() => setShowModal(false)}>Try Again</Button>}

                    </Box>
                </Box>

            </Modal>
        </div>
    );
}