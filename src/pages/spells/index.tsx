import apiRoutes from '@/routes';
import axios from 'axios';
import { useState } from 'react';
import { Button, Card, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/Spells.module.css';
import ContentLayout from '@/components/ContentLayout';
import SpellModal from '@/components/SpellModal';
import { SpellsData } from '@/types/interfaces';
import { styled } from '@mui/material/styles';
import SpellsPageTitle from '@/components/SpellsPageTitle';

const StyledButton = styled(Button)`
width: 100%;
display: flex;
justify-content: flex-start;
&:hover {
    opacity: 0.9;
  }
&: focus {
  opacity: 0.5;
}
`;

const StyledSpellName = styled(Typography)({
  'font-weight': '700',
  'color': 'var(--blue-1)',
  'padding-left': '1rem',
});

const StyledGridCard = styled(Card)`
width: 100%;
height: 100%;
background: #1E282D;
display: flex;
align-items: center;
justify-content: center;
`;

type data = [string, SpellsData];

const Spells = ({ data }: { data: SpellsData[] }) => {
  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState('');
  const openModal = (id: string) => {
    setModalId(id);
    setOpen(true);
  }
  const currentItem = data.find((spell) => spell?.id === modalId);

  const buildSpells = () => data.map((spell: SpellsData) => 
    <Grid 
      key={spell?.id ?? 'lvl-select'}
      item 
      xs={4}
      sx={{padding: '0.5rem'}}
    >
      {spell && 
        <StyledGridCard>
          {currentItem && <SpellModal open={open} setOpen={setOpen} item={currentItem}/>}
          <StyledButton
            disableFocusRipple
            onClick={() => openModal(spell.id)}>
            <Image 
             src={spell.imgUrl} 
             alt={spell.name} 
              width={50} 
              height={50}
            />
            <StyledSpellName variant="body2">
              {spell.name}
            </StyledSpellName>
          </StyledButton>
        </StyledGridCard> 
        || <SpellsPageTitle/>}
      </Grid>  
  );

  return (
    <ContentLayout>
      <Grid container className={styles.list}>
        {buildSpells()}
      </Grid>
    </ContentLayout>
  );
};

export default Spells;

export const getStaticProps = async () => {
  const newRoute = apiRoutes.json('en_US', 'summoner');
  const response = await axios.get(newRoute.toString());
  const { data } = response.data;
  const values: SpellsData[] = Object.values(data);

  const modesRegex = /CLASSIC|ARAM/;
  const srAndAramOnly = values
    .filter(({modes}: SpellsData) => modes.some((mode: string) => modesRegex.test(mode)))
    .map((data: SpellsData) => {
      const newModes = data.modes
        .filter((mode) => modesRegex.test(mode))
        // Make string first letter uppercased Only
        .map((mode) => mode.replace(/(?<=\w)\w+/, (match) => match.toLowerCase()));
      return {...data, modes: newModes, imgUrl: apiRoutes.summoner.spell(data.id).toString()}
    });
      

  return {
    props: {
      data: [...srAndAramOnly.slice(0, 1), null, ...srAndAramOnly.slice(1)],
      fallback: false,
    },
  };
};
