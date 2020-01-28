import React from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import BilgeWidget from '../widgets/BilgeWidget';
import {
  Bilge_Alarm_Port_Forepeak,
  Bilge_Auto_Forepeak_Port,
  Bilge_Pump_Port_Forepeak,
  Bilge_Alarm_Stbd_Forepeak,
  Bilge_Auto_Forepeak_Stbd,
  Bilge_Pump_Stbd_Forepeak,
  Bilge_Alarm_Port_Midship,
  Bilge_Auto_Midship_Port,
  Bilge_Pump_Port_Midship,
  Bilge_Alarm_Stbd_Midship,
  Bilge_Auto_Midship_Stbd,
  Bilge_Pump_Stbd_Midship,
  Bilge_Alarm_Port_Engine,
  Bilge_Auto_Engine_Port,
  Bilge_Pump_Port_Engine,
  Bilge_Alarm_Stbd_Engine,
  Bilge_Auto_Engine_Stbd,
  Bilge_Pump_Stbd_Engine,
  Bilge_Cycle_Forepeak_Port,
  Bilge_Cycle_Forepeak_Stbd,
  Bilge_Cycle_Engine_Stbd,
  Bilge_Cycle_Engine_Port,
  Bilge_Cycle_Midship_Port,
  Bilge_Cycle_Midship_Stbd,
} from '../../api/circuits';


const Bilges = () => {
  // FOREPEAK PORT
  const forepeakPortBilgeAlarm = useSelector((state) => state.Alarms.filter((i) => i.name === 'Forepeak_Bilge_Port'));
  const forepeakPortBilgeStatus = useSelector((state) => state.Circuits.loads[Bilge_Alarm_Port_Forepeak]);
  const forepeakPortBilgeAuto = useSelector((state) => state.Circuits.loads[Bilge_Auto_Forepeak_Port]);
  const forepeakPortBilgeOnOff = useSelector((state) => state.Circuits.loads[Bilge_Pump_Port_Forepeak]);
  const forepeakPortCycleCount = useSelector((state) => state.Circuits.values[Bilge_Cycle_Forepeak_Port]);
  // FOREPEAK STBD
  const forepeakStbdBilgeAlarm = useSelector((state) => state.Alarms.filter((i) => i.name === 'Forepeak_Bilge_Stbd'));
  const forepeakStbdBilgeStatus = useSelector((state) => state.Circuits.loads[Bilge_Alarm_Stbd_Forepeak]);
  const forepeakStbdBilgeAuto = useSelector((state) => state.Circuits.loads[Bilge_Auto_Forepeak_Stbd]);
  const forepeakStbdBilgeOnOff = useSelector((state) => state.Circuits.loads[Bilge_Pump_Stbd_Forepeak]);
  const forepeakStbdCycleCount = useSelector((state) => state.Circuits.values[Bilge_Cycle_Forepeak_Stbd]);
  // MIDSHIP PORT
  const midshipPortBilgeAlarm = useSelector((state) => state.Alarms.filter((i) => i.name === 'Mid_Bilge_Port'));
  const midshipPortBilgeStatus = useSelector((state) => state.Circuits.loads[Bilge_Alarm_Port_Midship]);
  const midshipPortBilgeAuto = useSelector((state) => state.Circuits.loads[Bilge_Auto_Midship_Port]);
  const midshipPortBilgeOnOff = useSelector((state) => state.Circuits.loads[Bilge_Pump_Port_Midship]);
  const midshipPortCycleCount = useSelector((state) => state.Circuits.values[Bilge_Cycle_Midship_Port]);
  // MIDSHIP STBD
  const midshipStbdBilgeAlarm = useSelector((state) => state.Alarms.filter((i) => i.name === 'Mid_Bilge_Stbd'));
  const midshipStbdBilgeStatus = useSelector((state) => state.Circuits.loads[Bilge_Alarm_Stbd_Midship]);
  const midshipStbdBilgeAuto = useSelector((state) => state.Circuits.loads[Bilge_Auto_Midship_Stbd]);
  const midshipStbdBilgeOnOff = useSelector((state) => state.Circuits.loads[Bilge_Pump_Stbd_Midship]);
  const midshipStbdCycleCount = useSelector((state) => state.Circuits.values[Bilge_Cycle_Midship_Stbd]);
  // ENGINE PORT
  const enginePortBilgeAlarm = useSelector((state) => state.Alarms.filter((i) => i.name === 'Engine_Bilge_Port'));
  const enginePortBilgeStatus = useSelector((state) => state.Circuits.loads[Bilge_Alarm_Port_Engine]);
  const enginePortBilgeAuto = useSelector((state) => state.Circuits.loads[Bilge_Auto_Engine_Port]);
  const enginePortBilgeOnOff = useSelector((state) => state.Circuits.loads[Bilge_Pump_Port_Engine]);
  const enginePortCycleCount = useSelector((state) => state.Circuits.values[Bilge_Cycle_Engine_Port]);
  // ENGINE STBD
  const engineStbdBilgeAlarm = useSelector((state) => state.Alarms.filter((i) => i.name === 'Engine_Bilge_Stbd'));
  const engineStbdBilgeStatus = useSelector((state) => state.Circuits.loads[Bilge_Alarm_Stbd_Engine]);
  const engineStbdBilgeAuto = useSelector((state) => state.Circuits.loads[Bilge_Auto_Engine_Stbd]);
  const engineStbdBilgeOnOff = useSelector((state) => state.Circuits.loads[Bilge_Pump_Stbd_Engine]);
  const engineStbdCycleCount = useSelector((state) => state.Circuits.values[Bilge_Cycle_Engine_Stbd]);

  return (
    <Row type="flex" justify="space-around">
      <BilgeWidget
        alarm={forepeakPortBilgeAlarm[0]}
        status={forepeakPortBilgeStatus}
        cycleCount={forepeakPortCycleCount}
        auto={forepeakPortBilgeAuto}
        onOff={forepeakPortBilgeOnOff}
        title="Forepeak Port"
      />
      <BilgeWidget
        alarm={forepeakStbdBilgeAlarm[0]}
        status={forepeakStbdBilgeStatus}
        cycleCount={forepeakStbdCycleCount}
        auto={forepeakStbdBilgeAuto}
        onOff={forepeakStbdBilgeOnOff}
        title="Forepeak Stbd"
      />
      <BilgeWidget
        alarm={midshipPortBilgeAlarm[0]}
        status={midshipPortBilgeStatus}
        cycleCount={midshipPortCycleCount}
        auto={midshipPortBilgeAuto}
        onOff={midshipPortBilgeOnOff}
        title="Midship Port"
      />
      <BilgeWidget
        alarm={midshipStbdBilgeAlarm[0]}
        status={midshipStbdBilgeStatus}
        cycleCount={midshipStbdCycleCount}
        auto={midshipStbdBilgeAuto}
        onOff={midshipStbdBilgeOnOff}
        title="Midship Stbd"
      />
      <BilgeWidget
        alarm={enginePortBilgeAlarm[0]}
        status={enginePortBilgeStatus}
        cycleCount={enginePortCycleCount}
        auto={enginePortBilgeAuto}
        onOff={enginePortBilgeOnOff}
        title="Engine Port"
      />
      <BilgeWidget
        alarm={engineStbdBilgeAlarm[0]}
        status={engineStbdBilgeStatus}
        cycleCount={engineStbdCycleCount}
        auto={engineStbdBilgeAuto}
        onOff={engineStbdBilgeOnOff}
        title="Engine Stbd"
      />
    </Row>

  );
};

export default Bilges;
