import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { RuneDescription } from '@/types/interfaces';
import apiRoutes from '@/routes';
import { styled } from '@mui/material/styles';

interface RunesRow {
  row: RuneDescription[];
}

const StyledRow = styled(Box)({
  'display': 'flex',
  'justify-content': 'space-between',
  'border-bottom': '2px solid var(--grey-cool)',
  'padding-bottom': '1rem',
  '&:last-child': {
    'border': 'none', 
    'padding-bottom': '0'
  }
});

const RuneTabPanelRow = ({ row }: RunesRow ) => {
  return (
    <StyledRow >
    {row.map(({ icon, id, name, longDesc }) => (
      <Box 
        sx={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '25%'
        }} 
        key={id} 
      >
        <Image 
          src={apiRoutes.runesReforged.image(icon).toString()} 
          width={50} 
          height={50} 
          alt={name}/>
        <Typography 
          key={id} 
          sx={{
            display: 'flex', 
            textAlign: 'center', 
            paddingTop: '0.25rem',
            color: 'var(--blue-7)',
            fontWeight: 700,
          }} 
          variant='body2'
        >
          {name}
        </Typography>
      </Box>
      ))
    }
  </StyledRow>)
};

export default RuneTabPanelRow;