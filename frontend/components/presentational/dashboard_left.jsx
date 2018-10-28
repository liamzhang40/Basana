import React from 'react';
import { Route } from 'react-router-dom';
import ProjectIndexContainer from '../project/project_index_container';
import TeamMemberIndexContainer from '../team/team_member_index_container';

class DashboardLeft extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.refs)
    }

    render() {
        return (
            <nav 
                ref={ node => {this.dashboardLeft = node;}}
                className='dashboard-left'>
            <div className='dashboard-title-section'>  
                <div>
                    <h1>Basana</h1>
                    <div>
                        <button 
                            id="burger"
                            onClick={this.handleClick}></button>
                    </div>
                </div>
            </div>
                <Route path='/dashboard/teams/:teamId' component={TeamMemberIndexContainer} />
                <Route path='/dashboard/teams/:teamId' component={ProjectIndexContainer} />
            </nav>
        );
    }
}

export default DashboardLeft;