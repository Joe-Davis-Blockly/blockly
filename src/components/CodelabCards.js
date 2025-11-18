// src/components/CodelabCards.js
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export function CodelabGrid({ children }) {
  return <div className={styles.codelabGrid}>{children}</div>;
}

// this components renders a single card
export function CodelabCard({ href, title, level, children }) {
  return (
    <Link href={href} className={styles.codelabCard}>
      {/* Top Section: Image */}
      <div className={styles.cardImageContainer}>
        {children}
      </div>
      
      {/* Bottom Section: Content */}
      <div className={styles.cardContent}>
        <span className={styles.cardLevel}>{level}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </Link>
  );
}
