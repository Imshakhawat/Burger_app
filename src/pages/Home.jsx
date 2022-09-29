import React from 'react';
import Example from '../components/Example';
import styles from '../styles/pages/home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      This Is Home Page
      <Example />
    </div>
  );
};

export default Home;
