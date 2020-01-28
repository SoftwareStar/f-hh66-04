import React from 'react';
import { Row, Col } from 'antd';
import {
  Light_Courtesy_Stbd_Aft,
  Light_Reading_Inboard_Stbd_Aft,
  Light_Reading_Outboard_Stbd_Aft,
  Fan_Stbd_Aft,
  USB_Charging_Stbd_Aft,
  Light_Head_Red_Stbd_Aft,
  Light_Head_White_Stbd_Aft,
  Pump_Sump_Stbd_Aft,
  Toilet_Stbd_Aft,
  Light_Shower_Stbd_Aft,
  Light_Cabin_Stbd_Aft,
  Light_Bunk_Stbd_Aft,
} from '../../../api/circuits';
import SectionTitle from '../../SectionTitle';
import RenderCircuitByType from '../../widgets/RenderCircuitByType';

const StbdGuestCabin = () => (
  <Row type="flex" justify="space-around">
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Cabin_Stbd_Aft} title="Cabin Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Bunk_Stbd_Aft} title="Bunk Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Reading_Inboard_Stbd_Aft} title="Reading Light Inboard" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Reading_Outboard_Stbd_Aft} title="Reading Light Outboard" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_Courtesy_Stbd_Aft} title="Courtesy Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Fan_Stbd_Aft} title="Fan" />
    </Col>
    <Col span={24}>
      <RenderCircuitByType circuitName={USB_Charging_Stbd_Aft} title="USB Charging" />
    </Col>
    <Col span={24}><SectionTitle title="WC" /></Col>
    <Col xs={24} sm={12} md={8}>
      <RenderCircuitByType circuitName={Light_Head_White_Stbd_Aft} title="White Light" />
    </Col>
    <Col xs={24} sm={12} md={8}>
      <RenderCircuitByType circuitName={Light_Head_Red_Stbd_Aft} title="Red Light" />
    </Col>
    <Col xs={24} sm={24} md={8}>
      <RenderCircuitByType circuitName={Light_Shower_Stbd_Aft} title="Shower Light" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Pump_Sump_Stbd_Aft} title="Sump Pump" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Toilet_Stbd_Aft} title="Toilet" />
    </Col>
  </Row>
);

export default StbdGuestCabin;
