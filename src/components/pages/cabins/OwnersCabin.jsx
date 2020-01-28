import React from 'react';
import { Row, Col } from 'antd';
import {
  Pump_Sump_Port_Aft,
  Blower_Shower_Port_Aft,
  Light_Courtesy_Port_Aft,
  Light_Head_Red_Port_Aft,
  Light_Head_White_Port_Aft,
  Light_Reading_Inboard_Port_Aft,
  Light_Reading_Outboard_Port_Aft,
  Fan_Port_Aft,
  Toilet_Port_Aft,
  USB_Charging_Port_Aft,
  Light_Shower_Port_Aft,
  Light_Bunk_Port_Aft,
  Light_Cabin_Port_Aft,
} from '../../../api/circuits';
import RenderCircuitByType from '../../widgets/RenderCircuitByType';
import SectionTitle from '../../SectionTitle';

const OwnersCabin = () => (
  <Row>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Cabin_Port_Aft} title="Cabin Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Bunk_Port_Aft} title="Bunk Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Reading_Inboard_Port_Aft} title="Reading Light Inboard" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Reading_Outboard_Port_Aft} title="Reading Light Outboard" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Courtesy_Port_Aft} title="Courtesy Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Fan_Port_Aft} title="Fan" />
    </Col>
    <Col span={24}>
      <RenderCircuitByType circuitName={USB_Charging_Port_Aft} title="USB Charging" />
    </Col>
    <Col span={24}><SectionTitle title="WC" /></Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Head_White_Port_Aft} title="White Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Head_Red_Port_Aft} title="Red Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Shower_Port_Aft} title="Shower Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Blower_Shower_Port_Aft} title="Shower Blower" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Pump_Sump_Port_Aft} title="Sump Pump" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Toilet_Port_Aft} title="Toilet" />
    </Col>
  </Row>
);

export default OwnersCabin;
