import { Task, tasksModel } from 'entities/task';
import React from 'react'

interface TaskListProps {
    tasks: tasksModel.Task[]
}

const TaskList:React.FC<TaskListProps> = ({tasks}) => {
  return (
    <ul>
        {tasks.map(task => 
            <li>
                <Task task={task} />
            </li>
        )}
    </ul>
  )
}

export default TaskList;