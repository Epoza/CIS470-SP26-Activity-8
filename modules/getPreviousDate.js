const { lastDayOfMonth } = require('./lastDayOfMonth');

function getPreviousDate(month, day, year) {
    if (day > 1) {
        return { month, day: day - 1, year };
    } else {
        if (month > 1) {
            const prevMonth = month - 1;
            const lastDayPrevMonth = lastDayOfMonth(prevMonth, year);
            return { month: prevMonth, day: lastDayPrevMonth, year };
        } else {
            return { month: 12, day: 31, year: year - 1 };
        }
    }
}

module.exports = { getPreviousDate };