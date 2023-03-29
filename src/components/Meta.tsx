import Head from 'next/head';
import { MetaProps } from '@/types/interfaces';

const Meta = ({ title, description }: MetaProps) => {
  return (
    <Head>
      <title>Create Next App</title>
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Meta;
