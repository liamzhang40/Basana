import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskBundle from '../task/task_bundle';
import CalendarBundle from '../calendar/calendar_bundle';

const mapStateToProps = state => {
    return {
        contentToDisplay: state.ui.dashboardBodyDisplay
    };
};

const DashboardRightBody = ({contentToDisplay}) => {
    let Content;
    if (contentToDisplay === "list") Content = TaskBundle;
    if (contentToDisplay === "calendar") Content = CalendarBundle;

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

export default withRouter(connect(mapStateToProps)(DashboardRightBody));