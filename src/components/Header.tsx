import { AppBar, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './Header.module.css';
import image from '../../public/challenger.png';

const Header = () => (
  <AppBar className={styles.header}>
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Image src={image} alt='hextech chest' width='40' height='40' />
      <Typography variant='h5' sx={{ color: '#C8AA6E', fontFamily: 'Spiegel' }}>
        League of legends database
      </Typography>
    </Toolbar>
  </AppBar>
);
export default Header;
