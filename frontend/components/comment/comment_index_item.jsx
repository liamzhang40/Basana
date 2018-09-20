import React from 'react';
import TeamMemberIndexItem from '../team/team_member_index_item';
import DropdownButton from '../button/dropdown_button';
import CommentOptionDropdownContainer from './comment_option_dropdown_container';
import UpdateCommentFormContainer from './update_comment_form_container';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  render() {
    const { comment } = this.props;
    return (
      <div className='comment-feed-container'>
        <TeamMemberIndexItem member={ comment.author }/>
        <div className='comment-feed-content'>
          <div>{ comment.author.name }</div>
          {this.state.visible && <UpdateCommentFormContainer comment={comment}/> || <div>{ comment.content }</div>}
        </div>
        <DropdownButton
          dropdown={ () => <CommentOptionDropdownContainer comment={comment} toggleEditForm={() => this.setState({visible: !this.state.visible})}/>}
          buttonStyle={ () => <svg viewBox="0 0 32 32"><path d="M16,22.5c-0.3,0-0.7-0.1-0.9-0.3l-11-9c-0.6-0.5-0.7-1.5-0.2-2.1c0.5-0.6,1.5-0.7,2.1-0.2L16,19.1l10-8.2c0.6-0.5,1.6-0.4,2.1,0.2c0.5,0.6,0.4,1.6-0.2,2.1l-11,9C16.7,22.4,16.3,22.5,16,22.5z"></path></svg> }
          type="comment"/>
      </div>
    );
  }
}

export default CommentIndexItem;
