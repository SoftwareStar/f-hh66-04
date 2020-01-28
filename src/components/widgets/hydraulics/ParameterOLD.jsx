import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Slider, Col, Form, Input, Typography,
} from 'antd';
import ParameterButton from './ParameterButton';
import { postHydraulicParam } from '../../../api';

class Parameter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: parseInt(props.value.toFixed(0), 10),
      numberInputValue: parseInt(props.value.toFixed(0), 10),
      sliding: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    const { sliding, buttonPressed } = this.state;
    if ((value !== nextProps.value) && !sliding) {
      this.setState({ value: parseInt(nextProps.value.toFixed(0), 10) });
    }
    if (value !== nextProps.value && (!buttonPressed)) {
      this.setState({ numberInputValue: parseInt(nextProps.value.toFixed(0), 10) });
    }
  }

  render() {
    const {
      name,
      minValue,
      maxValue,
      span,
      sm,
      signalName,
      format,
      parameter,
      step,
    } = this.props;

    const {
      value,
      numberInputValue,
    } = this.state;


    const onChange = (val) => {
      if ((val >= minValue) && (val <= maxValue)) {
        this.setState({
          value: val,
          sliding: true,
        });
        postHydraulicParam(signalName, parameter, val);
      } else if (val >= maxValue) {
        this.setState({
          value: maxValue,
        });
      }
    };

    const isNumberKey = (evt) => {
      const charCode = (evt.which) ? evt.which : evt.keyCode;
      return (charCode > 31 && (charCode < 48 || charCode > 57));
    };

    const buttonPressDown = () => {
      this.setState({ buttonPressed: true });
      if ((parseInt(numberInputValue, 10) - 1) >= minValue) {
        postHydraulicParam(signalName, parameter, parseInt(numberInputValue, 10) - step);
        this.setState({ numberInputValue: parseInt(numberInputValue, 10) - step });
      }
    };

    const buttonPressUp = () => {
      this.setState({ buttonPressed: true });
      if ((parseInt(numberInputValue, 10) + 1) <= maxValue) {
        postHydraulicParam(signalName, parameter, parseInt(numberInputValue, 10) + step);
        this.setState({ numberInputValue: parseInt(numberInputValue, 10) + step });
      }
    };

    const onButtonRelease = () => {
      const self = this;
      setTimeout(() => {
        self.setState({
          buttonPressed: false,
          numberInputValue: parseInt(self.props.value.toFixed(0), 10),
          value: parseInt(self.props.value.toFixed(0), 10),
        });
      }, 1500);
    };

    const onNumberInputChange = (e) => {
      const re = /^[1-9]\d*(\.\d+)?$/;
      if (re.test(e.target.value)) {
        if (parseInt(e.target.value, 10) >= maxValue) {
          this.setState({ numberInputValue: maxValue });
        } else if (parseInt(e.target.value, 10) <= minValue) {
          this.setState({ numberInputValue: minValue });
        } else {
          this.setState({ numberInputValue: parseInt(e.target.value, 10).toFixed(0) });
        }
      } else if (e.target.value === '') {
        this.setState({ numberInputValue: minValue });
      }
    };

    const submitChange = (e) => {
      e.preventDefault();
      postHydraulicParam(signalName, parameter, numberInputValue);
    };

    const onAfterChange = () => {
      const self = this;
      setTimeout(() => {
        self.setState({
          sliding: false,
        });
      }, 500);
    };

    const formatter = (val) => {
      if (format) {
        return `${val} ${format}`;
      }
      return val;
    };

    const renderSlider = () => {
      if (signalName.includes('Throttle')) {
        return null;
      }
      if (value !== -1) {
        return (
          <Col span={24}>
            <Slider
              min={minValue}
              max={maxValue}
              step={step}
              onChange={onChange}
              onAfterChange={onAfterChange}
              value={value}
              tipFormatter={(e) => formatter(e)}
            />
          </Col>
        );
      }
      return (
        <Col span={24}>
          <Col span={24}>
            <p className="battery-number">N/A</p>
          </Col>
        </Col>
      );
    };

    return (
      <Col xs={24} sm={sm} md={span} lg={span} xl={span} className="hydraulic-parameter">
        <Typography.Text type="secondary">{`${name} ${format ? `(${format})` : ''}`}</Typography.Text>
        {renderSlider()}
        {value !== -1
            && (
              <Col span={24}>
                <Form onSubmit={submitChange}>
                  <Form.Item className="hydraulic-parameter-input">
                    <ParameterButton
                      onRelease={onButtonRelease}
                      onClick={buttonPressDown}
                      icon="arrow-down"
                    />
                    <Input
                      min={minValue}
                      max={maxValue}
                      onKeyDown={isNumberKey}
                      value={numberInputValue}
                      onChange={onNumberInputChange}
                      step={step}
                    />
                    <ParameterButton
                      onRelease={onButtonRelease}
                      onClick={buttonPressUp}
                      icon="arrow-up"
                    />
                  </Form.Item>
                </Form>
              </Col>
            )}
      </Col>
    );
  }
}

Parameter.defaultProps = {
  sm: 11,
  step: 1,
  format: '',
};

Parameter.propTypes = {
  name: PropTypes.string.isRequired,
  signalName: PropTypes.string.isRequired,
  parameter: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  format: PropTypes.string,
  span: PropTypes.number,
  sm: PropTypes.number,
  step: PropTypes.number,
};

function mapStateToProps(state, ownProps) {
  return {
    value: state.Hydraulics[ownProps.signalName][`parameter_${ownProps.parameter}`],
  };
}

export default connect(mapStateToProps)(Parameter);
