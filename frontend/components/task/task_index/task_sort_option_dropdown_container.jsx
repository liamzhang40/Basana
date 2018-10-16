import React from 'react';
import { connect } from 'react-redux';
import { toggleTaskOrder } from '../../../actions/task_actions';

const mapDispatchToProps = dispatch => {
    return {
        toggleTaskOrder: order => dispatch(toggleTaskOrder(order))
    };
};

const TaskSortOptionDropdown = ({toggleTaskOrder}) => {
    const orderCategory = ["None", "Project", "Due Date", "Likes"];
    const li = orderCategory.map((order, idx) => (
        <li key={idx}>
            <label>
                <input type="radio"
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

export default connect(null, mapDispatchToProps)(TaskSortOptionDropdown);