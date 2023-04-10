import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@/styles/globals.css';

const theme = createTheme({
  typography: {
    fontFamily:
      "'Beaufort', system-ui, -apple-system, Roboto, 'Helvetica Neue', Arial, 'Noto Sans','Liberation Sans', 'sans-serif', 'Apple Color Emoji', 'Noto Color Emoji'",
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <NextNProgress
      color='linear-gradient(90deg, #b656cb, #10a1a0)'
      height={5}
      options={{ showSpinner: false }}
    />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
