import { taskModel } from "entities/task"
import dayjs from 'dayjs'
import {useEffect, useState} from 'react'
import { fetchTaskByDate } from "../api/taskListApi"

export const useFetchedTasksByDate = (date: Date) => {
    const [tasks, setTasks] = useState<taskModel.Task[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        fetchTaskByDate(dayjs(date).format('YYYY-MM-DD'))
        .then(fetchedTask => {
            setTasks(fetchedTask)
            setLoading(false)
        })
        .catch(error => {
            setTasks([])
            setError(error)
            setLoading(false)
        })
    }, [date])
    
    return [tasks, loading, error] as const
}