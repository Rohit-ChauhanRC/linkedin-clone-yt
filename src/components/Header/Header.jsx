import React from 'react'
import styles from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';


const Header = () => {
  return (
    <div  className={styles.header}>

      <div  className={styles.header__left}>
        <img src="/images/linkedin.png" alt="logo" className={styles.logo}/>

        <div
        className={styles.header__search}>
          <SearchIcon/>
          <input type="text" />
        </div>
      </div>
      <div className={styles.header__right}>
        <HeaderOption title={'Home'} Icon={HomeIcon} />
        <HeaderOption title={'My Network'} Icon={SupervisorAccountIcon } />
      </div>
    </div>
  )
}

export default Header