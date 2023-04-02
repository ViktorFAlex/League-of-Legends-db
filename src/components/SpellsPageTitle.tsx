import {Typography, Box} from '@mui/material';
import {styled} from '@mui/material/styles';

const StyledBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 100%;
`;

const StyledTitle = styled(Typography)`
  font-family: Spiegel;
  font-weight: 700;
  color: #0A1428;
`;

const SpellsPageTitle = () => <StyledBox><StyledTitle variant='h5'>Spells page</StyledTitle></StyledBox>

export default SpellsPageTitle;

