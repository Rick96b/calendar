export function getDatesAroundDate(date: Date, datesCount: number) {
    let dates: Date[] = [date]
    for(let i = 1; i <= datesCount; i++) {
        dates.push(addDaysToDate(i, date))
        dates.unshift(addDaysToDate(-i, date))
    }
    return dates;
}

function addDaysToDate(days: number, currentDate: Date) {
    var newDate = new Date(currentDate.valueOf());
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}