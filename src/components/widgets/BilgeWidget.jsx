import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Card, Col, Typography, Radio, Icon, Row,
} from 'antd';
import BilgeSwitch from './bilge/BilgeSwitch';
import Enable from './alarmTools/Enable';
import { postCircuitStateUpdate } from '../../api';

const { Text, Paragraph } = Typography;
const { Meta } = Card;

const BilgeWidget = ({
  auto, onOff, title, alarm, status, cycleCount,
}) => {
  const handleChange = (e) => {
    if (e.target.value === 'Auto') {
      postCircuitStateUpdate({ ...auto, state: 1 });
    }
    if (e.target.value === 'On') {
      postCircuitStateUpdate({ ...auto, state: 0 });
      postCircuitStateUpdate({ ...onOff, state: 1 });
    } if (e.target.value === 'Off') {
      postCircuitStateUpdate({ ...onOff, state: 0 });
      postCircuitStateUpdate({ ...auto, state: 0 });
    }
  };
  const selectValue = useMemo(() => {
    if (auto.state) {
      return 'Auto';
    }
    if (onOff.actualState) {
      return 'On';
    }
    return 'Off';
  }, [onOff, auto]);
  return (
    <Col xs={24} sm={12}>
      <div className="bilge-widget">
        <Card
          bordered={false}
          cover={<BilgeSwitch status={status} />}
        >
          <Meta title={(<Paragraph className="bilge-widget-title">{title}</Paragraph>)} />
          <Row type="flex" justify="center" align="middle" className="pump-status">
            <Text>Pump Running: </Text>
            <Icon className={onOff.actualState ? 'pump-running' : 'pump-off'} type={onOff.actualState ? 'check-circle' : 'close-circle'} />
          </Row>
          {auto.actualState ? (
            <div>
              <Text>
                Cycle Count:
                {cycleCount.value}
              </Text>
            </div>
          ) : (
            <br />
          )}
          <div className="bilge-auto-on-off">

            <Radio.Group
              onChange={handleChange}
              defaultValue={selectValue}
              value={selectValue}
              buttonStyle="solid"
            >
              <Radio.Button value="Off">Off</Radio.Button>
              <Radio.Button value="On">On</Radio.Button>
              <Radio.Button value="Auto">Auto</Radio.Button>
            </Radio.Group>
          </div>
          <div className="bilge-alarm-enable">
            <Text className="bilge-alarm-enable-label">Alarm: </Text>
            <Enable enabled={alarm.enabled} name={alarm.name} size="default" />
          </div>
        </Card>
      </div>
    </Col>
  );
};

BilgeWidget.propTypes = {
  auto: PropTypes.instanceOf(Object).isRequired,
  onOff: PropTypes.instanceOf(Object).isRequired,
  alarm: PropTypes.instanceOf(Object).isRequired,
  status: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  cycleCount: PropTypes.instanceOf(Object).isRequired,
};

export default BilgeWidget;
