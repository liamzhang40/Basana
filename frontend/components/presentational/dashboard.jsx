import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CurrentTeamContainer from '../team/current_team_container';
import TeamMemberIndexContainer from '../team/team_member_index_container';
import ProjectIndexContainer from '../project/project_index_container';
import CurrentProjectContainer from '../project/current_project_container';
import UpdateTaskFormContainer from '../task/task_form/update_task_form_container';
import AssigneeTaskIndexContainer from '../task/task_index/assignee_task_index_container';
import MyTaskIndexContainer from '../task/task_index/my_task_index_container';
import ProjectTaskIndexContainer from '../task/task_index/project_task_index_container';

// <div>Search Bar</div>
const Dashboard = () => {

  return (
    <section className='dashboard-main'>
      <nav className='dashboard-left'>
        <h1>Basana</h1>
        <Route path='/dashboard/teams/:teamId' component={TeamMemberIndexContainer} />
        <Route path='/dashboard/teams/:teamId' component={ProjectIndexContainer} />
      </nav>

      <section className='dashboard-right'>
        <nav className='top-nav-bar'>
          <div className='top-nav-bar-list'>
            <div><Route path='/dashboard/teams/:teamId' component={MyTaskIndexContainer}/></div>
            <div><Route path='/dashboard/teams/:teamId' component={CurrentTeamContainer}/></div>
          </div>
        </nav>

        <nav className='top-nav-bar-2'>
          <Switch>
            <Route path='/dashboard/teams/:teamId/projects/:projectId' component={CurrentProjectContainer}/>
            <Route path='/dashboard/teams/:teamId' component={CurrentProjectContainer} />
          </Switch>
        </nav>

        <section className='dashboard-body'>
          <section className='dashboard-tasks-container'>
            <div className='placeholder'></div>
            <Switch>
              <Route path='/dashboard/teams/:teamId/projects/:projectId' component={ProjectTaskIndexContainer} />
              <Route path='/dashboard/teams/:teamId' component={AssigneeTaskIndexContainer} />
            </Switch>

            <Route path='/dashboard/teams/:teamId/projects/:projectId/tasks/:taskId' component={UpdateTaskFormContainer} />
            <Route path='/dashboard/teams/:teamId/tasks/:taskId' component={UpdateTaskFormContainer} />

            <div className='placeholder'></div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Dashboard;
