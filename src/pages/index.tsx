import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Meta from '@/components/Meta';
import Header from '@/components/Header';
import DefaultLayout from '@/components/DefaultLayout';
import Footer from '@/components/Footer';
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
