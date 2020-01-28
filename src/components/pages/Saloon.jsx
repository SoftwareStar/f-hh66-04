import React from 'react';
import { Row, Col } from 'antd';
import {
  ACA_Dimming_Glass_Controller_Port,
  ACA_Dimming_Glass_Controller_Stbd,
  ACB_Dimming_Glass_Controller_Port,
  ACB_Dimming_Glass_Controller_Stbd,
  ACC_Dimming_Glass_Controller_Port,
  ACC_Dimming_Glass_Controller_Stbd,
  Light_White_Saloon,
  USB_Charging_Galley,
  Entertainment_System,
} from '../../api/circuits';
import RenderCircuitByType from '../widgets/RenderCircuitByType';
import ACCircuitWidget from '../widgets/ACCircuitWidget';

const SaloonPage = () => (
  <Row>
    <Col xs={24} sm={12}>
      <ACCircuitWidget shore={ACC_Dimming_Glass_Controller_Port} inverter={ACB_Dimming_Glass_Controller_Port} circuit={ACA_Dimming_Glass_Controller_Port} name="Port Glass" />
    </Col>
    <Col xs={24} sm={12}>
      <ACCircuitWidget shore={ACC_Dimming_Glass_Controller_Stbd} inverter={ACB_Dimming_Glass_Controller_Stbd} circuit={ACA_Dimming_Glass_Controller_Stbd} name="Stbd Glass" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={Light_White_Saloon} title="Lights" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={USB_Charging_Galley} title="USB Charging (Galley)" />
    </Col>
    <Col span={24}>
      <RenderCircuitByType circuitName={Entertainment_System} title="Entertainment" />
    </Col>
  </Row>
);

export default SaloonPage;
