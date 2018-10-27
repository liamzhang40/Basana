import React from 'react';
import { connect } from 'react-redux';
import { likeTask, unlikeTask } from '../../actions/task_actions';

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {
    return {
        likeTask: taskId => dispatch(likeTask(taskId)),
        unlikeTask: taskId => dispatch(unlikeTask(taskId))
    };
};

const TaskLikeButton = ({ task, likeTask, unlikeTask}) => {
    const handleClick = () => {

    };

    return (
        <button 
            className='like-button task-button'
            onClick={handleClick}>
            <svg viewBox="0 0 32 32" width="15px">
                <path d="M29.6,13.3c-0.8-0.9-1.9-1.4-3.1-1.4h-6.4V7.5c0-1.9-0.9-3.8-2.5-4.9c-0.7-0.6-1.7-0.8-2.6-0.5c-0.9,0.2-1.7,0.8-2,1.7L8.3,13.9H5c-1.7,0-3.1,1.4-3.1,3.1v10c0,1.7,1.4,3.1,3.1,3.1h2.9H9h15.9c2,0,3.7-1.5,4-3.5l1.6-10C30.7,15.4,30.4,14.2,29.6,13.3z M5,27.9c-0.5,0-0.9-0.4-0.9-0.9V17c0-0.5,0.4-0.9,0.9-0.9h2.9v11.8H5z M28.4,16.3l-1.6,10c-0.1,0.9-0.9,1.6-1.9,1.6H10.1V15.2L15,4.7c0.2-0.3,0.4-0.5,0.6-0.5c0.2,0,0.5-0.1,0.8,0.2c1,0.7,1.6,1.9,1.6,3.2v6.6h8.6c0.6,0,1.1,0.2,1.5,0.7C28.3,15.2,28.5,15.7,28.4,16.3z" />
            </svg>
        </button>
    );
};

export default connect(null, mapDispatchToProps)(TaskLikeButton);