import React from 'react';
import { Route } from 'react-router-dom';
import ProjectIndexContainer from '../project/project_index_container';
import TeamMemberIndexContainer from '../team/team_member_index_container';

class DashboardLeft extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className="dashboard-left">
                <nav className='dashboard-left-content'>
                    <div className='dashboard-title-section'>  
                        <div>
                            <h1>Basana</h1>
                        </div>
                    </div>
                    <Route path='/dashboard/teams/:teamId' component={TeamMemberIndexContainer} />
                    <Route path='/dashboard/teams/:teamId' component={ProjectIndexContainer} />
                </nav>
            </section>
        );
    }
}

export default DashboardLeft;