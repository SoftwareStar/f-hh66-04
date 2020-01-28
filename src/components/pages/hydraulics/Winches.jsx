import React from 'react';
import { Row, Col, Typography } from 'antd';
import Actions from '../../widgets/hydraulics/types/Actions';

const Winches = () => (
  <Row className="winch-page">
    <div className="winch-section">
      <Typography.Paragraph className="title">Pit</Typography.Paragraph>
      <Row type="flex" justify="space-around">
        <Col xs={24} sm={11}>
          <Typography.Paragraph className="sub-title">Port</Typography.Paragraph>
          <Actions actuator="Winch_Pit_Port" type="Brushed_DC_Motor" />
        </Col>
        <Col xs={24} sm={11}>
          <Typography.Paragraph className="sub-title">Stbd</Typography.Paragraph>
          <Actions actuator="Winch_Pit_Stbd" type="Brushed_DC_Motor" />
        </Col>
      </Row>
    </div>
    <div className="winch-section">
      <Typography.Paragraph className="title">Traveler</Typography.Paragraph>
      <Row type="flex" justify="space-around">
        <Col xs={24} sm={11}>
          <Typography.Paragraph className="sub-title">Port</Typography.Paragraph>
          <Actions actuator="Winch_Traveler_Port" type="Brushed_DC_Motor" />
        </Col>
        <Col xs={24} sm={11}>
          <Typography.Paragraph className="sub-title">Stbd</Typography.Paragraph>
          <Actions actuator="Winch_Traveler_Stbd" type="Brushed_DC_Motor" />
        </Col>
      </Row>
    </div>
    <div className="winch-section">
      <Typography.Paragraph className="title">Primary</Typography.Paragraph>
      <Row type="flex" justify="space-around">
        <Col xs={24} sm={11}>
          <Typography.Paragraph className="sub-title">Port</Typography.Paragraph>
          <Actions actuator="Winch_Primary_Port" type="Brushed_DC_Motor" />
        </Col>
        <Col xs={24} sm={11}>
          <Typography.Paragraph className="sub-title">Stbd</Typography.Paragraph>
          <Actions actuator="Winch_Primary_Stbd" type="Brushed_DC_Motor" />
        </Col>
      </Row>
    </div>
    <div className="winch-section">
      <Typography.Paragraph className="title">Traveler</Typography.Paragraph>
      <Row type="flex" justify="space-around">
        <Col xs={24} sm={11}>
          <Typography.Paragraph className="sub-title">Line Driver</Typography.Paragraph>
          <Actions actuator="Traveler" type="Line_Driver" />
        </Col>
      </Row>
    </div>
  </Row>
);

export default Winches;
