// src/components/Header/Header.jsx
import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>My Website</div>
      <nav>
        <ul className={styles.navLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/docs">Docs</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
