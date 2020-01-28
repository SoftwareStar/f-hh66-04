import React from 'react';
import { Row, Col } from 'antd';
import {
  Refrigerator,
  Water_Maker,
  Freezer,
  Pump_Pressure_Fresh_Port,
  Pump_Pressure_Fresh_Stbd,
  LPG_Sniffer,
} from '../../../api/circuits';
import RenderCircuitByType from '../../widgets/RenderCircuitByType';

const Galley = () => (
  <Row>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Refrigerator} title="Refrigerator" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Freezer} title="Freezer" />
    </Col>
    <Col span={24} sm={12}>
      <RenderCircuitByType circuitName={LPG_Sniffer} title="LPG" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Water_Maker} title="Water Maker" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Pump_Pressure_Fresh_Port} title="Pressure Water Port" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Pump_Pressure_Fresh_Stbd} title="Pressure Water Stbd" />
    </Col>
  </Row>
);

export default Galley;
