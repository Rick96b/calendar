import { getDatesAroundDate } from 'shared/utils/getDatesAroundDate'
import { taskApi } from 'entities/task';

export const fetchTaskByDate = async (date: string) => {
    const dates = getDatesAroundDate(new Date(date), 7);
    
    return (await Promise.all(dates.map(async (date) => {
        return await taskApi.fetchTaskByDate(date)
    }))).filter(item => !!item)
}