import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import LastUpdatedInfo from '@site/src/components/LastUpdatedInfo';

// This component renders the grid layout
export function CodelabGrid({ children }) {
  return <div className={styles.codelabGrid}>{children}</div>;
}

// This component renders a single card
export function CodelabCard({ href, title, description, children }) {
  return (
    <Link href={href} className={styles.codelabCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <LastUpdatedInfo />
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.cardIcon}>{children}</span>
        <span className={styles.cardButton}>Start</span>
      </div>
      
    </Link>
  );
}
