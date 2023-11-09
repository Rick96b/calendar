import React, { useRef, useState } from 'react'
import { getDatesAroundDate } from 'shared/utils/getDatesAroundDate'

import styles from './DateList.module.scss'
import classNames from 'classnames';

/* interface DatesListProps {
    dates:
} */

const DateList = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const dates = getDatesAroundDate(currentDate, 7)
  const ref = useRef<HTMLUListElement>(null);

  const clickHandler = (index:number) => {
    setCurrentDate(dates[index])
  }

  return (
    <ul className={styles.dateList} ref={ref}>
      {dates.map((date, index) =>  
        <li 
          className={classNames(styles.dateItem, date === currentDate ? styles.active : '')} 
          onClick={(event) => clickHandler(index)} 
          key={index}
        >
          <span className={styles.date}>{date.getDate()}</span>
          <span className={styles.weekday}>{new Intl.DateTimeFormat("en-US", {weekday: 'short'}).format(date)}</span>
        </li>
      )}
    </ul>
  )
}

export default DateList