import React from 'react'
import { DateList } from 'widgets/dates-list'
import { TaskList } from 'widgets/task-list'

import styles from './HomePage.module.scss';
import { Header } from 'widgets/header';

const HomePage = () => {
  const tasks = [
    {
      id: '1',
      text: 'do smth',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: '1',
      text: 'do fuck',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: '1',
      text: 'fuck smth',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: '1',
      text: 'fuck urslf',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: '1',
      text: 'do math',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: '1',
      text: 'do phycsic',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: '1',
      text: 'do do',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: '1',
      text: 'do da de',
      date: new Date(),
      isCompleted: false,
    },
  ]
  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.tasksContainer}>
      <TaskList tasks={tasks} />
      </div>
      <div className={styles.datesContainer}>
        <DateList />
      </div>
    </div>
  )
}

export default HomePage