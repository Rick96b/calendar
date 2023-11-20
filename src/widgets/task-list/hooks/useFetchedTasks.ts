import { taskModel } from "entities/task"
import {useEffect, useState} from 'react'
import { fetchTasksByDate } from "../api/taskListApi"

export const useFetchedTasksByDate = (date: string) => {
    const [tasks, setTasks] = useState<taskModel.Tasks>({})
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if(!tasks || !tasks[date]) {
            setLoading(true)
            fetchTasksByDate(date)
            .then(fetchedTask => {
                setTasks(fetchedTask)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setTasks({})
                setError(error)
                setLoading(false)
            })  
        }
        
    }, [date])
    
    return [tasks, loading, error] as const
}