import '@/styles/globals.css';
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily:
      "'Beaufort', system-ui, -apple-system, Roboto, 'Helvetica Neue', Arial, 'Noto Sans','Liberation Sans', 'sans-serif', 'Apple Color Emoji', 'Noto Color Emoji'",
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color='linear-gradient(90deg, #b656cb, #10a1a0)'
        height={5}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
