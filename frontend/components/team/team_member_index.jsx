import React from 'react';
import TeamMemberFormContainer from './team_member_form_container';
import TeamMemberIndexItem from './team_member_index_item';

class TeamMemberIndex extends React.Component {

  componentDidMount() {
    this.props.fetchMembers(this.props.match.params.teamId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
      this.props.fetchMembers(nextProps.match.params.teamId);
    }
  }

  render() {
    const { match, fetchAssigneeTasks } = this.props;
    let { members } = this.props;
    if (members.some(member => member === undefined)) members = [];

    const li = members.map(member => {
      return <li key={member.id}>
        <TeamMemberIndexItem
          member={member}
          fetchAssigneeTasks={fetchAssigneeTasks}
          listenerOn={true}/>
      </li>;
    });

    if (li.length < 6) {
      const length = li.length;
      for (let i = 0; i < 6 - length; i++) {
        li.push(<li key={i}>
        <TeamMemberIndexItem 
          member={undefined} />
        </li>);
      }
    }

    return (
      <div className='team-members-section'>
        <div className='team-members'>
          <div className="team-members-header">
            <h2>MEMBERS</h2>
          </div>
          <ul className='member-list'>
            {li}
          </ul>
          <TeamMemberFormContainer
            teamId={match.params.teamId}/>
        </div>
      </div>
    );
  }
}

export default TeamMemberIndex;
