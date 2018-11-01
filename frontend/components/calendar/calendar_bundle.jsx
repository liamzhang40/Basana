import React from 'react';
import { Route } from 'react-router-dom';
import Calendar from './calendar';

const CalendarBundle = () => {
    return (
        <React.Fragment>
            <Route path='/dashboard/teams/:teamId/projects/:projectId' component={Calendar} />
            <Route path='/dashboard/teams/:teamId/users/:userId' component={Calendar} />
        </React.Fragment>
    );
};

export default CalendarBundle;