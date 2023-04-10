import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'center',
  height: '100%',
});

const StyledSpellPageTitle = styled(Typography)({
  fontFamily: 'Spiegel',
  fontWeight: 700,
  color: 'var(--blue-7)',
});

const SpellsPageTitle = () => (
  <StyledBox>
    <StyledSpellPageTitle variant='h5'>Spells page</StyledSpellPageTitle>
  </StyledBox>
);

export default SpellsPageTitle;
