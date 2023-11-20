import React from 'react'
import { DateList } from 'widgets/dates-list'
import { TaskList } from 'widgets/task-list'

import styles from './HomePage.module.scss';
import { Header } from 'widgets/header';

const HomePage = () => {

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.tasksContainer}>
      <TaskList />
      </div>
      <div className={styles.datesContainer}>
        <DateList />
      </div>
    </div>
  )
}

export default HomePage