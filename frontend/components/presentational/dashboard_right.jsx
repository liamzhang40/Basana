import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CurrentTeamContainer from '../team/current_team_container';
import CurrentProjectContainer from '../project/current_project_container';
import MyTaskIndexContainer from '../task/task_index/my_task_index_container';
import DashboardRightBodyToggleTabs from './dashboard_right_body_toggle_tabs';
import TaskBundle from '../task/task_bundle';


class DashboardRight extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.hamburgerButton.classList.length) {
            this.dashboardContainer.style.width = "83%";
            setTimeout(() => {
                this.hamburgerButton.classList.remove("open");
                this.myTask.style.marginLeft = "26px";
                Object.assign(this.dashboardContainer.style,
                    {
                        position: "",
                        right: ""
                    });
            }, 400);
        } else {
            this.hamburgerButton.classList.add("open");
            this.myTask.style.marginLeft = "55px";
            Object.assign(this.dashboardContainer.style,
                {
                    position: "absolute",
                    right: "0"
                });
            setTimeout(() => {
                this.dashboardContainer.style.width = "100vw";
            }, 100);
        }
    }

    render() {
        return (
            <section 
                className='dashboard-right'
                ref={node => { this.dashboardContainer = node; }}>
                <div className='dashboard-right-content'>
                    <nav className='top-nav-bar'>
                        <div className='top-nav-bar-list'>
                            <div ref={node => { this.myTask = node; }}>
                                <button
                                    id="burger"
                                    onClick={this.handleClick}
                                    ref={node => { this.hamburgerButton = node; }}></button>
                                <Route path='/dashboard/teams/:teamId' component={MyTaskIndexContainer} />
                            </div>
                            <Route path='/dashboard/teams/:teamId' component={CurrentTeamContainer} />
                        </div>
                    </nav>

                    <nav className='top-nav-bar-2'>
                        <Switch>
                            <Route path='/dashboard/teams/:teamId/projects/:projectId' component={CurrentProjectContainer} />
                            <Route path='/dashboard/teams/:teamId' component={CurrentProjectContainer} />
                        </Switch>
                        <Route path='/dashboard' component={DashboardRightBodyToggleTabs} />
                    </nav>

                    <section className='dashboard-body'>
                        <section className='dashboard-tasks-container'>
                            <div className='placeholder'></div>
                            <TaskBundle />
                            <div className='placeholder'></div>
                        </section>
                    </section>
                </div>
            </section>

        );
    }
}

export default DashboardRight;