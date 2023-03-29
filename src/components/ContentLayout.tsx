import { Container, Button } from '@mui/material';
import DefaultLayout from './DefaultLayout';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const StyledButton = styled(Button)`
  color: #111;
  padding: 0;
  margin: 0 10px 0 10px;
  &:hover {
    opacity: 0.7;
  }
`;

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <DefaultLayout>
          <Container sx={{
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center', 
            width: '100%', 
            height: '100%',
            }}>
            {children}
            <StyledButton><Link href={'/'}>Home</Link></StyledButton>
          </Container>
        </DefaultLayout>
    )
};

export default ContentLayout;
