import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import Parameter from '../Parameter';
import CommitParameters from '../CommitParameters';
import {
  sixteenBitSignedToDisplay,
  displayToSixteenBitSigned,
  divide,
  mulitply,
  displayToLengthValue,
  lengthValueToDisplay,
} from '../parameterConversions';

const Parameters = ({ type, actuator }) => {
  const renderParametersByType = useMemo(() => {
    switch (type) {
      case 'Passive_Ram': {
        return (
          <Row type="flex" justify="space-around">
            <Parameter
              name="Pressure Limit"
              signalName={actuator}
              min={0}
              max={actuator === 'Cunningham' ? 150 : 400}
              unit="BAR"
              parameter={0}
            />
            {/* <Parameter
              name="Target Flow"
              signalName={actuator}
              min={1}
              max={20}
              unit="LPM"
              parameter={1}
            /> */}
          </Row>
        );
      }
      case 'Passive_Ram_with_Dump': {
        return (
          <Row type="flex" justify="space-around">
            <Parameter
              name="Pressure Limit"
              signalName={actuator}
              min={0}
              max={actuator === 'Mainsheet' ? 250 : 400}
              unit="BAR"
              parameter={0}
            />
            {/* <Parameter
              name="Target Flow"
              signalName={actuator}
              min={1}
              max={20}
              unit="LPM"
              parameter={1}
            /> */}
          </Row>
        );
      }
      case 'Rotator_Ram': {
        return (
          <Row type="flex" justify="space-around">
            <Parameter
              name="CW Pressure Limit"
              signalName={actuator}
              min={0}
              max={400}
              unit="BAR"
              parameter={0}
            />
            <Parameter
              name="CCW Pressure Limit"
              signalName={actuator}
              min={0}
              max={400}
              unit="BAR"
              parameter={1}
            />
            <Parameter
              name="CW Calibration Position Limit"
              signalName={actuator}
              min={0}
              max={4095}
              sendConversion={displayToLengthValue}
              displayConversion={lengthValueToDisplay}
              parameter={2}
            />
            <Parameter
              name="CW Calibration Degrees of Rotation"
              signalName={actuator}
              min={-50}
              max={50}
              unit="&deg;"
              sendConversion={displayToSixteenBitSigned}
              displayConversion={sixteenBitSignedToDisplay}
              parameter={3}
            />
            <Parameter
              name="Position at 0&deg;"
              signalName={actuator}
              min={0}
              max={4095}
              sendConversion={displayToLengthValue}
              displayConversion={lengthValueToDisplay}
              parameter={4}
            />
            <Parameter
              name="CW Calibration Position Limit"
              signalName={actuator}
              min={0}
              max={4095}
              sendConversion={displayToLengthValue}
              displayConversion={lengthValueToDisplay}
              parameter={5}
            />
            <Parameter
              name="CW Calibration Degrees of Rotation"
              signalName={actuator}
              min={0}
              max={360}
              unit="&deg;"
              parameter={6}
            />
          </Row>
        );
      }
      case 'Daggerboard_Ram': {
        return (
          <Row type="flex" justify="space-around">
            <Parameter
              name="Up Pressure Limit"
              signalName={actuator}
              min={0}
              max={400}
              unit="BAR"
              parameter={0}
            />
            <Parameter
              name="Down Pressure Limit"
              signalName={actuator}
              min={0}
              max={400}
              unit="BAR"
              parameter={1}
            />
            <Parameter
              name="Fully Up Position"
              signalName={actuator}
              min={0}
              max={4095}
              sendConversion={displayToLengthValue}
              displayConversion={lengthValueToDisplay}
              parameter={2}
            />
            <Parameter
              name="Fully Down Position"
              signalName={actuator}
              min={0}
              max={4095}
              sendConversion={displayToLengthValue}
              displayConversion={lengthValueToDisplay}
              parameter={3}
            />
            <Parameter
              name="Target Position %"
              signalName={actuator}
              min={0}
              max={100}
              unit="%"
              parameter={4}
            />
          </Row>
        );
      }
      case 'Linear_Absolute': {
        return (
          <Row type="flex" justify="space-around">
            <Parameter
              name="Retracted Position"
              signalName={actuator}
              min={0}
              max={999}
              unit="mm"
              parameter={0}
            />
            <Parameter
              name="Retracted Datum"
              signalName={actuator}
              step={0.1}
              float={1}
              min={-10}
              max={10}
              sendConversion={displayToSixteenBitSigned}
              displayConversion={sixteenBitSignedToDisplay}
              parameter={1}
            />
            <Parameter
              name="Zero Position"
              signalName={actuator}
              min={0}
              max={999}
              unit="mm"
              parameter={2}
            />
            <Parameter
              name="Extended Position"
              signalName={actuator}
              min={0}
              max={999}
              unit="mm"
              parameter={3}
            />
            <Parameter
              name="Extended Datum"
              signalName={actuator}
              step={0.1}
              float={1}
              min={-10}
              max={10}
              sendConversion={displayToSixteenBitSigned}
              displayConversion={sixteenBitSignedToDisplay}
              parameter={4}
            />
            <Parameter
              name="Current Limit"
              signalName={actuator}
              min={1}
              max={99}
              unit="Amps"
              parameter={5}
            />
            <Parameter
              name="Speed Limit"
              signalName={actuator}
              min={1}
              max={100}
              unit="%"
              parameter={6}
            />
            <Parameter
              name="Start Ramp"
              signalName={actuator}
              step={0.1}
              float={1}
              min={0.1}
              max={5}
              sendConversion={(value) => mulitply(value, 10)}
              displayConversion={(value) => divide(value, 10)}
              parameter={7}
            />
            <Parameter
              name="Stop Ramp"
              signalName={actuator}
              step={0.1}
              float={1}
              min={0.1}
              max={5}
              sendConversion={(value) => mulitply(value, 10)}
              displayConversion={(value) => divide(value, 10)}
              parameter={8}
            />
            <Parameter
              name="Target Datum"
              signalName={actuator}
              min={0}
              max={100}
              unit="%"
              parameter={9}
            />
          </Row>
        );
      }
      default:
        return <div>Not Found</div>;
    }
  }, [actuator, type]);

  return (
    <Row>
      <CommitParameters actuator={actuator} />
      {renderParametersByType}
    </Row>
  );
};

Parameters.propTypes = {
  type: PropTypes.string.isRequired,
  actuator: PropTypes.string.isRequired,
};

export default Parameters;
