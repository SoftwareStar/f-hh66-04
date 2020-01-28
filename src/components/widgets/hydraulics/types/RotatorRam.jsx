import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Row, Col, Collapse, Typography,
} from 'antd';
import { useSelector } from 'react-redux';
import TouchButton from '../TouchButton';
import Sensor from '../Sensor';
import CommitParameters from '../CommitParameters';
import Parameter from '../Parameter';
import {
  CLOCKWISE, COUNTER_CLOCKWISE, DUMP, TACK,
} from '../../../../api/hydraulicActions';

const RotatorRam = () => {
  const { id } = useParams();
  const clockwisePressure = useSelector((state) => state.Hydraulics[id].analog_0);
  const counterClockwisePressure = useSelector((state) => state.Hydraulics[id].analog_1);
  const positionRaw = useSelector((state) => state.Hydraulics[id].analog_2);
  const positionDegrees = useSelector((state) => state.Hydraulics[id].analog_3);
  const clockwisePressureLimit = useSelector((state) => state.Hydraulics[id].parameter_0);
  const counterClockwisePressureLimit = useSelector((state) => state.Hydraulics[id].parameter_1);
  const clockwiseCalibrationPositionLimit = useSelector((state) => state.Hydraulics[id].parameter_2);
  const clockwiseCalibrationDegrees = useSelector((state) => state.Hydraulics[id].parameter_3);
  const zeroPosition = useSelector((state) => state.Hydraulics[id].parameter_4);
  const counterClockwiseCalibrationPositionLimit = useSelector((state) => state.Hydraulics[id].parameter_5);
  const counterClockwiseCalibrationDegrees = useSelector((state) => state.Hydraulics[id].parameter_6);

  return (
    <div>
      <Typography.Paragraph style={{ textAlign: 'center', color: '#fff', margin: 16 }}>Actions</Typography.Paragraph>
      <Row type="flex" justify="space-around" className="hydraulic-actions">
        <TouchButton name="CW" action={CLOCKWISE} signalName={id} />
        <TouchButton name="CCW" action={COUNTER_CLOCKWISE} signalName={id} />
        <TouchButton name="Dump" action={DUMP} signalName={id} />
        <TouchButton name="Tack" action={TACK} signalName={id} />
      </Row>
      <Row>
        <Collapse bordered={false} defaultActiveKey={['0']}>
          <Collapse.Panel header="Sensors" key="0">
            <Row type="flex" justify="space-around">
              <Sensor
                name="CW Pressure"
                value={clockwisePressure}
                format="BAR"
                span={11}
              />
              <Sensor
                name="CCW Pressure"
                value={counterClockwisePressure}
                format="BAR"
                span={11}
              />
              <Sensor
                name="Raw Position"
                value={positionRaw}
                format=""
                span={11}
              />
              <Sensor
                name="Position"
                value={positionDegrees}
                format="&deg;"
                span={11}
              />
            </Row>
          </Collapse.Panel>
          <Collapse.Panel header="Parameters" key="1">
            <Row>
              <Col span={24} style={{ textAlign: 'center' }}>
                <CommitParameters />
              </Col>
            </Row>
            <Row type="flex" justify="space-around">
              <Parameter
                name="CW Pressure Limit"
                signalName={id}
                value={clockwisePressureLimit}
                minValue={0}
                maxValue={700}
                format="BAR"
                parameter={0}
                span={11}
              />
              <Parameter
                name="CCW Pressure Limit"
                signalName={id}
                value={counterClockwisePressureLimit}
                minValue={0}
                maxValue={700}
                format="BAR"
                parameter={1}
                span={11}
              />
              <Parameter
                name="CW Calibration Position Limit"
                signalName={id}
                value={clockwiseCalibrationPositionLimit}
                minValue={0}
                maxValue={65535}
                format=""
                parameter={2}
                span={11}
              />
              <Parameter
                name="CW Calibration Degrees of Rotation"
                signalName={id}
                value={clockwiseCalibrationDegrees}
                minValue={0}
                maxValue={360}
                format="&deg;"
                parameter={3}
                span={11}
              />
              <Parameter
                name="Position at 0&deg;"
                signalName={id}
                value={zeroPosition}
                minValue={0}
                maxValue={65535}
                format=""
                parameter={4}
                span={11}
              />
              <Parameter
                name="CW Calibration Position Limit"
                signalName={id}
                value={counterClockwiseCalibrationPositionLimit}
                minValue={0}
                maxValue={65535}
                format=""
                parameter={5}
                span={11}
              />
              <Parameter
                name="CW Calibration Degrees of Rotation"
                signalName={id}
                value={counterClockwiseCalibrationDegrees}
                minValue={0}
                maxValue={360}
                format="&deg;"
                parameter={6}
                span={11}
              />
            </Row>
          </Collapse.Panel>
        </Collapse>
      </Row>
    </div>
  );
};

export default RotatorRam;
