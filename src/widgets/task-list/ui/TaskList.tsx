import { Task, tasksModel } from 'entities/task';
import React from 'react'

import styles from './TaskList.module.scss';

interface TaskListProps {
    tasks: tasksModel.Task[]
}

const TaskList:React.FC<TaskListProps> = ({tasks}) => {
  return (
    <section className={styles.tasks}>
      <h2 className={styles.title}>Upcoming events</h2>
      <ul className={styles.taskList}>
          {tasks.map(task => 
              <li>
                  <Task task={task} />
              </li>
          )}
      </ul>
    </section>
  )
}

export default TaskList;