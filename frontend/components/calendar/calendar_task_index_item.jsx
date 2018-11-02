import React from 'react';
import { connect } from 'react-redux';
import TeamMemberIndexItem from '../team/team_member_index_item';
import TaskCompletionButton from '../button/task_completion_button';
import { updateTask } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        assignee: ownProps.task.assignee_id ?
        state.entities.users[ownProps.task.assignee_id] :
        null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateTask: task => dispatch(updateTask(task)),
        openModal: modal => dispatch(openModal(modal))
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
        const { assignee, task, updateTask, openModal } = this.props;
        return (
            <div className="calendar-task-index-item"
                onMouseEnter={ this.handleMouse }
                onMouseLeave={ this.handleMouse }>
                { this.state.visible &&
                    <div 
                        className="button-container"
                        ref={node => { this.node = node; }}>
                        <TaskCompletionButton task={task} updateTask={updateTask}/>
                    </div>}
                <div onClick={() => openModal({ type: "edittask", task: this.props.task })}>
                    <TeamMemberIndexItem 
                        member={assignee}/>
                    <div className="calendar-task-index-item-name">{task.name}</div>
                </div>
            </div>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarTaskIndexItem);