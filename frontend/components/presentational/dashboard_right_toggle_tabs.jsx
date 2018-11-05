import React from 'react';
import { connect } from 'react-redux';
import { toggleDashboardDisplay } from '../../actions/display_toggle_actions';

const mapStateToProps = state => {
    return {
        displayingContent: state.ui.dashboardBodyDisplay 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleDashboardDisplay: content => dispatch(toggleDashboardDisplay(content))
    };
};

const DashboardRightToggleTabs = ({ displayingContent, toggleDashboardDisplay, history, match }) => {
    const handleClick = content => (
        () => {
            const { teamId, projectId, userId } = match.params;
            toggleDashboardDisplay(content);
            if (content === "calendar") {
                history.push(`/dashboard/teams/${teamId}/${projectId ? "projects" : "users"}/${projectId || userId}`);
            }
        }
    );

    const li = ["list", "calendar"].map((content, idx) => (
        <li 
            key={idx}
            onClick={handleClick(content)}
            style={displayingContent === content ?
                { 
                    color: "#008CD1",
                    borderColor: "#008ce3"
                } :
                {}}>{content}</li>
    ));

    return (
        <ul className="dashboard-right-body-toggle-tabs">
            {li}
        </ul>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRightToggleTabs);