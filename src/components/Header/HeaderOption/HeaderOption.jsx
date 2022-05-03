import React from 'react';
import styles from './HeaderOption.module.css';


const HeaderOption = ({Icon, title}) => {
  return (
    <div className={styles.headerOption}>
      {Icon && <Icon className={styles.headerOption__icon} />}
      <h3 className={styles.headerOption__title}>{ title}</h3>
    </div>
  )
}

export default HeaderOption