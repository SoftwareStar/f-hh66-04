import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row } from 'antd';

const Rudders = () => (
  <Row style={{ textAlign: 'center' }}>
    <Link to="/actuators/Rudder_Elevator_Port"><Button type="primary" block style={{ marginBottom: 8, marginTop: 16 }}>Rudder Port</Button></Link>
    <Link to="/actuators/Rudder_Elevator_Stbd"><Button type="primary" block style={{ marginBottom: 8 }}>Rudder Stbd</Button></Link>
  </Row>
);

export default Rudders;
