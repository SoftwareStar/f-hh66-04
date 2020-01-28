import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Row, Col, Button, message,
} from 'antd';
import { unAcknowledgeAll, postCircuitStateUpdate } from '../../api';
import { Alarm_Silence_Panel } from '../../api/circuits';

const SummaryAlarmWidget = () => {
  const alarmSilence = useSelector((state) => state.Circuits.loads[Alarm_Silence_Panel]);
  const [unacknowledgeInProgress, setUnacknowledgeInProgress] = useState(false);
  const toggleSilence = () => {
    postCircuitStateUpdate({ ...alarmSilence, state: 1 }).then(() => message.info('Alarms Silenced'));
    setTimeout(() => postCircuitStateUpdate({ ...alarmSilence, state: 0 }), 500);
  };
  const unAcknowledgeAllAlarms = () => {
    setUnacknowledgeInProgress(true);
    message.loading('Working...', 0);
    unAcknowledgeAll().then(() => {
      message.destroy();
      message.info('Alarms Unacknowledged');
      setUnacknowledgeInProgress(false);
    });
  };
  return (
    <Row>
      <Col xs={24} sm={12}>
        <div className="alarm-system-button">
          <Button type="primary" size="large" loading={unacknowledgeInProgress} onClick={unAcknowledgeAllAlarms} icon="exclamation-circle-o">Unacknowledge All</Button>
        </div>
      </Col>
      <Col xs={24} sm={12}>
        <div className="alarm-system-button">
          <Button type="primary" size="large" onClick={() => toggleSilence()} icon="sound">Silence Alarms</Button>
        </div>
      </Col>
    </Row>

  );
};

export default SummaryAlarmWidget;
