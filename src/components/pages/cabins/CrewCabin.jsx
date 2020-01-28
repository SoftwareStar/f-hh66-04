import React from 'react';
import { Row, Col } from 'antd';
import {
  Light_Reading_Inboard_Stbd_Fwd,
  Light_Reading_Outboard_Stbd_Fwd,
  Fan_Stbd_Fwd,
  Light_Cabin_Stbd_Fwd,
  USB_Charging_Stbd_Fwd,
  Light_Courtesy_Stbd_Aft,
  Light_Workshop,
} from '../../../api/circuits';
import RenderCircuitByType from '../../widgets/RenderCircuitByType';

const CrewCabin = () => (
  <Row>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Cabin_Stbd_Fwd} title="Cabin Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Courtesy_Stbd_Aft} title="Courtesy Lights" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Reading_Inboard_Stbd_Fwd} title="Reading Light Inboard" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Reading_Outboard_Stbd_Fwd} title="Reading Light Outboard" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Workshop} title="Workshop" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Fan_Stbd_Fwd} title="Fan" />
    </Col>
    <Col span={24}>
      <RenderCircuitByType circuitName={USB_Charging_Stbd_Fwd} title="USB Charging" />
    </Col>
  </Row>
);

export default CrewCabin;
