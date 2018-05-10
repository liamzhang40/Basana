import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import dropdownReducer from './dropdown_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  dropdown: dropdownReducer
});

export default uiReducer;
