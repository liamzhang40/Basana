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
    const { searchUser, clearUserSearch } = this.props;
    return (e) => {
      this.setState({emails: e.currentTarget.value});

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        if (this.state.emails) {
          searchUser(this.state.emails);
        } else {
          clearUserSearch();
        }
        this.timeout = null;
      }, 500);
    };
  }

  handleSubmit(e) {
    const { addMembers, teamId } = this.props;
    e.preventDefault();
    const emails = Object.assign({}, this.state).emails;
    addMembers({id: teamId, emails: emails});
    this.setState({emails: ''});
  }

  handleSearchList() {
    setTimeout(() => {
      this.setState({visible: !this.state.visible});
    }, 100);
  }

  render() {
    const userList = this.props.userSearches.map(user => {
      return <UserSearchItem
        key={user.id}
        user={user}
        setParentState={this.setState.bind(this)}
        clearUserSearch={this.props.clearUserSearch} />;
    });
    return (
      <div className='member-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Search to add team member...'
            type='text'
            onChange={ this.update() }
            onBlur={ this.handleSearchList }
            onFocus={ this.handleSearchList }
            value={ this.state.emails }/>
          <button className='dot'></button>
        </form>

        <ul
          className="user-search-list">
            { this.state.visible &&
              userList }
        </ul>
      </div>
    );
  }
}

export default TeamMemberForm;
