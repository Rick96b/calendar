import React, {useState} from 'react'
import { DateList } from 'widgets/dates-list'
import { TaskList } from 'widgets/task-list'

import styles from './HomePage.module.scss';
import { Header } from 'widgets/header';

const HomePage = () => {
  const [activeDate, setActiveDate] = useState(new Date());

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.tasksContainer}>
      <TaskList activeDate={activeDate} />
      </div>
      <div className={styles.datesContainer}>
        <DateList setActiveDate={setActiveDate} activeDate={activeDate}/>
      </div>
    </div>
  )
}

export default HomePage