import React from 'react';
import { Row, Col } from 'antd';
import {
  Light_Transom_Port,
  Light_Davit,
  Light_Underwater_Port,
  Light_Underwater_Stbd,
  Light_Cockpit,
  Light_Rope_Cockpit,
  Nav_Light_Inboard_Boom,
  Nav_Light_Outboard_Boom,
} from '../../../api/circuits';
import RenderCircuitByType from '../../widgets/RenderCircuitByType';

const OutdoorUtilityLightingPage = () => (
  <Row>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Cockpit} title="Cockpit Overhead" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Rope_Cockpit} title="Cockpit Sole" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Transom_Port} title="Transom Courtesy" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Davit} title="Davit" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Underwater_Port} title="Port Underwater" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Underwater_Stbd} title="Stbd Underwater" />
    </Col>
    <Col span={24} sm={12}>
      <RenderCircuitByType circuitName={Nav_Light_Inboard_Boom} title="Boom Inboard" />
    </Col>
    <Col span={24} sm={12}>
      <RenderCircuitByType circuitName={Nav_Light_Outboard_Boom} title="Boom Outboard" />
    </Col>
  </Row>
);

export default OutdoorUtilityLightingPage;
