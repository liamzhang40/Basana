import React from 'react';
import UserSearchItem from './user_search_item';

class TeamMemberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: '',
      visible: false
    };
    this.timeout = null;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchList = this.handleSearchList.bind(this);
  }

  update() {
    return (e) => {
      this.setState({emails: e.currentTarget.value});

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        if (this.state.emails) {
          this.props.searchUser(this.state.emails);
        } else {
          this.props.clearUserSearch();
        }
        this.timeout = null;
      }, 500);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const emails = Object.assign({}, this.state).emails;
    this.props.addMembers({id: this.props.teamId, emails: emails});
    this.setState({emails: ''});
  }

  handleSearchList() {
    this.setState({'visible': !this.state.visible});
  }

  render() {
    const userList = this.props.userSearches.map(user => {
      return <UserSearchItem
        key={user.id}
        user={user}
        setParentState={this.setState} />;
    });
    return (
      <div className='member-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Separate emails with commas'
            type='text'
            onChange={ this.update() }
            onFocus={ this.handleSearchList }
            onBlur={ this.handleSearchList }
            value={ this.state.emails }/>
          <button className='dot'></button>
        </form>

        <ul className="user-search-list">
          { this.state.visible &&
            userList}
        </ul>
      </div>
    );
  }
}

export default TeamMemberForm;
