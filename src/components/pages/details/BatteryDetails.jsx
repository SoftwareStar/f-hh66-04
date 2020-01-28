import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Row,
} from 'antd';
import AlarmWidget from '../../widgets/AlarmWidget';
import BatteryWidget from '../../widgets/BatteryWidget';

const BatteryDetails = () => {
  const { pathname } = useLocation();
  const batteryName = pathname.replace('/batteries/', '');
  const battery = useSelector((state) => state.NMEA[batteryName]);
  const batteryConnected = useSelector((state) => state.ServerState.nmeaStatus[batteryName]);
  const alarms = useSelector((state) => state.Alarms.filter((alarm) => alarm.source === batteryName));
  return (
    <div>
      <Row type="flex" justify="space-around">
        {alarms.map((alarm) => {
          const isVoltage = alarm.name.includes('Voltage');
          const isStart = alarm.name.includes('Start');
          return (
            <AlarmWidget
              key={alarm.id}
              label={alarm.name.replace(/_/g, ' ')}
              alarm={alarm}
              span={6}
              step={isVoltage ? 0.1 : 0.01}
              thresholdMin={isVoltage ? (isStart ? 9 : 18) : 0}
              thresholdMax={isVoltage ? (isStart ? 15 : 30) : 1}
            />
          );
        })}
      </Row>
      <Row type="flex" justify="space-around">
        <BatteryWidget
          battery={battery}
          showDetails={false}
          name={batteryName}
          connected={batteryConnected}
        />
      </Row>
    </div>
  );
};

export default BatteryDetails;
