import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UpdateTaskFormContainer from './task_form/update_task_form_container';
import AssigneeTaskIndexContainer from './task_index/assignee_task_index_container';
import ProjectTaskIndexContainer from './task_index/project_task_index_container';

const TaskBundle = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path='/dashboard/teams/:teamId/projects/:projectId' component={ProjectTaskIndexContainer} />
                <Route path='/dashboard/teams/:teamId' component={AssigneeTaskIndexContainer} />
            </Switch>
            <Route path='/dashboard/teams/:teamId/projects/:projectId/tasks/:taskId' component={UpdateTaskFormContainer} />
            <Route path='/dashboard/teams/:teamId/tasks/:taskId' component={UpdateTaskFormContainer} />
        </React.Fragment>
    );
};

export default TaskBundle;