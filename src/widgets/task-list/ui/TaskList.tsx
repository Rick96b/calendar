import { Task } from 'entities/task';
import React from 'react';
import dayjs from 'dayjs';

import styles from './TaskList.module.scss';
import { AddTask } from 'features/add-task';
import { useHorizontalSwipes } from '../hooks/useHorizontalSwipes';
import { useFetchedTasksByDate } from '../hooks/useFetchedTasks';
import { CircularProgress } from '@mui/material';

interface TaskListProps {
  activeDate: Date
}

const TaskList:React.FC<TaskListProps> = ({activeDate}) => {
  const [SwipeHandlers, refPassthrough, currentSlide] = useHorizontalSwipes()
  const [tasks, loading, error] = useFetchedTasksByDate(activeDate)

  const slidesProgress = Array.from({length: Math.ceil(tasks.length / 4)}, (_, index) => {
    return <span className={currentSlide === index ? styles.activeSlide : ''}/>;
  });

  if(loading) return <CircularProgress  />

  return (
    <section className={styles.tasks}>
      <h2 className={styles.title}>Upcoming events</h2>
      <div className={styles.taskListContainer}>
        <ul className={styles.taskList} {...SwipeHandlers} ref={refPassthrough}>
            {tasks.map(task => task.date === dayjs(activeDate).format('YYYY-MM-DD') &&
                <li>
                    <Task task={task} />
                </li>
            )}
        </ul>
      </div>
      <div className={styles.slidesProgress}>
        {tasks.length / 4 > 1 &&
          slidesProgress
        }
      </div>    
      <AddTask /> 
    </section>
  )
}

export default TaskList;