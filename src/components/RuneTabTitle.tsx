import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { RunesData } from '@/types/interfaces';
import apiRoutes from '@/routes';
import { styled } from '@mui/material/styles';

interface TypographyStyledProps {
  index: number;
  value: number;
}

interface RuneTabTitleProps extends TypographyStyledProps {
  item: RunesData;
}



const StyledTabTitleTypography = styled(Typography)(({index, value}: TypographyStyledProps) => ({
  'font-weight': '700',
  'font-family': 'Spiegel',
  'color': index === value ? 'var(--blue-1)' : 'var(--gold-1)',
}));

const RuneTabTitle = ({ item, index, value }: RuneTabTitleProps) => {
  return (
  <Box>
    <Image src={apiRoutes.runesReforged.image(item.icon).toString()} width={50} height={50} alt='rune tree'/>
    <StyledTabTitleTypography index={index} value={value} variant='body2'>{item.name}</StyledTabTitleTypography>
  </Box>
  );
};

export default RuneTabTitle;