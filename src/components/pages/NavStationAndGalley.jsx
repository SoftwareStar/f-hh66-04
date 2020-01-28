import React from 'react';
import { Row, Col } from 'antd';
import {
  Light_Red_Nav_Galley,
  Light_White_Nav,
  Light_White_Galley,
  USB_Charging_Galley,
  Light_Reading_Nav,
} from '../../api/circuits';
import RenderCircuitByType from '../widgets/RenderCircuitByType';

const NavStationGalleyPage = () => (
  <Row>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_White_Nav} title="White Light Nav" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_White_Galley} title="White Light Galley" />
    </Col>
    <Col xs={24} md={8}>
      <RenderCircuitByType circuitName={Light_Red_Nav_Galley} title="Red Light" />
    </Col>
    <Col xs={24} md={8}>
      <RenderCircuitByType circuitName={Light_Reading_Nav} title="Reading Light" />
    </Col>
    <Col xs={24} md={8}>
      <RenderCircuitByType circuitName={USB_Charging_Galley} title="USB Charging" />
    </Col>
  </Row>
);

export default NavStationGalleyPage;
