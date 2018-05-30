import React from 'react';
import { connect } from 'react-redux';
import TeamMemberIndexItem from './team_member_index_item';
import TeamDropdownContainer from './team_dropdown_container';

const mapStateToProps = (state, ownProps) => {
  return {
    team: state.entities.teams[ownProps.match.params.teamId],
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

class CurrentTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClick() {
    if(!this.state.visible) {
      document.addEventListener("mousedown", this.handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", this.handleOutsideClick);
    }

    this.setState({visible: !this.state.visible});
  }

  handleOutsideClick(e) {
    if(this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    const { team, currentUser } = this.props;
    if (!team) {
      return (<div></div>);
    } else {
      return (
        <span
          ref = { node => this.node = node }
          className='current-team'
          onClick={this.handleClick}>
          {team.name}
          <TeamMemberIndexItem member={ currentUser } />
          { this.state.visible &&
          <TeamDropdownContainer currentTeam={team}/>}
        </span>
      );
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTeam);
