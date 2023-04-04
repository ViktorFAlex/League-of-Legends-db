import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { RunesData } from '@/types/interfaces';
import apiRoutes from '@/routes';

const RuneTabTitle = ({ item }: { item: RunesData }) => {
  return (
  <Box>
    <Image src={apiRoutes.runesReforged.image(item.icon).toString()} width={50} height={50} alt='rune tree'/>
    <Typography variant='body2'>{item.name}</Typography>
  </Box>
  );
};

export default RuneTabTitle;