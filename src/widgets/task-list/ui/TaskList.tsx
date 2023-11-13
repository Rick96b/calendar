import { Task, tasksModel } from 'entities/task';
import React, { useState } from 'react'

import styles from './TaskList.module.scss';
import { useSwipeable } from 'react-swipeable';

interface TaskListProps {
    tasks: tasksModel.Task[]
}

const TaskList:React.FC<TaskListProps> = ({tasks}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const SwipeHandlers = useSwipeable({ 
    onSwipedLeft: 
    ({ event }) => {
      if(event.currentTarget && event.currentTarget instanceof HTMLElement){
        if (Math.ceil(event.currentTarget.childElementCount / 4) >= currentSlide + 2) {
          event.currentTarget.style.transform = `translateX(calc(${(currentSlide+1) * -100}% - ${(currentSlide+1)*8}px))`;
          setCurrentSlide(currentSlide + 1)
        }
      }  
    },         
    onSwipedRight:  
    ({ event }) => {
      if(event.currentTarget && event.currentTarget instanceof HTMLElement){
        if (currentSlide-1 >=  0) {
          event.currentTarget.style.transform = `translateX(calc(${(currentSlide-1) * -100}% - ${(currentSlide-1)*8}px))`;
          setCurrentSlide(currentSlide - 1)
        }
      }
    }
  })

  const refPassthrough = (el: HTMLUListElement | null) => {
    SwipeHandlers.ref(el);
  }

  const slidesProgress = Array.from({length: Math.ceil(tasks.length / 4)}, (_, index) => {
    return <span className={currentSlide === index ? styles.activeSlide : ''}/>;
  });


  return (
    <section className={styles.tasks}>
      <h2 className={styles.title}>Upcoming events</h2>
      <div className={styles.taskListContainer}>
        <ul className={styles.taskList} {...SwipeHandlers} ref={refPassthrough}>
            {tasks.map(task => 
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
    </section>
  )
}

export default TaskList;