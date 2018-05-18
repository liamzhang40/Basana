import React from 'react';

class TeamMemberIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleMouse = this.handleMouse.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { member, fetchAssigneeTasks } = this.props;
    if (fetchAssigneeTasks) fetchAssigneeTasks(member.id);
  }

  handleMouse() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    const { member } = this.props;
    let url = ' ';
    if (member) {
      url = member.url;
      return (
        <div>
          <li
            className='member-avatar'
            onClick={this.handleClick}
            onMouseEnter={this.handleMouse}
            onMouseLeave={this.handleMouse}>
            <img src={url}/>

          </li>

          { this.state.visible &&
            <div className='profile-dropdown'>
              <span>{member.name}</span>
            </div>
          }
        </div>
      );
    }

    return (
      <li className='empty-avatar'>
        <svg viewBox="0 0 32 32">
          <path d="M20.534,16.765C23.203,15.204,25,12.315,25,9c0-4.971-4.029-9-9-9S7,4.029,7,9c0,3.315,1.797,6.204,4.466,7.765C5.962,18.651,2,23.857,2,30c0,0.681,0.065,1.345,0.159,2h27.682C29.935,31.345,30,30.681,30,30C30,23.857,26.038,18.651,20.534,16.765z M9,9c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S9,12.86,9,9z M4,30c0-6.617,5.383-12,12-12s12,5.383,12,12H4z"></path>
        </svg>
      </li>
    );
  }
}

export default TeamMemberIndexItem;
