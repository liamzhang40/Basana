import React from 'react';

class DropdownButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    if (!this.state.visible) {
      document.addEventListener('mousedown', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('mousedown', this.handleOutsideClick, false);
    }

    this.setState({visible: !this.state.visible});
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    const Dropdown = this.props.dropdown;
    const { type, buttonStyle } = this.props;
    return (
      <div
        className={`${type}-option-button`}
        ref={ node => this.node = node }
        onClick={this.handleClick}>
        { buttonStyle() }
        { this.state.visible &&
          <div className={`${type}-option-dropdown-visible`}>
            <Dropdown />
          </div>
        }
      </div>
    );
  }
}



export default DropdownButton ;
