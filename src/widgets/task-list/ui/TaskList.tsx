import { Task } from 'entities/task';
import React from 'react';
import dayjs from 'dayjs';

import styles from './TaskList.module.scss';
import { AddTask } from 'features/add-task';
import { useHorizontalSwipes } from '../hooks/useHorizontalSwipes';
import { useFetchedTasksByDate } from '../hooks/useFetchedTasks';
import { CircularProgress } from '@mui/material';

interface TaskListProps {
  activeDate: string
}

const TaskList:React.FC<TaskListProps> = ({activeDate}) => {
  const [SwipeHandlers, refPassthrough, currentSlide] = useHorizontalSwipes()
  const [tasks, loading, error] = useFetchedTasksByDate(activeDate)

  if(loading) return <CircularProgress  />
  console.log(tasks)
  if(tasks[activeDate]) {
    const slidesProgress = Array.from({length: Math.ceil((tasks[activeDate].length / 4) || 0)}, (_, index) => {
      return <span className={currentSlide === index ? styles.activeSlide : ''}/>;
    });
  
    return (
      <section className={styles.tasks}>
        <h2 className={styles.title}>Upcoming events</h2>
        <div className={styles.taskListContainer}>
          <ul className={styles.taskList} {...SwipeHandlers} ref={refPassthrough}>
              {tasks[activeDate].map(task => task.date === activeDate &&
                  <li>
                      <Task task={task} />
                  </li>
              )}
          </ul>
        </div>
        <div className={styles.slidesProgress}>
          {tasks[activeDate].length / 4 > 1 &&
            slidesProgress
          }
        </div>    
        <AddTask /> 
      </section>
    )
  }
  return (
    <section className={styles.tasks}>
        <h2 className={styles.title}>Upcoming events</h2>
        <div className={styles.taskListContainer}>
          no tasks!
        </div>    
        <AddTask /> 
    </section>
  )
}

export default TaskList;