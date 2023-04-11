import axios from 'axios';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
} from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

import ContentLayout from '@/components/ContentLayout';
import Item from '@/components/Item';
import apiRoutes from '@/routes';
import { ItemsData } from '@/types/interfaces';
import itemsFilterTags from '@/utils/itemsFilterTags';
import formattedItemConditionsNames from '@/utils/formattedItemConditionsNames';

interface ItemsProps {
  data: ItemsData;
}

interface ItemTags {
  [key: string]: string[];
}

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className, arrow: `${className}-arrow` }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'var(--hextech-black)',
    color: 'var(--gold-1)',
    border: '1px solid var(--gold-1)',
  },
  '&-arrow': {
    color: 'var(--hextech-black)',
    '&::before': {
      border: '1px solid var(--gold-1)',
    },
  },
});

const Items = ({ data }: ItemsProps) => {
  const [filterConditions, setFilterConditions] = useState<string[][]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, conditions: string[]) => {
    if (event.target.checked) {
      setFilterConditions([...filterConditions, conditions]);
    } else {
      const filteredConditions = filterConditions.filter((filterCondition) =>
        filterCondition.every((condition) => condition !== conditions[0]),
      );
      setFilterConditions(filteredConditions);
    }
  };

  const { tree } = data;
  const combinedTags = tree.reduce<string[]>((acc, { tags }) => [...acc, ...tags], []);
  const filtered = combinedTags.filter((tag) => !itemsFilterTags.has(tag));
  const formatted = filtered.reduce<ItemTags>((acc, tag) => {
    const lowercasedName = `${tag[0]}${tag.slice(1).toLowerCase()}`;
    const formattedName = formattedItemConditionsNames.get(lowercasedName) ?? lowercasedName;
    const tags = [...(acc[formattedName] ?? []), tag];
    return { ...acc, [formattedName]: tags };
  }, {});
  const formattedKeys = Object.keys(formatted).sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  const { data: itemData } = data;
  const filteredItemDataKeys = Object.keys(itemData)
    .filter((key) => itemData[key as unknown as number].inStore !== false)
    .sort(
      (a, b) =>
        itemData[a as unknown as number].gold.total - itemData[b as unknown as number].gold.total,
    );
  console.log(filterConditions);
  const filteredWithConditions =
    filterConditions.length > 0
      ? filteredItemDataKeys.filter((key) =>
          filterConditions.every((condition) =>
            condition.some((conditionTag) => {
              const regex = new RegExp(`^${conditionTag}$`, 'i');
              return itemData[key as unknown as number].tags.some((tag) => regex.test(tag));
            }),
          ),
        )
      : filteredItemDataKeys;

  return (
    <ContentLayout>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '70%',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            paddingBottom: '1rem',
            color: 'var(--blue-1)',
            textAlign: 'center',
          }}
        >
          Items Page
        </Typography>
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box
            sx={{
              width: '30%',
              background: 'var(--hextech-black)',
              display: 'flex',
              flex: '0 0 auto',
              color: 'var(--blue-1)',
              flexDirection: 'column',
            }}
          >
            <StyledTooltip title='Clear all filters' arrow placement='top'>
              <Button
                onClick={() => setFilterConditions([])}
                sx={{ color: 'var(--blue-1)' }}
                disableRipple
              >
                <CloseIcon />
                Clear
              </Button>
            </StyledTooltip>
            {formattedKeys.map((name) => (
              <FormControlLabel
                sx={{ height: '1.5rem' }}
                label={name}
                key={name}
                control={
                  <Checkbox
                    checked={filterConditions.some((filterCondition) =>
                      filterCondition.some((condition) => formatted[name].includes(condition)),
                    )}
                    onChange={(event) => handleChange(event, formatted[name])}
                    sx={{
                      color: 'var(--blue-1)',
                      '&.Mui-checked': {
                        color: 'var(--blue-1)',
                      },
                    }}
                  />
                }
              />
            ))}
          </Box>
          <Box
            sx={{
              width: '70%',
              background: 'var(--gold-7)',
              flex: '1 1 auto',
              height: '100%',
              overflow: 'auto',
              padding: '0.5rem',
            }}
          >
            <Grid container>
              {filteredWithConditions.map((key) => {
                const item = itemData[key as unknown as number];
                return (
                  <Grid key={key} item xs={3} sx={{ paddingTop: '0.5rem' }}>
                    <Item item={item} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
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
