import { Inter } from 'next/font/google';
import DefaultLayout from '@/components/DefaultLayout';
import HomePage from '@/components/HomePage';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    </>
  );
}
