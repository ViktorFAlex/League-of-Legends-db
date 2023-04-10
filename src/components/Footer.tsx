import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import TelegramIcon from '@mui/icons-material/Telegram';
import { AppBar, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

type StyledFooterProps = {
  component: 'footer';
} & React.ComponentProps<typeof AppBar>;

const StyledFooter = styled(AppBar)<StyledFooterProps>({
  top: 'auto',
  bottom: 0,
  height: '6vh',
  backgroundColor: 'var(--grey-1)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledLink = styled(Link)({
  color: 'var(--hextech-black)',
  padding: 0,
  margin: '0 10px 0 10px',
  '&:hover': {
    opacity: 0.7,
  },
});

const Footer = () => {
  return (
    <StyledFooter component='footer'>
      <StyledLink href='https://github.com/ViktorFAlex/'>
        <GitHubIcon />
      </StyledLink>
      <StyledLink href='mailto: Viktor.F.Alex@gmail.com'>
        <GoogleIcon />
      </StyledLink>
      <StyledLink href='https://t.me/FAViktor'>
        <TelegramIcon />
      </StyledLink>
    </StyledFooter>
  );
};

export default Footer;
