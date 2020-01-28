import React from 'react';
import { Row, Col } from 'antd';
import {
  Pump_Pressure_Fresh_Port,
  Pump_Pressure_Fresh_Stbd,
  Pump_Sump_Port_Fwd,
  Pump_Sump_Port_Aft,
  Pump_Sump_Stbd_Aft,
  Toilet_Port_Fwd,
  Toilet_Port_Aft,
  Toilet_Stbd_Aft,
} from '../../../api/circuits';
import RenderCircuitByType from '../../widgets/RenderCircuitByType';
import SectionTitle from '../../SectionTitle';

const Water = () => (
  <Row>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Pump_Pressure_Fresh_Port} title="Pressure Water Port" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Pump_Pressure_Fresh_Stbd} title="Pressure Water Stbd" />
    </Col>
    <Col xs={24} sm={12}>
      <SectionTitle title="Sump Pump" />
      <RenderCircuitByType circuitName={Pump_Sump_Port_Fwd} title="Port Fwd" />
      <RenderCircuitByType circuitName={Pump_Sump_Port_Aft} title="Port Aft" />
      <RenderCircuitByType circuitName={Pump_Sump_Stbd_Aft} title="Stbd Aft" />
    </Col>
    <Col xs={24} sm={12}>
      <SectionTitle title="WC" />
      <RenderCircuitByType circuitName={Toilet_Port_Fwd} title="Port Fwd" />
      <RenderCircuitByType circuitName={Toilet_Port_Aft} title="Port Aft" />
      <RenderCircuitByType circuitName={Toilet_Stbd_Aft} title="Stbd Aft" />
    </Col>
  </Row>
);

export default Water;
