import { Modal, Box, Typography, Backdrop, Fade } from '@mui/material';
import { SpellsModal } from '@/types/interfaces';
import Image from 'next/image';
import apiRoutes from '@/routes';
import { styled } from '@mui/material/styles';
import styles from '@/components/SpellModal.module.css';
import zIndex from '@mui/material/styles/zIndex';


const SpellModal = ({open, setOpen, item}: SpellsModal) => {
    console.log(item);
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            style:{background: 'transparent'}
          },
        }}
      > 
        <Fade in={open}>
        <Box className={styles.modalContainer}>
            <Box className={styles.modalHeader}>
          <Image src={item.imgUrl} width={100} height={100} alt={item.name}/>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginLeft: '1rem'}}> 
            {item.name}
          </Typography>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {item.description}
          </Typography>
        </Box>
        </Fade>
      </Modal>)
}

export default SpellModal;