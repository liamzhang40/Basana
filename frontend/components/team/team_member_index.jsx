import React from 'react';
import TeamMemberForm from './team_member_form';

class TeamMemberIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchMembers(this.props.match.params.teamId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
      this.props.fetchMembers(nextProps.match.params.teamId);
    }
  }

  render() {
    return (
      <div className='team-members'>
        <TeamMemberForm
          teamId={this.props.match.params.teamId}
          addMembers={this.props.addMembers}/>
        <ul>
          {this.props.members.map(member => {
            return member ? member.name : "";
          })}
        </ul>
      </div>
    );
  }
}

export default TeamMemberIndex;
