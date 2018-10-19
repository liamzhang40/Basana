import React from 'react';
import { connect } from 'react-redux';
import { toggleTaskOrder } from '../../../actions/task_actions';

const mapStateToProps = state => {
    return {
        taskOrder: state.ui.taskOrder
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleTaskOrder: order => dispatch(toggleTaskOrder(order))
    };
};

const TaskSortOptionDropdown = ({taskOrder, toggleTaskOrder, projectId}) => {
    const orderCategory = projectId ? 
    ["None", "Due Date", "Likes"] :
    ["None", "Project", "Due Date", "Likes"];
    const li = orderCategory.map((order, idx) => (
        <li key={idx}>
            <label>
                <input type="radio"
                checked={taskOrder === order}
                name="task-sort"
                value={order} 
                onChange={ () => {toggleTaskOrder(order);} }/>
                {order}
            </label>
        </li>
    ));

    return (
        <div className="task-sort-option-dropdown">
            <div>Sort by</div>
            <ul>
                {li}
            </ul>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskSortOptionDropdown);