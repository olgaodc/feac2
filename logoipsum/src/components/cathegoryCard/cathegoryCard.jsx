import React, { Children } from 'react';
import styles from './styles.module.scss';

const CathegoryCard = ({href, src, alt, text}) => {
  return (
    <div className={styles.cardWrapper}>
        <a className={styles.card} href={href}>
          <img className={styles.image} src={src} alt={alt} />
          <p className={styles.text}>{text}</p>
        </a>
    </div>
  )
}

export default CathegoryCard