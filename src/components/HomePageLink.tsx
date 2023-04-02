import Link from 'next/link';
import Image from 'next/image';
import {Button, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import DiamondIcon from '../../public/diamond_i.png';

const StyledButton = styled(Button)`
  color: #111;
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translate(-50%);
  padding: 0;
  width: 25%;
  border: 1px solid var(--blue-1);
  &:hover {
    opacity: 0.7;
  }
`;
const StyledTypography = styled(Typography)({
  'padding-left': '1rem',
  'font-weight': '700',
})


const HomePageLink = () => (
  <StyledButton>
    <Image 
      src={DiamondIcon} 
      width={50} 
      height={50} 
      alt='Link to home page' 
    />
    <Link href={'/'}>
    <StyledTypography variant='body2'>Home</StyledTypography>
    </Link>
  </StyledButton>
);

export default HomePageLink;