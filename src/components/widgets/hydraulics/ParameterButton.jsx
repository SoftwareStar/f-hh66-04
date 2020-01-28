import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

class ParameterButton extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
    this.timer = null;
    this.addOne = this.addOne.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  addOne() {
    const { onClick } = this.props;
    const { clicked } = this.state;
    onClick();
    if (clicked) {
      this.timer = setTimeout(this.addOne, 60);
    } else {
      this.timer = setTimeout(this.addOne, 1000);
      this.setState({ clicked: true });
    }
  }

  stopTimer() {
    const { onRelease } = this.props;
    clearTimeout(this.timer);
    onRelease();
    this.setState({ clicked: false });
  }

  render() {
    const { icon, disabled } = this.props;

    return (
      <Button icon={icon} onMouseDown={this.addOne} disabled={disabled} onMouseUp={this.stopTimer} onBlur={this.stopTime} className="hydraulic-parameter-button" />
    );
  }
}

ParameterButton.defaultProps = {
  disabled: false,
};

ParameterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRelease: PropTypes.func.isRequired,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ParameterButton;
