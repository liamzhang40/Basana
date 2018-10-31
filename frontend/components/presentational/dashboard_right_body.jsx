import React from 'react';
import { connect } from 'react-redux';
import TaskBundle from '../task/task_bundle';
import Calendar from '../calendar/calendar';

const mapStateToProps = state => {
    return {
        contentToDisplay: state.ui.dashboardBodyDisplay
    };
};

const DashboardRightBody = ({contentToDisplay}) => {
    let Content;
    if (contentToDisplay === "list") Content = TaskBundle;
    if (contentToDisplay === "calendar") Content = Calendar;

    return (
        <section className='dashboard-body'>
            <section className='dashboard-tasks-container'>
                <div className='placeholder'></div>
                <Content />
                <div className='placeholder'></div>
            </section>
        </section>
    );
};

export default connect(mapStateToProps)(DashboardRightBody);