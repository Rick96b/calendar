import React from 'react'

import styles from './Task.module.scss';
import { taskModel } from '..';

interface TaskProps {
    task: taskModel.Task
}

const Task:React.FC<TaskProps> = ({task}) => {

  return (
    <article className={styles.task}>
        <div className={styles.taskContainer}>
          <span className={styles.taskDate}>{task.time}</span>
          <p className={styles.taskText}>{task.text}</p>
        </div>
    </article>
  )
}

export default Task