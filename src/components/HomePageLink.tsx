import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';

import DiamondIcon from '../../public/diamond_i.png';

const StyledButton = styled(Button)({
  position: 'absolute',
  bottom: '5%',
  left: '50%',
  transform: 'translate(-50%)',
  padding: '0',
  width: '25%',
  border: '1px solid var(--blue-1)',
  '&:hover': {
    opacity: '0.7',
  },
});

const StyledTypography = styled(Typography)({
  color: 'var(--blue-1)',
  paddingLeft: '1rem',
  fontWeight: 700,
});

const HomePageLink = () => (
  <Link href={'/'}>
    <StyledButton>
      <Image src={DiamondIcon} width={35} height={35} alt='Link to home page' />
      <StyledTypography variant='body2'>Home</StyledTypography>
    </StyledButton>
  </Link>
);

export default HomePageLink;
