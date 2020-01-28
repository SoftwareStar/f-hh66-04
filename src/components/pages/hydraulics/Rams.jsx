import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row } from 'antd';

const Rams = () => (
  <Row style={{ textAlign: 'center' }}>
    <Link to="/actuators/Outhaul"><Button type="primary" block style={{ marginBottom: 8, marginTop: 16 }}>Outhaul</Button></Link>
    <Link to="/actuators/Cunningham"><Button type="primary" block style={{ marginBottom: 8 }}>Cunningham</Button></Link>
    <Link to="/actuators/Tackline"><Button type="primary" block style={{ marginBottom: 8 }}>Tackline</Button></Link>
    <Link to="/actuators/Mainsheet"><Button type="primary" block style={{ marginBottom: 8 }}>Mainsheet</Button></Link>
    <Link to="/actuators/Rotator"><Button type="primary" block style={{ marginBottom: 8 }}>Rotator</Button></Link>
  </Row>
);

export default Rams;
