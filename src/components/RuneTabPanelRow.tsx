import { Box, Button, Typography, Popover } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import { RuneDescription } from '@/types/interfaces';
import apiRoutes from '@/routes';
import { styled } from '@mui/material/styles';
import RuneModal from './RuneModal';

interface RunesRow {
  row: RuneDescription[];
}

const StyledRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '2px solid var(--grey-cool)',
  padding: '0.5rem',
  '&:last-child': {
    border: 'none',
  },
});

const RuneTabPanelRow = ({ row }: RunesRow) => {
  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState(0);
  const openModal = (id: number) => {
    setModalId(id);
    setOpen(true);
  };

  const currentRune = row.find((rune) => rune?.id === modalId);

  return (
    <StyledRow>
      {row.map(({ icon, id, name }) => (
        <React.Fragment key={id}>
          {currentRune && <RuneModal open={open} setOpen={setOpen} item={currentRune} />}
          <Button
            onClick={() => openModal(id)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '25%',
            }}
            key={id}
          >
            <Image
              src={apiRoutes.runesReforged.image(icon).toString()}
              width={50}
              height={50}
              alt={name}
            />
            <Typography
              key={id}
              sx={{
                display: 'flex',
                textAlign: 'center',
                paddingTop: '0.25rem',
                color: 'var(--blue-7)',
                fontWeight: 700,
              }}
              variant='body2'
            >
              {name}
            </Typography>
          </Button>
        </React.Fragment>
      ))}
    </StyledRow>
  );
};

export default RuneTabPanelRow;
