import CloseIcon from '@mui/icons-material/Close';
import { Modal, Box, Typography, Backdrop, Fade, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

import styles from '@/components/Modal.module.css';
import { SpellModalProps } from '@/types/interfaces';

const StyledTypography = styled(Typography)({
  marginTop: '1rem',
});

const SpellModal = ({ open, setOpen, item }: SpellModalProps) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          style: { opacity: 0.2 },
        },
      }}
    >
      <Fade in={open}>
        <Box className={styles.modalContainer}>
          <IconButton onClick={() => setOpen(false)} className={styles.closeBtn} disableRipple>
            <CloseIcon />
          </IconButton>
          <Box className={styles.modalHeader}>
            <Image src={item.imgUrl} width={100} height={100} alt={item.name} />
            <Typography variant='h6' component='h2' sx={{ marginLeft: '1rem' }}>
              {item.name}
            </Typography>
            <Box sx={{ margin: 'auto 0 0 auto' }}>
              <Typography>
                <b>Range:</b> {item.rangeBurn}
              </Typography>
              <Typography>
                <b>Cooldown:</b> {item.cooldownBurn}
              </Typography>
            </Box>
          </Box>
          <StyledTypography>{item.description}</StyledTypography>
          <StyledTypography>
            <b>Modes:</b> {item.modes.join(', ')}
          </StyledTypography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default SpellModal;
