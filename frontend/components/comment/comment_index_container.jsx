import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import CommentIndexItem from './comment_index_item';

const mapStateToProps = state => {
  return {
    comments: Object.values(state.entities.comments)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (taskId, commentsCount) => dispatch(fetchComments(taskId, commentsCount))
  };
};

class CommentIndex extends React.Component {
  constructor() {
    super();

    this.commentsCount = 10;
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (this.refs.iScroll.scrollTop === 0) {
      this.props.fetchComments(this.props.taskId, this.commentsCount);
    }
  }

  componentDidMount() {
    this.props.fetchComments(this.props.taskId, this.commentsCount);
    this.commentsCount += 10;
  }

  componentWillReceiveProps(nextProps) {
    this.commentsCount = 0;
    if (this.props.taskId !== nextProps.taskId) {
      this.props.fetchComments(nextProps.taskId, this.commentsCount);
    }
  }

  render() {
    const { comments } = this.props;
    const li = comments.map(comment => {
      return <CommentIndexItem
        key={comment.id}
        comment={comment}/>;
    });

    return (
      <div
        className='comment-list'
        ref='iScroll'
        onScroll={this.handleScroll}>
        {li}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
