import React from 'react';
import { connect } from 'react-redux';
import { openDropdown } from '../../actions/dropdown_actions';

const mapStateToProps = ( state, ownProps ) => {
  return {
    team: state.entities.teams[ownProps.match.params.teamId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openDropdown: () => dispatch(openDropdown('switchteam'))
  };
};

const CurrentTeam = props => {
  // fetching team from team index is asychronous so in first render
  // teams state is still empty
  if (!props.team) {
    return <div></div>;
  } else {
    return (
      <button className='current-team' onClick={() => props.openDropdown()}>
        {props.team.name}
      </button>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTeam);
