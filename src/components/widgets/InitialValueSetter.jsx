import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { postPersistentData, updatePersistentData } from '../../api';

const InitialValueSetter = ({
  name, kind, value, existingData = null,
}) => {
  const sendNewInitialValue = (e) => {
    if (existingData) {
      updatePersistentData({
        name, key: kind, value: e ? 1 : 0, id: existingData.id,
      });
    } else {
      postPersistentData({ name, key: kind, value: e ? 1 : 0 });
    }
  };
  return (
    <Switch checked={value === 1} onChange={(e) => sendNewInitialValue(e)} />
  );
};

InitialValueSetter.propTypes = {
  name: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  existingData: PropTypes.instanceOf(Object),
};

export default InitialValueSetter;
