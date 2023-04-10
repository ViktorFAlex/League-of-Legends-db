import { Typography, Card, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Carousel from 'react-material-ui-carousel';

import carouselItems from '../utils/mainPageImgs';

interface CarouselItemProps {
  image: StaticImageData;
  description: string;
  height?: number;
  route: string;
}

const StyledHomePageContainer = styled(Card)({
  backgroundColor: 'transparent',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignContent: 'center',
});

const StyledHomePageDescription = styled(Typography)({
  color: 'var(--gold-1)',
  textAlign: 'center',
});

const StyledCarouselContainer = styled(Card)({
  display: 'flex',
  backgroundColor: 'transparent',
  justifyContent: 'center',
  marginBottom: '2.5rem',
});

const StyledCarousel = styled(Carousel)({
  minWidth: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: 'var(--gold-1)',
});

const StyledCarouselItemContainer = styled(Box)({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  widht: '250px',
  height: '300px',
  alignItems: 'center',
});

const StyledCarouselItemTypography = styled(Typography)({
  position: 'absolute',
  display: 'flex',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#111',
  color: '#eeeeee',
  height: '16%',
  opacity: 0.6,
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    cursor: 'pointer',
    opacity: 0.9,
  },
});

const MainDescription = () => (
  <StyledHomePageContainer elevation={0}>
    <StyledHomePageDescription variant='h5'>
      Welcome to league of legends® database!
    </StyledHomePageDescription>
    <StyledHomePageDescription variant='body1'>
      Here you can find any info about champions, items, runes and spells. Enjoy!
    </StyledHomePageDescription>
    <StyledCarouselContainer elevation={0}>
      <StyledCarousel
        autoPlay={false}
        indicatorContainerProps={{
          style: { margin: '0' },
        }}
      >
        {carouselItems.map(({ image, description, route, height = 252 }: CarouselItemProps) => (
          <StyledCarouselItemContainer key={description}>
            <Image width={250} height={height} src={image} alt={description} />
            <StyledCarouselItemTypography variant='h5'>
              <Link href={route}>{description}</Link>
            </StyledCarouselItemTypography>
          </StyledCarouselItemContainer>
        ))}
      </StyledCarousel>
    </StyledCarouselContainer>
  </StyledHomePageContainer>
);

export default MainDescription;
