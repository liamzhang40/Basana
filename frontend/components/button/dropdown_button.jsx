import React from 'react';

class DropdownButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.visible) {
      if (this.props.insideClick === "enable" &&
      this.node.contains(e.target)) return;
      document.removeEventListener('click', this.handleClick, false);
    } else {
      document.addEventListener('click', this.handleClick, false);
    }

    this.setState({visible: !this.state.visible});
  }

  render() {
    const { type, buttonStyle, payload, dropdown } = this.props;
    return (
      <div
        className={`${type}-option-button`}
        onClick={this.handleClick}>
          { buttonStyle() }
          <div ref={node => { this.node = node; }}>
            { this.state.visible &&
              <div className={`${type}-option-dropdown-visible`}>
                { dropdown() }
              </div>
            }
          </div>
      </div>
    );
  }
}



export default DropdownButton ;
