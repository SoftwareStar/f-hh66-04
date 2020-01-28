import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row } from 'antd';

const System = () => (
  <Row style={{ textAlign: 'center' }}>
    <Link to="/enables"><Button type="primary" block style={{ marginBottom: 8, marginTop: 16 }}>Enables</Button></Link>
    <Link to="/pump-pressures"><Button type="primary" block style={{ marginBottom: 8, marginTop: 16 }}>Pump Pressure</Button></Link>
    <Link to="/firmware"><Button type="primary" block style={{ marginBottom: 8, marginTop: 16 }}>Firmware</Button></Link>
  </Row>
);

export default System;
