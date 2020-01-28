import React from 'react';
import { Row, Col } from 'antd';
import {
  Light_Forepeak_Port,
  Light_Forepeak_Stbd,
  Light_Locker_Wing_Port,
  Light_Locker_Wing_Stbd,
  Light_Locker_Tech_Space,
  Light_Transom_Port,
  Light_Davit,
  Light_Underwater_Port,
  Light_Underwater_Stbd,
  Light_Locker_Wet,
  // Light_Workshop,
  Light_Cockpit,
  Light_Rope_Cockpit,
  Nav_Light_Inboard_Boom,
  Nav_Light_Outboard_Boom,
} from '../../../api/circuits';
import RenderCircuitByType from '../../widgets/RenderCircuitByType';

const UtilityLightingPage = () => (
  <Row>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Forepeak_Port} title="Forepeak Port" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Forepeak_Stbd} title="Forepeak Stbd" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Locker_Tech_Space} title="Locker Tech Space" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Locker_Wing_Port} title="Locker Wing Port" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Locker_Wing_Stbd} title="Locker Wing Stbd" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Transom_Port} title="Transom Port" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Davit} title="Davit" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Underwater_Port} title="Underwater Port" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Underwater_Stbd} title="Underwater Stbd" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Locker_Wet} title="Wet Locker" />
    </Col>
    {/* <Col xs={24} sm={12}>
        <RenderCircuitByType circuitName={Light_Workshop} title="Workshop" />
      </Col> */}
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Cockpit} title="Cockpit Overhead" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Rope_Cockpit} title="Cockpit Sole" />
    </Col>
    <Col span={24} sm={12}>
      <RenderCircuitByType circuitName={Nav_Light_Inboard_Boom} title="Inboard Boom" />
    </Col>
    <Col span={24} sm={12}>
      <RenderCircuitByType circuitName={Nav_Light_Outboard_Boom} title="Outboard Boom" />
    </Col>
  </Row>
);

export default UtilityLightingPage;
