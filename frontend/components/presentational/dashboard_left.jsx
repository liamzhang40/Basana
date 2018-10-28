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
        if (this.hamburgerButton.classList.length) {
            // this.dashboardContainer.style.width = "244px";
            this.dashboardContent.style.visibility = "visible";
            this.hamburgerButton.classList.remove("open");
        } else {
            // this.dashboardContainer.style.width = "0";
            this.dashboardContent.style.visibility = "hidden";
            this.hamburgerButton.classList.add("open");
        }
    }

    render() {
        return (
            <nav 
                ref={node => { this.dashboardContainer = node; }}
                className="dashboard-left">
                <button 
                    id="burger"
                    onClick={this.handleClick}
                    ref={node => { this.hamburgerButton = node; }}></button>
                <div
                    ref={node => { this.dashboardContent = node; }}
                    className='dashboard-left-content'>
                    <div className='dashboard-title-section'>  
                        <div>
                            <h1>Basana</h1>
                        </div>
                    </div>
                    <Route path='/dashboard/teams/:teamId' component={TeamMemberIndexContainer} />
                    <Route path='/dashboard/teams/:teamId' component={ProjectIndexContainer} />
                </div>
            </nav>
        );
    }
}

export default DashboardLeft;