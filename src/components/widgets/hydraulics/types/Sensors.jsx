import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import Sensor from '../Sensor';

const Sensors = ({ type, actuator }) => {
  switch (type) {
    case 'Passive_Ram': {
      return (
        <Row type="flex" justify="space-around">
          <Sensor
            label="Pressure"
            actuator={actuator}
            id={0}
            format="BAR"
            span={12}
          />
        </Row>
      );
    }
    case 'Passive_Ram_with_Dump': {
      return (
        <Row type="flex" justify="space-around">
          <Sensor
            label="Pressure"
            actuator={actuator}
            id={0}
            format="BAR"
            span={12}
          />
        </Row>
      );
    }
    case 'Rotator_Ram': {
      return (
        <Row type="flex" justify="space-around">
          <Sensor
            label="CW Pressure"
            actuator={actuator}
            id={0}
            format="BAR"
            span={11}
          />
          <Sensor
            label="CCW Pressure"
            actuator={actuator}
            id={1}
            format="BAR"
            span={11}
          />
          <Sensor
            label="Raw Position"
            actuator={actuator}
            id={2}
            format=""
            span={11}
          />
          <Sensor
            label="Position"
            actuator={actuator}
            id={3}
            format="&deg;"
            span={11}
          />
        </Row>
      );
    }
    case 'Daggerboard_Ram': {
      return (
        <Row type="flex" justify="space-around">
          <Sensor
            label="Uphaul Pressure"
            actuator={actuator}
            id={0}
            format="BAR"
            span={11}
          />
          <Sensor
            label="Downhaul Pressure"
            actuator={actuator}
            id={1}
            format="BAR"
            span={11}
          />
          <Sensor
            label="Current Position"
            actuator={actuator}
            id={2}
            format=""
            span={11}
          />
          <Sensor
            label="Current Position %"
            actuator={actuator}
            id={3}
            format="%"
            span={11}
          />
        </Row>
      );
    }
    case 'Linear_Absolute': {
      return (
        <Row type="flex" justify="space-around">
          <Sensor
            label="Current Position"
            actuator={actuator}
            id={0}
            format=""
            span={11}
          />
          <Sensor
            label="Current Speed"
            actuator={actuator}
            id={1}
            format="0.1mm / second"
            span={11}
          />
          <Sensor
            label="Current"
            actuator={actuator}
            id={2}
            format="Amps"
            span={11}
          />
          <Sensor
            label="Status"
            actuator={actuator}
            id={3}
            format=""
            span={11}
          />
        </Row>
      );
    }
    default:
      return <div>Test</div>;
  }
};

Sensors.propTypes = {
  type: PropTypes.string.isRequired,
  actuator: PropTypes.string.isRequired,
};

export default Sensors;
