import dayjs from "dayjs";

export function getDatesAroundDate(date: string, datesCount: number) {
    const formattedDate = dayjs(date)
    let dates: string[] = [formattedDate.format('YYYY-MM-DD')]
    for(let i = 1; i <= datesCount; i++) {
        dates.push(formattedDate.add(i, 'd').format('YYYY-MM-DD'))
        dates.unshift(formattedDate.add(-i, 'd').format('YYYY-MM-DD'))
    }
    return dates;
}
