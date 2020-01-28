import React from 'react';
import { Col, Row } from 'antd';
import RenderCircuitByType from '../widgets/RenderCircuitByType';
import { Blower_Bilge_Stbd } from '../../api/circuits';
import PortBilgeBlower from '../widgets/PortBilgeBlower';

const BilgeBlowers = () => (
  <Row>
    <Col xs={24} sm={12}>
      <PortBilgeBlower />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Blower_Bilge_Stbd} title="Bilge Blower Stbd" />
    </Col>
  </Row>
);

export default BilgeBlowers;
