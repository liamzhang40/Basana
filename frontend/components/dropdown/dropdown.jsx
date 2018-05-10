import React from 'react';
import { connect } from 'react-redux';
import { closeDropdown } from '../../actions/dropdown_actions';
import TeamIndexContainer from '../team/team_index_container'

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
  switch (dropdown) {
    case 'switchteam':
      component = <TeamIndexContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className='dropdown-background' onClick={closeDropdown}>
      <div className='dropdown-child' onClick={ e => e.stopPropagation() }>
        {component}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
