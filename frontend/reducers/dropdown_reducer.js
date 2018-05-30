import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/dropdown_actions';
import { OPEN_MODAL } from '../actions/modal_actions';

const dropdownReducer = (state = null, action) => {
  switch(action.type) {
    case OPEN_DROPDOWN:
      return action.dropdown;
    case CLOSE_DROPDOWN:
    case OPEN_MODAL:
      return null;
    default:
      return state;
  }
};

export default dropdownReducer;
