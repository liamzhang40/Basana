import React from 'react';
import { Route } from 'react-router-dom';
import CurrentTeamContainer from '../team/current_team_container';
import TeamMemberIndexContainer from '../team/team_member_index_container';
import ProjectIndexContainer from '../project/project_index_container';
import CurrentProjectContainer from '../project/current_project_container';
import TaskIndexContainer from '../task/task_index_container';
import UpdateTaskFormContainer from '../task/update_task_form_container';

const Dashboard = () => {

  return (
    <section className='dashboard-main'>
      <nav className='dashboard-left'>
        <h1>Basana</h1>
        <Route path='/dashboard/teams/:teamId' component={TeamMemberIndexContainer} />
        <Route path='/dashboard/teams/:teamId' component={ProjectIndexContainer} />
      </nav>

      <section className='dashboard-right'>
        <section className='top-nav-bar'>
          <ul>
            <ul>
              <li>My Tasks</li>
            </ul>

            <li>Search Bar</li>
            <li><Route path='/dashboard/teams/:teamId' component={CurrentTeamContainer}/></li>
          </ul>
        </section>

        <section className='top-nav-bar-2'>
          <Route path='/dashboard/teams/:teamId/projects/:projectId' component={CurrentProjectContainer}/>
        </section>

        <section className='dashboard-body'>
          <section className='dashboard-tasks-container'>
            <div className='placeholder'></div>
            <Route path='/dashboard/teams/:teamId/projects/:projectId' component={TaskIndexContainer} />
            <Route path='/dashboard/teams/:teamId/projects/:projectId/tasks/:taskId' component={UpdateTaskFormContainer} />
            <div className='placeholder'></div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Dashboard;
