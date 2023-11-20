import React, { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import styles from './BottomNav.module.scss'

const BottomNav = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels={false}
      value={value}
      className={styles.bottomNav}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction className={styles.bottomNavItem} label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction className={styles.bottomNavItem} label="Calendar" icon={<CalendarMonthIcon />} />
    </BottomNavigation>
  )
}

export default BottomNav;