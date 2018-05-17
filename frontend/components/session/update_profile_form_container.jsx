import React from 'react';
import { connect } from 'react-redux';
import { editProfile, editReduxProfile } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editProfile: user => dispatch(editProfile(user)),
    editReduxProfile: user => dispatch(editReduxProfile(user)),
    closeModal: () => dispatch(closeModal())
  };
};

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  update(field) {
    const { currentUser, editProfile, editReduxProfile} = this.props;

    return e => {
      editReduxProfile({id: currentUser.id, [field]: e.currentTarget.value});

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        editProfile(this.props.currentUser);
        this.timeout = null;
      }, 1000);

    };
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className='profile-form'>
        <h1>My Profile Settings</h1>
        <div className='profile-form-container'>
          <div className='profile-form-avatar'>
            <img src={currentUser.url} alt='Your Profile'/>
          </div>
          <div className='profile-name'>
            <label htmlFor='name-input'>Name</label>
            <input
              id='name-input'
              placeholder='Liam'
              type='text'
              value={ currentUser.name }
              onChange={ this.update('name') } />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
