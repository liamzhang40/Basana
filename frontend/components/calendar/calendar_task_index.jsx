import React from 'react';
import { connect } from 'react-redux';
import CalendarTaskIndexItem from './calendar_task_index_item';

const mapStateToProps = (state, ownProps) => {
    const tasks = Object.values(state.entities.tasks)
    .filter(task => (
        parseInt(task.due_date.slice(8)) === ownProps.date &&
        parseInt(task.due_date.slice(5, 7)) === ownProps.month + 1 &&
        parseInt(task.due_date.slice(0, 4)) === ownProps.year
    ));

    return {
        tasks
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

const CalendarTaskIndex = ({ tasks, date }) => {
    const li = tasks.map((task, idx) => <li key={idx}>
        <CalendarTaskIndexItem task={task} />
    </li>);

    return (
        <ul>
            {date}
            {li}
        </ul>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarTaskIndex);