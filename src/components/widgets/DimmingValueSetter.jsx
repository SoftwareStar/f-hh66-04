import React from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip } from 'antd';
import { postPersistentData } from '../../api';

const DimmingValueSetter = ({
  name, value, kind, currentValue,
}) => {
  if (currentValue !== value) {
    return (
      <Button type="link" onClick={() => postPersistentData({ name, key: kind, value })}>{`${currentValue} to ${value}`}</Button>
    );
  }
  return (
    <Tooltip title="Move dimmer to set new value" placement="bottom">
      {currentValue}
    </Tooltip>
  );
};

DimmingValueSetter.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  kind: PropTypes.string.isRequired,
  currentValue: PropTypes.number.isRequired,
};

export default DimmingValueSetter;
