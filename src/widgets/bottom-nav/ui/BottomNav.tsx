import React from 'react'
import {AiOutlineHome, AiOutlineCalendar} from 'react-icons/ai'

import styles from './BottomNav.module.scss'

const BottomNav = () => {
  return (
    <nav className = {styles.bottomNav}>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <AiOutlineHome className={styles.navIcon}/>
            </li>
            <li className={styles.navItem}>
                <AiOutlineCalendar className={styles.navIcon}/>
            </li>
        </ul>
    </nav>
  )
}

export default BottomNav;