import React from 'react';
import PropTypes from 'prop-types';
import { Col, Statistic } from 'antd';
import { useSelector } from 'react-redux';

const Sensor = ({
  label, span, format, actuator, id,
}) => {
  const value = useSelector((state) => state.Hydraulics[actuator][`analog_${id}`]);
  const renderedStatus = () => {
    if (value === -1) {
      return 'N/A';
    } if (value === 65535) {
      return 'Fault';
    }
    return value;
  };
  return (
    <Col xs={24} sm={12} md={span} lg={span} xl={span} className="hydraulic-sensor">
      <Statistic
        title={label}
        valueStyle={{ color: 'rgba(255, 255, 255, 0.75)' }}
        value={renderedStatus()}
        suffix={format && format}
      />
    </Col>
  );
};

Sensor.propTypes = {
  label: PropTypes.string.isRequired,
  actuator: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  format: PropTypes.string,
  span: PropTypes.number,
};

export default Sensor;
