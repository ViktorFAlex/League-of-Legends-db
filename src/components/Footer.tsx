import { AppBar, Toolbar, Typography, Button, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import TelegramIcon from '@mui/icons-material/Telegram';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)`
  color: #111;
  padding: 0;
  margin: 0 10px 0 10px;
  &:hover {
    opacity: 0.7;
  }
`;

const Footer = () => {
  return (
    <AppBar
      sx={{
        top: 'auto',
        bottom: '0',
        height: '6vh',
        backgroundColor: '#A09B8C',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      component='footer'
    >
      <StyledLink href='https://github.com/ViktorFAlex/'>
        <GitHubIcon />
      </StyledLink>
      <StyledLink href='mailto: Viktor.F.Alex@gmail.com'>
        <GoogleIcon />
      </StyledLink>
      <StyledLink href='https://t.me/FAViktor'>
        <TelegramIcon />
      </StyledLink>
    </AppBar>
  );
};

export default Footer;
