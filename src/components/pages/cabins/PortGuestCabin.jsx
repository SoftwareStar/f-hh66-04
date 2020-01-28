import React from 'react';
import { Row, Col } from 'antd';
import {
  Light_Courtesy_Port_Fwd,
  Light_Reading_Inboard_Port_Fwd,
  Light_Reading_Outboard_Port_Fwd,
  Light_Cabin_Port_Fwd,
  Fan_Port_Fwd,
  USB_Charging_Port_Fwd,
  Light_Head_Red_Port_Fwd,
  Light_Head_White_Port_Fwd,
  Pump_Sump_Port_Fwd,
  Toilet_Port_Fwd,
  Blower_Shower_Port_Fwd,
  Light_Shower_Port_Fwd,
} from '../../../api/circuits';
import SectionTitle from '../../SectionTitle';
import RenderCircuitByType from '../../widgets/RenderCircuitByType';

const PortGuestCabin = () => (
  <Row>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Cabin_Port_Fwd} title="Cabin Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Courtesy_Port_Fwd} title="Courtesy Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Reading_Inboard_Port_Fwd} title="Reading Light Inboard" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Reading_Outboard_Port_Fwd} title="Reading Light Outboard" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Fan_Port_Fwd} title="Fan" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={USB_Charging_Port_Fwd} title="USB Charging" />
    </Col>
    <Col span={24}><SectionTitle title="WC" /></Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Head_White_Port_Fwd} title="White Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Head_Red_Port_Fwd} title="Red Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Shower_Port_Fwd} title="Shower Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Blower_Shower_Port_Fwd} title="Shower Blower" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Pump_Sump_Port_Fwd} title="Sump Pump" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Toilet_Port_Fwd} title="Toilet" />
    </Col>
  </Row>
);

export default PortGuestCabin;
