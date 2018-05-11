import React from 'react';

class TeamMemberIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMembers(this.props.memberIds);
  }

  render() {
    return (
      <ul>
        {this.props.members.map(member => {
          return member ? member.name : "";
        })}
      </ul>
    );
  }
}

export default TeamMemberIndex;
