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
            let startCountingDates = false;
            for (let j = 0; j < 7; j++) {
                if (j === firstDayOfMonth) startCountingDates = true;
                if (startCountingDates) {
                    datesRow.push(<td key={j}>white</td>);
                    date += 1;
                } else {
                    datesRow.push(<td className="calendar-empty-dates" key={j}>red</td>);
                }
            }
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