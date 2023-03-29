import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import styles from '@/styles/Home.module.css';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta title='Lol database' description='summary of lol content' />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
