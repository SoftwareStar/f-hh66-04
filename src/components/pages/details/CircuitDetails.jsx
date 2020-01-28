import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Typography, Row, Col,
} from 'antd';
import RenderCircuitByType from '../../widgets/RenderCircuitByType';
import DimmingValueSetter from '../../widgets/DimmingValueSetter';
import InitialValueSetter from '../../widgets/InitialValueSetter';

const { Text } = Typography;

const CircuitDetail = ({ label, value }) => (
  <div>
    <Text>
      {`${label}: `}
    </Text>
    <Text type="secondary">
      {value}
    </Text>
  </div>
);

CircuitDetail.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const CircuitDetails = () => {
  const { pathname } = useLocation();
  const circuitName = pathname.replace('/circuits/', '');
  const circuit = useSelector((state) => {
    const load = state.Circuits.loads[circuitName];
    const fuse = state.Circuits.fuses[circuitName];
    return { ...load, ...fuse };
  });
  const slaves = useSelector((state) => {
    if (state.Circuits.loads[circuitName].meta.slaves) {
      const slaveCircuits = state.Circuits.loads[circuitName].meta.slaves.map((item) => state.Circuits.loads[item.replace('loads.', '')]).reduce((obj, e) => ({
        ...obj,
        [e.name]: { ...e, tripped: state.Circuits.fuses[e.name].tripped },
      }), {});
      return { ...slaveCircuits };
    }
    return false;
  });

  const LabelValuePair = ({ label, value }) => (
    <Row className="label-value-pair">
      <Col span={11} className="circuit-label">
        {label}
      </Col>
      <Col span={2} className="circuit-colon">:</Col>
      <Col span={11} className="circuit-value">
        {value}
      </Col>
    </Row>
  );
  LabelValuePair.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  };
  const circuitDetailList = (item) => (
    <Col key={item.name} className="circuit-details">
      <LabelValuePair label="Name" value={item.name.replace(/_/g, ' ')} />
      <LabelValuePair label="State" value={item.actualState === 0 ? 'Off' : 'On'} />
      <LabelValuePair label="Fuse" value={item.tripped ? 'Tripped' : 'Okay'} />
      <LabelValuePair label="Type" value={item.meta.originalKind} />
      { !item.meta.synthetic && (
      <LabelValuePair label="Location" value={`${item.meta.hardware.kind} ${item.meta.hardware.instance}:${item.meta.hardware.channel}`} />
      )}
      {item.meta.originalKind.includes('Dim') && (<LabelValuePair label="Dimming Level" value={item.actualDimmingLevel} />)}
    </Col>
  );
  return (
    <div id="circuit-details-page">
      <RenderCircuitByType circuitName={circuitName} noDetails title={circuitName.replace(/_/g, ' ')} />
      <Row>
        { circuit.meta.originalKind.includes('IV') && (
        <Col className="circuit-details">
          <Row className="label-value-pair">
            <Col span={11} className="circuit-label">
               Initial Value
            </Col>
            <Col span={2} className="circuit-colon">:</Col>
            <Col span={11} className="circuit-value">
              <InitialValueSetter name={circuit.name} value={(!circuit.INITIAL_VALUE || circuit.INITIAL_VALUE.value === 0) ? 0 : 1} kind="INITIAL_VALUE" existingData={circuit.INITIAL_VALUE || null} />
            </Col>
          </Row>
        </Col>
        )}
        { circuit.meta.originalKind.includes('Dim 1x') && (
        <Col className="circuit-details">
          <Row className="label-value-pair">
            <Col span={11} className="circuit-label">
                Button Dim Level
            </Col>
            <Col span={2} className="circuit-colon">:</Col>
            <Col span={11} className="circuit-value">
              <DimmingValueSetter currentValue={circuit.DIMMING_1X ? circuit.DIMMING_1X.value : 0.25} name={circuit.name} kind="DIMMING_1X" value={circuit.actualDimmingLevel} />
            </Col>
          </Row>
        </Col>
        )}
      </Row>

      <Row>
        {circuitDetailList(circuit)}
        {slaves && Object.keys(slaves).map((item) => circuitDetailList(slaves[item]))}
      </Row>
    </div>
  );
};

export default CircuitDetails;
