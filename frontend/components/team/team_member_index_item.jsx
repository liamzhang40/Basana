import React from 'react';

class TeamMemberIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.handleClickOn) {
      const { member } = this.props;

    }
  }

  handleHover() {
    if (this.props.handleHoverOn) {
      if (this.state.visible) this.setState({ visible: false });
      else this.setState({ visible: true });
    }
  }

  render() {
    const { member } = this.props;
    let url = ' ';
    if (member) {
      url = member.url;
      return (
        <div
          className='member-avatar'
          onClick={this.handleClick}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}>
          <img src={url}/>

          { this.state.visible &&
            <div className='profile-dropdown'>
              <span>{member.name}</span>
            </div>
          }
        </div>
      );
    }

    return (
      <div className='empty-avatar'>
        <svg viewBox="0 0 32 32">
          <path d="M20.534,16.765C23.203,15.204,25,12.315,25,9c0-4.971-4.029-9-9-9S7,4.029,7,9c0,3.315,1.797,6.204,4.466,7.765C5.962,18.651,2,23.857,2,30c0,0.681,0.065,1.345,0.159,2h27.682C29.935,31.345,30,30.681,30,30C30,23.857,26.038,18.651,20.534,16.765z M9,9c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S9,12.86,9,9z M4,30c0-6.617,5.383-12,12-12s12,5.383,12,12H4z"></path>
        </svg>
      </div>
    );
  }
}

export default TeamMemberIndexItem;
