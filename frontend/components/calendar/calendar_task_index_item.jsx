import React from 'react';
import { connect } from 'react-redux';
import TeamMemberIndexItem from '../team/team_member_index_item';
import TaskCompletionButton from '../button/task_completion_button';

const mapStateToProps = (state, ownProps) => {
    return {
        assignee: ownProps.task.assignee_id ?
        state.entities.users[ownProps.task.assignee_id] :
        null
    };
};

class CalendarTaskIndexItem extends React.Component {
    constructor() {
        super();

        this.state = {
            visible: false
        };

        this.handleMouse = this.handleMouse.bind(this);
    }

    handleMouse() {
        this.setState({visible: !this.state.visible});
    }

    render() {
        const { assignee, task } = this.props;
        return (
            <div className="calendar-task-index-item"
                onMouseEnter={ this.handleMouse }
                onMouseLeave={ this.handleMouse }>
                { this.state.visible &&
                    <div 
                        className="button-container"
                        ref={node => { this.node = node; }}>
                        <TaskCompletionButton task={task}/>
                    </div>}
                <TeamMemberIndexItem 
                    member={assignee}/>
                <div className="calendar-task-index-item-name">{task.name}</div>
            </div>
        );

    }
};

export default connect(mapStateToProps)(CalendarTaskIndexItem);