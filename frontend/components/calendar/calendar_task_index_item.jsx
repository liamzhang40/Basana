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

    }

    handleMouse(visible) {
        return () => {
            if (visible) this.node.style.borderRadius = "4px 4px 0 4px";
            else this.node.style.borderRadius = "4px";
            this.setState({ visible });
        };
    }

    render() {
        const { assignee, task, updateTask, openModal } = this.props;
        return (
            <div className="calendar-task-index-item"
                ref={ node => { this.node = node; }}
                onMouseEnter={ this.handleMouse(true) }
                onMouseLeave={ this.handleMouse(false) }>
                { this.state.visible &&
                    <div className="button-container">
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