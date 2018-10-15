import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import CommentIndexItem from './comment_index_item';

const mapStateToProps = state => {
  return {
    comments: Object.values(state.entities.comments),
    errors: state.errors.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (taskId, commentsCount, commentsPerFetch) => dispatch(fetchComments(taskId, commentsCount, commentsPerFetch))
  };
};

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false
    };

    this.timeout = null;
    this.commentsPerFetch = 0;
    this.commentsCount = 0;
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    // sometimes sends one extra request because switching between tasks also triggers onScroll
    if (this.box.scrollTop === 0 && !this.props.errors.length) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.setState({isFetching: true});
      
      this.timeout = setTimeout(() => {
        this.commentsCount += this.commentsPerFetch;
        this.props.fetchComments(this.props.taskId, this.commentsCount, this.commentsPerFetch).then(() => {
          this.setState({ isFetching: false });
        });
        this.timeout = null;
      }, 1000);
    }
  }

  componentDidMount() {
    this.commentsPerFetch = Math.ceil(this.box.clientHeight / 62);
    // 62 is height of each comment feed
    this.props.fetchComments(this.props.taskId, this.commentsCount, this.commentsPerFetch).then(res => {
      this.commentEnd.scrollIntoView();
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.taskId !== nextProps.taskId) {
      this.commentsCount = 0;
      this.props.fetchComments(nextProps.taskId, this.commentsCount, this.commentsPerFetch).then(res => {
        this.commentEnd.scrollIntoView();
      });
    }
  }

  render() {
    const { comments, errors } = this.props;
    const li = comments.map(comment => {
      return <CommentIndexItem
        key={comment.id}
        comment={comment}/>;
    });

    return (
      <div
        className='comment-list'
        ref={ node => {this.box = node;} }
        onScroll={this.handleScroll}>
        { this.state.isFetching ?
          <img className="comment-loading"
          src="https://raw.githubusercontent.com/liamzhang40/Basana/master/app/assets/images/comment_loading.gif"
          alt="loading..."/> :
          <div>{errors.length || comments.length < this.commentsPerFetch ? errors[0] : "scroll up for more..."}</div>
        }
        <ul>
          {li}
        </ul>
        <div id="comment-end" ref={ node => {this.commentEnd = node;}}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
