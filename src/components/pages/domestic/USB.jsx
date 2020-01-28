import React from 'react';
import { Row, Col } from 'antd';
import {
  USB_Charging_Port_Fwd,
  USB_Charging_Port_Aft,
  USB_Charging_Stbd_Fwd,
  USB_Charging_Stbd_Aft,
  USB_Charging_Galley,
  USB_Charging_Nav,
  USB_Charging_Helm_Port_Stbd,
} from '../../../api/circuits';
import RenderCircuitByType from '../../widgets/RenderCircuitByType';

const USB = () => (
  <Row>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={USB_Charging_Port_Fwd} title="Port Forward" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={USB_Charging_Stbd_Fwd} title="Stbd Forward" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={USB_Charging_Port_Aft} title="Port Aft" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={USB_Charging_Stbd_Aft} title="Stbd Aft" />
    </Col>
    <Col xs={24} sm={8}>
      <RenderCircuitByType circuitName={USB_Charging_Galley} title="Galley" />
    </Col>
    <Col xs={24} sm={8}>
      <RenderCircuitByType circuitName={USB_Charging_Nav} title="Nav Station" />
    </Col>
    <Col xs={24} sm={8}>
      <RenderCircuitByType circuitName={USB_Charging_Helm_Port_Stbd} title="Helm Port & Stbd" />
    </Col>
  </Row>
);

export default USB;
