import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';

import image from '../../public/challenger.png';

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'center',
});

const StyledTitle = styled(Typography)({
  color: 'var(--gold-2)',
  fontFamily: 'Spiegel',
  paddingLeft: '0.5rem',
});

const Header = () => (
  <AppBar sx={{ background: 'var(--hextech-black)' }}>
    <StyledToolbar>
      <StyledLink href={'/'}>
        <Image src={image} alt='challenger icon' width={40} height={40} priority />
        <StyledTitle variant='h5'>League of legends database</StyledTitle>
      </StyledLink>
    </StyledToolbar>
  </AppBar>
);
export default Header;
