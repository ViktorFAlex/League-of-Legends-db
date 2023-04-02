import { Modal, Box, Typography, Backdrop, Fade, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SpellsModal } from '@/types/interfaces';
import Image from 'next/image';
import apiRoutes from '@/routes';
import { styled } from '@mui/material/styles';
import styles from '@/components/SpellModal.module.css';


const SpellModal = ({open, setOpen, item}: SpellsModal) => {

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
            style:{opacity: 0.2}
          },
        }}
      > 
        <Fade in={open}>
        <Box className={styles.modalContainer}>
          <IconButton 
            onClick={() => setOpen(false)} 
            className={styles.closeBtn}
            disableRipple
          >
            <CloseIcon />
          </IconButton>
          <Box className={styles.modalHeader}>
            <Image src={item.imgUrl} width={100} height={100} alt={item.name}/>
            <Typography variant="h6" component="h2" sx={{marginLeft: '1rem'}}> 
              {item.name}
            </Typography>
            <Box  sx={{marginLeft: 'auto', marginTop: 'auto'}}>
              <Typography><b>Range:</b> {item.rangeBurn}</Typography>
              <Typography><b>Cooldown:</b> {item.cooldownBurn}</Typography>
            </Box>
          </Box>
          <Typography sx={{ mt: 2 }}>
            {item.description}
          </Typography>
          <Typography sx={{mt: 2}}>
            <b>Modes:</b> {item.modes.join(', ')}
          </Typography>
        </Box>
        </Fade>
      </Modal>)
}

export default SpellModal;