import React from 'react'

import styles from './Task.module.scss';
import { tasksModel } from '..';

interface TaskProps {
    task: tasksModel.Task
}

const Task:React.FC<TaskProps> = ({task}) => {
  const formatter = new Intl.DateTimeFormat('ru', { hour: '2-digit', minute: '2-digit'});
  const formattedDate = formatter.format(task.date);
  return (
    <article className={styles.task}>
        <div className={styles.taskContainer}>
          <span className={styles.taskDate}>{formattedDate}</span>
          <p className={styles.taskText}>{task.text}</p>
        </div>
    </article>
  )
}

export default Task