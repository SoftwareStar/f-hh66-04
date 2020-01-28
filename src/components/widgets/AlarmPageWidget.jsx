import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Row, Col, Icon, Tooltip, Button, Typography,
} from 'antd';
import { postAlarmUpdate } from '../../actions/actions';
// import AlarmEnable from './Enable';
// import AlarmAcknowledge from './Acknowledge';
const { Paragraph, Text } = Typography;

const AlarmPageWidget = ({
  alarm,
}) => {
  const {
    name, enabled, acknowledge, active, isAudible, source,
  } = alarm;
  const dispatch = useDispatch();
  // const [enabling, setEnabling] = useState(false);
  // const [acknowledging, setAcknowledging] = useState(false);
  const classAlarm = () => {
    if (((active && enabled) && !acknowledge)) {
      return 'alarm-page-widget-active alarm-page-widget';
    }
    return 'alarm-page-widget';
  };
  const sendIsAudible = (e) => {
    dispatch(postAlarmUpdate(name, { isAudible: e }));
  };
  const sendEnable = (e) => {
    dispatch(postAlarmUpdate(name, { enabled: e }));
  };
  const sendAcknowledge = (e) => {
    dispatch(postAlarmUpdate(name, { acknowledge: e }));
  };
  return (
    <div className={classAlarm()}>
      <Row type="flex" justify="space-around">
        <div>
          <Text className={active && !acknowledge ? 'active-alarm alarm-name' : 'alarm-name'}>
            {name.replace(/_/g, ' ')}
            <Tooltip title={isAudible ? 'Turn off audible alarm' : 'Turn on audible alarm'}>
              <Icon
                type={isAudible ? 'sound' : 'eye-o'}
                onClick={() => sendIsAudible(!isAudible)}
                className="alarm-audible-icon"
              />
            </Tooltip>
          </Text>
          <Paragraph type="secondary" className="alarm-source">
            {`Source: ${source.replace(/_/g, ' ')}`}
          </Paragraph>
        </div>
      </Row>
      <Row type="flex" justify="space-around">
        {((active && enabled) && !acknowledge)
          && (
            <Col span={12}>
              <Button onClick={() => sendAcknowledge(true)} type="default">Defer</Button>
            </Col>
          )}
        {((active && enabled) && !acknowledge)
          ? (
            <Col span={12}>
              <Button onClick={() => sendEnable(false)} type="primary">Disable</Button>
            </Col>
          )
          : (
            <Col span={22}>
              <Button onClick={() => sendEnable(!enabled)} type={enabled ? 'primary' : 'default'}>{enabled ? 'Disable' : 'Enable'}</Button>
            </Col>
          )}
      </Row>
    </div>
  );
};

AlarmPageWidget.propTypes = {
  alarm: PropTypes.instanceOf(Object).isRequired,
};

export default AlarmPageWidget;
