import React from 'react';
import { Row, Col } from 'antd';
import {
  Light_Forepeak_Port,
  Light_Forepeak_Stbd,
  Light_Locker_Wing_Port,
  Light_Locker_Wing_Stbd,
  Light_Locker_Tech_Space,
  Light_Locker_Wet,
  Light_Workshop,
} from '../../../api/circuits';
import RenderCircuitByType from '../../widgets/RenderCircuitByType';

const IndoorUtilityLightingPage = () => (
  <Row>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Forepeak_Port} title="Port Forepeak" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Forepeak_Stbd} title="Stbd Forepeak" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Locker_Wing_Port} title="Port Wing Locker" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Locker_Wing_Stbd} title="Stbd Wing Locker" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Locker_Tech_Space} title="Tech Space" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Locker_Wet} title="Wet Locker" />
    </Col>
    <Col xs={24}>
      <RenderCircuitByType circuitName={Light_Workshop} title="Workshop" />
    </Col>
  </Row>
);

export default IndoorUtilityLightingPage;
