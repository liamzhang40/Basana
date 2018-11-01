import React from 'react';
import { daysInMonth, daysOfWeek, months } from '../../util/date_util';
import CalendarTaskIndex from './calendar_task_index';

class Calendar extends React.Component {
    constructor() {
        super();
        this.date = new Date();

        this.state = {
            year: this.date.getFullYear(),
            month: this.date.getMonth()
        };
    }

    generateCalendarBody() {
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
                    datesRow.push(<div key={j}>
                        <CalendarTaskIndex date={date} month={month} year={year}/>
                    </div>);
                    date += 1;
                } else {
                    datesRow.push(<div className="calendar-other-dates" key={j}></div>);
                }
            }
            dates.push(<div className="calendar-dates-row" key={i}>{datesRow}</div>);
        }
        return dates;
    }

    toggleMonth(value) {
        let { month, year } = this.state;
        return () => {
            month += value;
            if (month === 12) {
                year += 1;
                month = 0;
            } else if (month === -1) {
                year -= 1;
                month = 11;
            }
            this.setState({
                year,
                month
            });
        };
    }

    render() {
        console.log(this.props);
        const days = Object.values(daysOfWeek).map((day, index) => <div key={index}>{day}</div>);
        
        return (
            <div className="calendar-container">
                <div className="calendar">
                    <div className="calendar-header">
                        <div className="switch-button-left" onClick={this.toggleMonth(-1)}><span>▶︎</span></div>
                        <div className="calendar-header-content">{`${months[this.state.month]} ${this.state.year}`}</div>
                        <div className="switch-button-right" onClick={this.toggleMonth(1)}><span>▶︎</span></div>
                    </div>
                    {<div key={10} className="calendar-days">{days}</div>}
                    <div className="calendar-scroll-layer">
                        {this.generateCalendarBody()}
                    </div>
                </div>      
            </div>
        );
    }
}

export default Calendar;