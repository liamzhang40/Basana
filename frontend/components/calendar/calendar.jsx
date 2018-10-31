import React from 'react';
import { daysInMonth } from '../../util/date_util';

class Calendar extends React.Component {
    constructor() {
        super();
        this.date = new Date();

        this.state = {
            year: this.date.getFullYear(),
            month: this.date.getMonth()
        };
    }

    generateTableBody() {
        const { month, year } = this.state;
        const firstDayOfMonth = new Date(year, month).getDay();
        let monthLength = daysInMonth[month];
        if (month === 1) {
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                monthLength = 29;
            }
        }

        const dates = [];
        for (let i = 0, date = 0; date <= monthLength; i++) {
            let datesRow = [];
            for (let j = 0; j < 7; j++) {
                if (date === 0 && j === firstDayOfMonth) date += 1;
                if (date > 0 && date <= monthLength) {
                    datesRow.push(<td key={j}>{date}</td>);
                    date += 1;
                } else {
                    datesRow.push(<td className="calendar-other-dates" key={j}>red</td>);
                }
            }
            dates.push(<tr className="calendar-dates-row" key={i}>{datesRow}</tr>);
        }

        return dates;
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.generateTableBody()}
                </tbody>      
            </table>
        );
    }
}

export default Calendar;