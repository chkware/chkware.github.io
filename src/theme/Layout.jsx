import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './styles.module.scss';

export default function CustomLayout({ children, ...props }) {
  return (
    <Layout {...props}>
      <div className={clsx(styles.layoutContainer)}>
        <Header />
        <main className={clsx(styles.mainContent)}>{children}</main>
        <Footer />
      </div>
    </Layout>
  );
}
