import React from 'react'
import styles from '../styles/Stats.module.scss'
function Stats({val,title}:statsProps) {
  return (
    <div className={styles.card}>
        <p className={styles.number}>{val}+</p>
        <p className={styles.title}>{title}</p>
    </div>
  )
}

export default Stats