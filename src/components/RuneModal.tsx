import CloseIcon from '@mui/icons-material/Close';
import { Modal, Box, Typography, Backdrop, Fade, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

import styles from '@/components/Modal.module.css';
import apiRoutes from '@/routes';
import { RuneModalProps } from '@/types/interfaces';

const StyledTypography = styled(Typography)({
  marginTop: '1rem',
  fontWeight: 700,
});

const RuneModal = ({ open, setOpen, item }: RuneModalProps) => {
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
        <Box className={`${styles.modalContainer} ${styles.runesModalContainer}`}>
          <IconButton onClick={() => setOpen(false)} className={styles.closeBtn} disableRipple>
            <CloseIcon />
          </IconButton>
          <Box className={`${styles.modalHeader} ${styles.runesModalHeader}`}>
            <Image
              src={apiRoutes.runesReforged.image(item.icon).toString()}
              width={75}
              height={75}
              alt={item.name}
            />
            <Typography variant='h6' component='h2' sx={{ marginLeft: '1rem' }}>
              {item.name}
            </Typography>
          </Box>
          <StyledTypography variant='body2' dangerouslySetInnerHTML={{ __html: item.longDesc }} />
        </Box>
      </Fade>
    </Modal>
  );
};

export default RuneModal;
