import { Box, Typography } from '@mui/material';
import { Item } from '@/types/interfaces';
import Image from 'next/image';

import apiRoutes from '@/routes';

const Item = ({ item }: { item: Item }) => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
    >
      <Image
        src={apiRoutes.item.image(item.image.full).toString()}
        width={50}
        height={50}
        priority
        alt={item.name}
      />
      <Typography variant='body2'>{item.gold.total || 'Free'}</Typography>
    </Box>
  );
};

export default Item;
