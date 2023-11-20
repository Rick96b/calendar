import React, { useRef, useState } from 'react'
import { getDatesAroundDate } from 'shared/utils/getDatesAroundDate'

import styles from './DateList.module.scss'
import classNames from 'classnames';
import dayjs from 'dayjs';

interface DatesListProps {
  activeDate: string;
  setActiveDate: Function
} 

const DateList:React.FC<DatesListProps> = ({activeDate, setActiveDate}) => {
  const dates = getDatesAroundDate(activeDate, 7)
  const ref = useRef<HTMLUListElement>(null);

  const clickHandler = (index:number, event:React.MouseEvent) => {
    setActiveDate(dates[index])
    event.currentTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }

  return (
    <ul className={styles.dateList} ref={ref}>
      {dates.map((date, index) =>  
        <li 
          className={classNames(styles.dateItem, date === activeDate ? styles.active : '')} 
          onClick={(event) => clickHandler(index, event)} 
          key={index}
        >
          <span className={styles.date}>{dayjs(date).format('DD')}</span>
          <span className={styles.weekday}>{new Intl.DateTimeFormat("en-US", {weekday: 'short'}).format(new Date(date))}</span>
        </li>
      )}
    </ul>
  )
}

export default DateList