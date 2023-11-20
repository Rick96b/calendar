import { getDatesAroundDate } from 'shared/utils/getDatesAroundDate'
import { taskApi } from 'entities/task';

export const fetchTasksByDate = async (date: string) => {
    const dates = getDatesAroundDate(date, 7);
    
    return (await Promise.all(dates.map(async (date) => {
        return await taskApi.fetchTasksByDate(date)
    }))).reduce((prev, curr) => {return {...prev, ...curr}})
}