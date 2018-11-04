import React from 'react';
import TeamMemberIndexItem from '../team/team_member_index_item';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.comment;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.taskId !== nextProps.taskId) {
      this.setState({ task_id: nextProps.taskId });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { processForm, toggleEditForm } = this.props;
    processForm(this.state).then(() => {
      if (toggleEditForm) {
        toggleEditForm();
      } else {
        this.setState({ content: "" });
        document.getElementById("comment-end").scrollIntoView({behavior: "smooth"});
      }
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    const { formType, toggleEditForm } = this.props;
    return (
      <div className={`${formType}-form`}>
        <div>
          { formType === "create-comment" &&
            <TeamMemberIndexItem
              member={ this.props.currentUser }
              listenerOn={ true }/>
          }
          <form onSubmit={ this.handleSubmit }>
            <textarea
              type='text'
              value={ this.state.content }
              placeholder='Write a comment...'
              onChange={ this.update('content') }></textarea>
            <div className='comment-form-util'>
              { formType === 'update-comment' &&
                <button className='update-comment-cancel' onClick={toggleEditForm}>Cancel</button>}
              <button className='task-button'>{formType === 'create-comment' ? 'Comment' : 'Save Changes'}</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
