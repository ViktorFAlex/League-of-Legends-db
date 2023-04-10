import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import DefaultLayout from './DefaultLayout';

const ContentLayoutContainer = styled(Container)({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  width: '100%',
  height: '100%',
});

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DefaultLayout>
      <ContentLayoutContainer>{children}</ContentLayoutContainer>
    </DefaultLayout>
  );
};

export default ContentLayout;
