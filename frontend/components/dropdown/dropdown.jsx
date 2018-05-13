import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { closeDropdown } from '../../actions/dropdown_actions';
import TeamIndexContainer from '../team/team_index_container';

const mapStateToProps = state => {
  return {
    dropdown: state.ui.dropdown
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    closeDropdown: () => dispatch(closeDropdown())
  };
};

const Dropdown = ({ dropdown, closeDropdown }) => {
  if (!dropdown) {
    return null;
  }

  let component;
  let formType;
  switch (dropdown) {
    case 'switchteam':
      component = <Route path='/dashboard/teams/:teamId' component={TeamIndexContainer} />;
      formType = 'team'
      break;
    case 'updateproject':
      component = <Route path='/dashboard/teams/:teamId' component={TeamIndexContainer} />;
      formType = 'project'
      break;
    default:
      return null;
  }

  return (
    <div className={`${formType}-dropdown-background`} onClick={closeDropdown}>
      <div className={`${formType}-dropdown-child`} onClick={ e => e.stopPropagation() }>
        {component}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
