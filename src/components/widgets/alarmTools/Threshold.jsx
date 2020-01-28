import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Slider, Typography } from 'antd';
import { postAlarmUpdate } from '../../../actions/actions';

const { Paragraph } = Typography;

const Threshold = ({
  name,
  threshold,
  maximum,
  minimum,
  format,
  convertFunction = null,
  step,
}) => {
  const [value, setValue] = useState(threshold);
  const dispatch = useDispatch();
  const formatter = () => {
    if (maximum === 1) {
      return `${(value * 100).toFixed(0)}%`;
    }
    if (format) {
      return `${value}${format}`;
    }
    return value;
  };
  const updateValueFromThreshold = useCallback(() => setValue(threshold), [threshold]);
  useEffect(() => {
    updateValueFromThreshold();
  }, [threshold, updateValueFromThreshold]);
  const sendThreshold = () => {
    if (convertFunction) {
      dispatch(postAlarmUpdate(name, { threshold: convertFunction(value) }));
    } else {
      dispatch(postAlarmUpdate(name, { threshold: value }));
    }
  };
  return (
    <div className="alarm-threshold">
      <Paragraph>Threshold</Paragraph>
      <Slider
        tipFormatter={formatter}
        defaultValue={threshold}
        value={value}
        onChange={setValue}
        onAfterChange={sendThreshold}
        max={maximum}
        min={minimum}
        step={step}
      />
    </div>
  );
};

Threshold.propTypes = {
  threshold: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  maximum: PropTypes.number.isRequired,
  minimum: PropTypes.number.isRequired,
  format: PropTypes.string.isRequired,
  convertFunction: PropTypes.func,
  step: PropTypes.number.isRequired,
};

export default Threshold;
