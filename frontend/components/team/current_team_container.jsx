import React from 'react';
import { connect } from 'react-redux';
import { openDropdown } from '../../actions/dropdown_actions';
import TeamMemberIndexItem from './team_member_index_item';

const mapStateToProps = (state, ownProps) => {
  return {
    team: state.entities.teams[ownProps.match.params.teamId],
    currentUser: state.entities.users[state.session.id]
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
    return (<div></div>);
  } else {
    return (
      <button className='current-team' onClick={() => props.openDropdown()}>
        {props.team.name}
        <TeamMemberIndexItem member={props.currentUser}/>
      </button>
    );
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(CurrentTeam);
