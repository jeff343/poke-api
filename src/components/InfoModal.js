import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import useFetchModal from '../hooks/useFetchModal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

const InfoModal = ({ url }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalData = useFetchModal(url)

    return (
        <>
        {modalData &&
            <div>
                <Button color="secondary" onClick={handleOpen}>{modalData.name.toUpperCase()}</Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        {modalData.name.toUpperCase()}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalData.effect_entries.find((a) => a.language.name === "en").effect}
                        </Typography>
                    </Box>
                </Modal>
            </div>}
        </>
    )
};

export default InfoModal;