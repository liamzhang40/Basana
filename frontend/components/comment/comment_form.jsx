import React from 'react';
import TeamMemberIndexItem from '../team/team_member_index_item';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.comment;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    return (
      <div>
        <TeamMemberIndexItem />
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea
              type='text'
              value={this.state.content}
              onChange={this.update('content')}></textarea>
            <button>Comment</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
