import { Box } from '@mui/material';
import { RunesTier } from '@/types/interfaces';
import RuneTabPanelRow from '@/components/RuneTabPanelRow';

interface TabPanelProps {
  index: number;
  value: number;
  key: string;
  runes: RunesTier[];
}

const RuneTabPanel = ({ index, value, runes }: TabPanelProps) => {
    return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={{width: '100%'}}
    >
      {value === index && (
        <Box 
          sx={{
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-evenly',
          }}
        >
          {runes.map((row, id) => <RuneTabPanelRow key={`row-${id}`} row={row.runes} />)}
        </Box>
      )}
    </Box>
  );
};

export default RuneTabPanel;
