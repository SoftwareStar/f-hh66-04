import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row } from 'antd';

const Daggerboards = () => (
  <Row style={{ textAlign: 'center' }}>
    <Link to="/actuators/Daggerboard_Port"><Button type="primary" block style={{ marginBottom: 8, marginTop: 16 }}>Daggerboard Port</Button></Link>
    <Link to="/actuators/Daggerboard_Rake_Port"><Button type="primary" block style={{ marginBottom: 8, marginTop: 8 }}>Daggerboard Rake Port</Button></Link>
    <Link to="/actuators/Daggerboard_Stbd"><Button type="primary" block style={{ marginTop: 8, marginBottom: 8 }}>Daggerboard Stbd</Button></Link>
    <Link to="/actuators/Daggerboard_Rake_Stbd"><Button type="primary" block style={{ marginTop: 8 }}>Daggerboard Rake Stbd</Button></Link>
  </Row>
);

export default Daggerboards;
