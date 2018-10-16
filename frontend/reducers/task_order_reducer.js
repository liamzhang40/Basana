import {
    TOGGLE_TASK_ORDER
} from '../actions/task_actions';

const taskOrderReducer = (state = "None", action) => {
    Object.freeze(state);
    switch (action.type) {
        case TOGGLE_TASK_ORDER:
            return action.order;
        default:
            return state;
    }
};

export default taskOrderReducer;