import React from 'react';
import PropTypes from 'prop-types';
import { Col, Typography, Icon } from 'antd';
import Enable from './alarmTools/Enable';
import Threshold from './alarmTools/Threshold';

const { Paragraph } = Typography;

const AlarmWidget = ({
  label,
  alarm,
  format = '',
  thresholdMin = 0,
  thresholdMax = 1,
  convertFunction = null,
  step = 0.1,
  boolean,
  span = 12,
}) => {
  const {
    active, enabled, acknowledge, name, threshold,
  } = alarm;
  return (
    <Col xs={22} sm={12} md={12} lg={span}>
      <div className="alarm-widget">
        <div className={(!acknowledge && active) ? 'active-alarm' : ''}>
          <Paragraph className="alarm-name">
            {(!acknowledge && active) && <Icon style={{ marginRight: 8 }} type="alert" />}
            {label}
          </Paragraph>
          <Enable
            enabled={enabled}
            name={name}
          />
          {!boolean
          && (
          <Threshold
            name={name}
            format={format}
            minimum={thresholdMin}
            maximum={thresholdMax}
            threshold={threshold}
            step={step}
            convertFunction={convertFunction}
          />
          )}
        </div>
      </div>
    </Col>
  );
};

AlarmWidget.propTypes = {
  label: PropTypes.string.isRequired,
  alarm: PropTypes.instanceOf(Object).isRequired,
  thresholdMin: PropTypes.number,
  thresholdMax: PropTypes.number,
  span: PropTypes.number,
  format: PropTypes.string,
  convertFunction: PropTypes.func,
  step: PropTypes.number,
  boolean: PropTypes.bool,
};

export default AlarmWidget;
