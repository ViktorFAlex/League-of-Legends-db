import axios from 'axios';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import ContentLayout from '@/components/ContentLayout';
import RuneTabTitle from '@/components/RuneTabTitle';
import RuneTabPanel from '@/components/RuneTabPanel';
import apiRoutes from '@/routes';
import { RunesData } from '@/types/interfaces';

const StyledTabs = styled(Tabs)({
  background: 'var(--blue-5)',
  'border-radius': '10px 0 0 10px',
  '& .MuiTabs-scroller .MuiTabs-flexContainer': {
    '& > button': {
      '&:hover': {
        opacity: '0.7',
      },
    },
  },
});

const StyledRunePageTitle = styled(Typography)({
  textAlign: 'center',
  paddingBottom: '0.8rem',
  fontWeight: 700,
  color: 'var(--gold-1)',
});

const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const Spells = ({ data }: { data: RunesData[] }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ContentLayout>
      <StyledRunePageTitle variant='h5'>Runes Page</StyledRunePageTitle>
      <Box sx={{ bgcolor: '#eee', display: 'flex', borderRadius: '10px' }}>
        <StyledTabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs'
          TabIndicatorProps={{
            style: {
              background: 'var(--grey-cool)',
            },
          }}
        >
          {data.map((item, index) => (
            <Tab
              key={item.id}
              sx={
                index === value
                  ? { background: 'var(--hextech-black)', '& > *': { color: 'blue' } }
                  : {}
              }
              label={<RuneTabTitle item={item} index={index} value={value} />}
              {...a11yProps(index)}
            />
          ))}
        </StyledTabs>
        {data.map((item, index) => (
          <RuneTabPanel key={`panel-${item.id}`} runes={item.slots} index={index} value={value} />
        ))}
      </Box>
    </ContentLayout>
  );
};

export default Spells;

export const getStaticProps = async () => {
  const newRoute = apiRoutes.json('en_US', 'runesReforged');
  const { data } = await axios.get(newRoute.toString());

  return {
    props: {
      data: data,
      fallback: false,
    },
  };
};
