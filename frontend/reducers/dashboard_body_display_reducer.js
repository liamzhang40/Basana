import {
    TOGGLE_DASHBOARD_BODY_DISPLAY
} from '../actions/display_toggle_actions';

const dashboardBodyDisplayReducer = (state = "list", action) => {
    switch (action.type) {
        case TOGGLE_DASHBOARD_BODY_DISPLAY:
            return action.content;
        default:
            return state;
    }
};

export default dashboardBodyDisplayReducer;
