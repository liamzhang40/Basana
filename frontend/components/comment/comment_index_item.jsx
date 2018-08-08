import React from 'react';
import TeamMemberIndexItem from '../team/team_member_index_item';

class CommentIndexItem extends React.Component {

  render() {
    const { comment } = this.props;
    return (
      <div className='comment-feed-container'>
        <TeamMemberIndexItem member={ comment.author }/>
        <div className='comment-feed-content'>
          <div>{ comment.author.name }</div>
          <div>{ comment.content }</div>
        </div>
      </div>
    );
  }
}

export default CommentIndexItem;
