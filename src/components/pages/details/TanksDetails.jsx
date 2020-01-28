import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Row,
} from 'antd';
import Tank from '../../widgets/TankWidget';
import AlarmWidget from '../../widgets/AlarmWidget';
import WasteTankLevelFullWidget from '../../widgets/WasteTankLevelFullWidget';

const TankDetails = () => {
  const { pathname } = useLocation();
  const tankName = pathname.replace('/tanks/', '');
  const tank = useSelector((state) => state.NMEA[tankName]);

  const tankConnected = useSelector((state) => state.ServerState.nmeaStatus[tankName]);
  const alarms = useSelector((state) => state.Alarms.filter((alarm) => alarm.source === tankName));

  const tankType = useMemo(() => {
    if (tankName.includes('Fuel')) {
      return 'Fuel';
    }
    if (tankName.includes('Water')) {
      return 'Water';
    }
    if (tankName.includes('Waste')) {
      return 'Waste';
    }
    return null;
  }, [tankName]);
  return (
    <div>
      <Row type="flex" justify="space-around">
        {alarms.map((alarm) => <AlarmWidget span={8} key={alarm.id} label={alarm.name.includes('Low') ? 'Low Alarm' : 'High Alarm'} alarm={alarm} step={0.01} />)}
      </Row>
      <Row type="flex" justify="space-around">
        <Tank tank={tank} name={tankName.replace(/_/g, ' ')} showDetails={false} type={tankType} tankName={tankName} connected={tankConnected} width={250} />
      </Row>
      { tankType === 'Waste' && (
        <WasteTankLevelFullWidget />
      )}
    </div>
  );
};

export default TankDetails;
