import axios from 'axios';
import ContentLayout from '@/components/ContentLayout';
import apiRoutes from '@/routes';
import { ItemsData } from '@/types/interfaces';
import { Box, Container, Typography } from '@mui/material';

interface ItemsProps {
  data: ItemsData;
}

const Items = ({ data }: ItemsProps) => {
  const { tree } = data;
  // const conditions = tree.reduce((acc, { tags }))

  return (
    <ContentLayout>
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant='h5'
          sx={{
            paddingBottom: '1rem',
            color: 'var(--blue-1)',
          }}
        >
          Items Page
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '30%', background: 'var(--gold-1)' }}>Checkbox</Box>
          <Box sx={{ width: '70%', background: 'var(--gold-7)' }}>Items</Box>
        </Box>
      </Container>
    </ContentLayout>
  );
};

export default Items;

export const getStaticProps = async () => {
  const newRoute = apiRoutes.json('en_US', 'item');
  const { data } = await axios.get(newRoute.toString());

  return {
    props: {
      data,
      fallback: false,
    },
  };
};
