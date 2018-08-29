import React from 'react';
import { connect } from 'react-redux';
import DropdownButton from '../button/dropdown_button';
import ProjectOptionDropdownContainer from './project_option_dropdown_container';

const mapStateToProps = (state, ownProps) =>  {
  return {
    project: state.entities.projects[ownProps.match.params.projectId]
  };
};

const CurrentProject = ({ project }) => {
  if (!project) {
    return <div className='my-task'>My Task</div>;
  } else {
    return (
      <div
        className='current-project'>
        <span>{project.name}</span>
        <DropdownButton
          dropdown={ProjectOptionDropdownContainer}
          buttonStyle="⌄"
          type="current-project"/>
      </div>
    );
  }
};

// class CurrentProject extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: false
//     };
//
//     this.handleClick = this.handleClick.bind(this);
//     this.handleOutsideClick = this.handleOutsideClick.bind(this);
//   }
//
//   handleClick() {
//     if (!this.state.visible) {
//       document.addEventListener('mousedown', this.handleOutsideClick, false);
//     } else {
//       document.removeEventListener('mousedown', this.handleOutsideClick, false);
//     }
//
//     this.setState({visible: !this.state.visible});
//   }
//
//   handleOutsideClick(e) {
//     if (this.node.contains(e.target)) {
//       return;
//     }
//     this.handleClick();
//   }
//
//   render() {
//     const { project } = this.props;
//     if (!project) {
//       return (<div></div>);
//     } else {
//       return (
//         <div
//           ref = { node => this.node = node }
//           className='current-project'>
//           <span>{project.name}</span>
//           <span
//             className="down-arrow"
//             onClick={this.handleClick}>
//             ⌄
//             {
//               this.state.visible &&
//               <div className='dropdown-visible'>
//               </div>
//             }
//           </span>
//         </div>
//       );
//     }
//   }
// }

export default connect(mapStateToProps)(CurrentProject);
