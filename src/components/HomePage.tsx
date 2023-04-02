import { Typography, Card, Stepper, Button, MobileStepper, Box, Container } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import imgRoutes from '../routes/mainPageImgRoutes';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import axios from 'axios';
import carouselItems from '../utils/mainPageImgs';
import Carousel from 'react-material-ui-carousel';
import Link from 'next/link';
import apiRoutes from '@/routes';
import img from '../../public/download.gif';

const defaultImage = 0;

const MainDescription = () => {
  useEffect(() => {
    const getRunes = async () => {
      const newRoute = apiRoutes.json('en_US', 'summoner');
      const paths = await axios.get(newRoute.toString());
      const { data } = paths;
      const params = Object.entries(data.data);
      const mapped = params.map((param) => {
        const [key, value] = param;
        return { params: { [key]: value } };
      });
    };
    getRunes();
  });

  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        
      }}
      elevation={0}
    >
      <Typography variant='h5' color='#F0E6D2' textAlign='center'>
        Welcome to league of legends® database!
      </Typography>
      <Typography variant='body1' color='#F0E6D2' textAlign='center'>
        Here you can find any info about champions, items,
        runes and spells. Enjoy!
      </Typography>
      
      <Card
        sx={{
          display: 'flex',
          backgroundColor: 'transparent',
          justifyContent: 'center',
          marginBottom: '40px',
        }}
        elevation={0}
      >
        <Carousel
          sx={{
            minWidth: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: '#F0E6D2',
          }}
          autoPlay={false}
          indicatorContainerProps={{
            style: { margin: '0' },
          }}
        >
          {carouselItems.map(
            ({
              image,
              description,
              route,
              height,
            }: {
              image: StaticImageData;
              description: string;
              height?: number;
              route: string;
            }) => {
              const newHeight = height || 252;
              return (
                <Box
                  sx={{
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    widht: '250px',
                    height: '300px',
                    alignItems: 'center',
                  }}
                  key={description}
                >
                  <Image width={250} height={newHeight} src={image} alt={description} />
                  <Typography
                    variant='h5'
                    sx={{
                      position: 'absolute',
                      display: 'flex',
                      bottom: '0',
                      left: '0',
                      right: '0',
                      backgroundColor: '#111',
                      color: '#eeeeee',
                      height: '16%',
                      opacity: '0.6',
                      justifyContent: 'center',
                      alignItems: 'center',
                      '&:hover': {
                        cursor: 'pointer',
                        opacity: '0.9',
                      },
                    }}
                  >
                    <Link href={route}>{description}</Link>
                  </Typography>
                </Box>
              );
            },
          )}
        </Carousel>
      </Card> 
    </Card>
  );
};

export default MainDescription;
