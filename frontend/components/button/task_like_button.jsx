import React from 'react';
import { connect } from 'react-redux';
import { likeTask, unlikeTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserlikedTask: ownProps.task ? 
        ownProps.task.likers.includes(state.session.id):
        ""
    };
};

const mapDispatchToProps = dispatch => {
    return {
        likeTask: taskId => dispatch(likeTask(taskId)),
        unlikeTask: taskId => dispatch(unlikeTask(taskId))
    };
};

const TaskLikeButton = ({ task, likeTask, unlikeTask, currentUserlikedTask}) => {
    const handleClick = () => {
        if (currentUserlikedTask) {
            unlikeTask(task.id);
        } else {
            likeTask(task.id);
        }
    };

    return (
        <button 
            className='like-button task-button'
            onClick={handleClick}>
            <svg 
                width="17px" 
                viewBox="0 0 32 32" 
                fill={ currentUserlikedTask ? "#32c1ff" : "none" }
                stroke={ currentUserlikedTask ? "#32c1ff": "#848f99" }>
                <path d="M5,15c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h1.9c0.6,0,1-0.4,1-1V16c0-0.6-0.4-1-1-1H5z" />
                <path d="M26.5,13H19V7.5c0-1.6-0.7-3-2-4l0,0c-1-0.8-2.5-0.4-3,0.7l-3.3,9c-0.4,1-0.5,2-0.5,3V28c0,0.6,0.4,1,1,1h13.9c1.5,0,2.7-1.1,3-2.5l1.6-10C29.7,14.6,28.3,13,26.5,13z" />
            </svg>
            <span>{ task ? task.likers.length : "" }</span>
        </button>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskLikeButton);