import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Slider, Input, Col, Form, Typography, message,
} from 'antd';
import { postHydraulicParam } from '../../../api';
import ParameterButton from './ParameterButton';

const Parameter = ({
  signalName,
  parameter,
  name,
  min,
  max,
  unit = '',
  step = 1,
  float = 0,
  span = 11,
  speed = 60,
  displayConversion = (e) => e,
  sendConversion = (e) => e,
}) => {
  const value = useSelector((state) => state.Hydraulics[signalName][`parameter_${parameter}`]);
  const displayValue = useMemo(() => displayConversion(value), [value, displayConversion]);
  const [sliderValue, setSliderValue] = useState(displayValue);
  const [inputValue, setInputValue] = useState(displayValue);
  const [sliderChanging, setSliderChanging] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  useEffect(() => {
    if (!sliderChanging && !buttonPressed) {
      if (sliderValue !== displayValue) {
        setSliderValue(displayValue);
      }
      if (inputValue !== displayValue) {
        setInputValue(displayValue);
      }
    }
  }, [displayValue, sliderChanging, buttonPressed]);

  const onSliderChange = (val) => {
    setSliderChanging(true);
    setSliderValue(val);
    postHydraulicParam(signalName, parameter, sendConversion(val));
  };

  const isNumber = (n) => /^-?[\d.]+(?:e-?\d+)?$/.test(n);

  const submitInputValue = (e) => {
    e.preventDefault();
    let val = inputValue;
    if (isNumber(val)) {
      if (val >= max) {
        val = max;
        message.warning(`That value is too high, try a number between ${min} & ${max}`);
        setInputValue(displayValue);
      } else if (val < min) {
        val = min;
        message.warning(`That value is too low, try a number between ${min} & ${max}`);
        setInputValue(displayValue);
      } else {
        postHydraulicParam(
          signalName,
          parameter,
          sendConversion(val),
        );
      }
    } else {
      message.warning(`Please submit a number between ${min} and ${max}, what you have submitted is not a number`);
      setInputValue(displayValue);
    }
  };

  return (
    <Col xs={24} sm={span} className="hydraulic-parameter">
      <Typography.Text type="secondary">{`${name} ${unit && `(${unit})`}`}</Typography.Text>
      <Slider
        value={sliderChanging ? sliderValue : displayValue}
        min={min}
        max={max}
        step={step}
        onChange={onSliderChange}
        onAfterChange={() => setTimeout(() => setSliderChanging(false), 500)}
      />
      <Col span={24}>
        <Form onSubmit={submitInputValue}>
          <Form.Item className="hydraulic-parameter-input">
            <ParameterButton
              onClick={() => {
                const belowMin = inputValue <= min;
                if (!belowMin) {
                  setButtonPressed(true);
                  const val = (parseFloat(inputValue) - parseFloat(step)).toFixed(float);
                  postHydraulicParam(
                    signalName,
                    parameter,
                    sendConversion(val),
                  );
                  setInputValue(val);
                }
              }}
              speed={speed}
              disabled={displayValue <= min}
              onRelease={() => setTimeout(() => setButtonPressed(false), 500)}
              icon="arrow-down"
            />
            <Input
              min={min}
              max={max}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              step={step}
            />
            <ParameterButton
              onClick={() => {
                const aboveMax = inputValue >= max;
                if (!aboveMax) {
                  setButtonPressed(true);
                  const val = (parseFloat(inputValue) + parseFloat(step)).toFixed(float);
                  postHydraulicParam(
                    signalName,
                    parameter,
                    sendConversion(val),
                  );
                  setInputValue(val);
                }
              }}
              speed={speed}
              disabled={displayValue >= max}
              onRelease={() => setTimeout(() => setButtonPressed(false), 500)}
              icon="arrow-up"
            />
          </Form.Item>
        </Form>
      </Col>
    </Col>
  );
};

Parameter.propTypes = {
  name: PropTypes.string.isRequired,
  signalName: PropTypes.string.isRequired,
  parameter: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  unit: PropTypes.string,
  step: PropTypes.number,
  displayConversion: PropTypes.func,
  sendConversion: PropTypes.func,
  float: PropTypes.number,
  span: PropTypes.number,
  speed: PropTypes.number,
};

export default Parameter;
