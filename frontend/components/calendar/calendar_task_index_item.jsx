import React from 'react';
import { connect } from 'react-redux';
import TeamMemberIndexItem from '../team/team_member_index_item';

const mapStateToProps = (state, ownProps) => {
    return {
        assignee: ownProps.task.assignee_id ?
        state.entities.users[ownProps.task.assignee_id] :
        null
    };
};

const CalendarTaskIndexItem = ({ task, assignee }) => {
    return (
        <div className="calendar-task-index-item">
            <TeamMemberIndexItem 
                member={assignee}/>
            <div className="calendar-task-index-item-name">{task.name}</div>
        </div>
    );
};

export default connect(mapStateToProps)(CalendarTaskIndexItem);