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

class CurrentTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleClick() {
    if(!this.state.visible) {
      document.addEventListener("click", )
    }
  }

  handleOutsideClick() {

  }

  render() {
    const { team, currentUser } = this.props;
    if (!team) {
      return (<div></div>);
    } else {
      return (
        <span className='current-team' onClick={() => openDropdown()}>
          {team.name}
          <TeamMemberIndexItem member={ currentUser } />
        </span>
      );
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTeam);
