import React from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import Battery from '../widgets/BatteryWidget';

const Batteries = () => {
  const House = useSelector((state) => state.NMEA.House);
  const HouseConnected = useSelector((state) => state.ServerState.nmeaStatus.House);
  const StartPort = useSelector((state) => state.NMEA.Start_Port);
  const StartPortConnected = useSelector((state) => state.ServerState.nmeaStatus.Start_Port);
  const StartStbd = useSelector((state) => state.NMEA.Start_Stbd);
  const StbdStbdConnected = useSelector((state) => state.ServerState.nmeaStatus.Start_Stbd);

  return (
    <Row type="flex" justify="space-around">
      <Battery name="House" battery={House} connected={HouseConnected} />
      <Battery name="Start_Port" battery={StartPort} connected={StartPortConnected} />
      <Battery name="Start_Stbd" battery={StartStbd} connected={StbdStbdConnected} />
    </Row>
  );
};

export default Batteries;
