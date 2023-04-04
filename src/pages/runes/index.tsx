import apiRoutes from '@/routes';
import axios from 'axios';
import { useState } from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import ContentLayout from '@/components/ContentLayout';
import RuneTabTitle from '@/components/RuneTabTitle';
import RuneTabPanel from '@/components/RuneTabPanel';
import { RunesData } from '@/types/interfaces';
import { styled } from '@mui/material/styles';

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-scroller .MuiTabs-flexContainer': {
    '& > button:not(:last-child):after': {
      'content': '""',
      'position': 'absolute',
      'bottom': '0',
      'height': '2px',
      'width': '80%',
      'border-top': '2px solid #000'
    },
  }
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabPanel {
  children: React.ReactNode;
}

const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Spells = ({data}: { data: RunesData[]}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <ContentLayout>
      <Box
      sx={{  bgcolor: 'var(--gold-1)', display: 'flex'}}
    >
      <StyledTabs
        orientation="vertical"
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
      >
        {data.map((item, index) => (
          <Tab key={item.id} 
          label={
            <RuneTabTitle 
              item={item}
            />
          } 
          {...a11yProps(index)}
          />
        ))
        }
      </StyledTabs>
        {data.map((item, index) => (
          <RuneTabPanel 
            key={`panel-${item.id}`} 
            runes={item.slots} 
            index={index} 
            value={value}
          />
        ))}
    </Box>
    </ContentLayout>
  )
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
