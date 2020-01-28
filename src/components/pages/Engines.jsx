import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import EngineWidget from '../widgets/EngineWidget';

const EnginesPage = () => {
  const EnginePort = useSelector((state) => state.NMEA.Engine_Port);
  const PortConnected = useSelector((state) => state.ServerState.nmeaStatus.Engine_Port);
  const EngineStbd = useSelector((state) => state.NMEA.Engine_Stbd);
  const StbdConnected = useSelector((state) => state.ServerState.nmeaStatus.Engine_Stbd);
  return (
    <Row type="flex" justify="space-around">
      <Col xs={24} md={12}>
        <EngineWidget
          engine={EnginePort}
          name="Port"
          connected={PortConnected}
        />
      </Col>
      <Col xs={24} md={12}>
        <EngineWidget
          engine={EngineStbd}
          name="Stbd"
          connected={StbdConnected}
        />
      </Col>
    </Row>
  );
};

export default EnginesPage;
