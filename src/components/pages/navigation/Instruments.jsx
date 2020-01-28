import React from 'react';
import { Row, Col } from 'antd';
import {
  USB_Charging_Nav,
  RI10,
  WTP3_Zeus_Nav,
  VHF_AIS_Splitter_Charging,
  AIS_Silent,
  ACC_Satellite_Communication,
  ACB_Satellite_Communication,
  ACA_Satellite_Communication,
} from '../../../api/circuits';
import RenderCircuitByType from '../../widgets/RenderCircuitByType';
import ACCircuitWidget from '../../widgets/ACCircuitWidget';

const NavigationInstrumentsPage = () => (
  <Row>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={WTP3_Zeus_Nav} title="B&G WTP 3" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={VHF_AIS_Splitter_Charging} title="VHF/AIS/Splitter/Charging" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={RI10} title="Radar" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={AIS_Silent} title="AIS Silent" />
    </Col>
    <Col xs={24} sm={12}>
      <ACCircuitWidget shore={ACC_Satellite_Communication} inverter={ACB_Satellite_Communication} circuit={ACA_Satellite_Communication} name="KVH TracPhone" />
    </Col>
    <Col xs={24} sm={12}>
      <RenderCircuitByType circuitName={USB_Charging_Nav} title="USB Charging Nav" />
    </Col>
  </Row>
);

export default NavigationInstrumentsPage;
