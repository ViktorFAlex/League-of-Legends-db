import apiRoutes from '@/routes';
import axios from 'axios';
import { useState } from 'react';
import { Button, Card, Typography, Modal, Grid } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/Spells.module.css';
import ContentLayout from '@/components/ContentLayout';
import DefaultLayout from '@/components/DefaultLayout';
import SpellModal from '@/components/SpellModal';
import SpellsData from '@/types/interfaces';

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
      xs={4}>
        <Card sx={{width: '100%', height: '100%'}}>
          {spell && 
          <>
          {open && <SpellModal open={open} setOpen={setOpen} item={currentItem}/>}
          <Button
            sx={{
              width: '100%', 
              display: 'flex', 
              justifyContent: 'flex-start'
              }} 
            onClick={() => openModal(spell.id)}>
            <Image 
              src={spell.imgUrl} 
              alt={spell.name} 
              width={50} 
              height={50}
            />
            <Typography 
              variant='body2' 
              sx={{fontWeight: '700', paddingLeft: '1rem'}}
            >
              {spell.name}
            </Typography>
          </Button>
          </> || 'Spells'}
        </Card> 
      </Grid>  
  );

  return (
    <ContentLayout>
      <Grid container spacing={2} className={styles.list}>
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
  const srAndAramOnly = values
    .filter((data: SpellsData) => {
    const { modes } = data;
    const regex = /CLASSIC|ARAM/;
    return modes.some((mode: string) => regex.test(mode));
    })
    .map((data: SpellsData) => 
      ({...data, imgUrl: apiRoutes.summoner.spell(data.id).toString()})
    );

  return {
    props: {
      data: [...srAndAramOnly.slice(0, 1), null, ...srAndAramOnly.slice(1)],
      fallback: false,
    },
  };
};
