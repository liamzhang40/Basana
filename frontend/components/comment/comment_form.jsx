import React from 'react';
import TeamMemberIndexItem from '../team/team_member_index_item';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.comment;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createComment } = this.props;
    createComment(this.state).then(() => {
      this.setState({ content: "" });
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    return (
      <div className='comment-form'>
        <div>
          <TeamMemberIndexItem
            member={ this.props.currentUser }
            listenerOn={ true }/>
          <form onSubmit={ this.handleSubmit }>
            <textarea
              type='text'
              value={ this.state.content }
              placeholder='Write a comment...'
              onChange={ this.update('content') }></textarea>
            <div className='comment-form-util'>
              <button className='task-button'>Comment</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
