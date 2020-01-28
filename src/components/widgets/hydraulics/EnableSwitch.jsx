import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Typography, Row, Col,
} from 'antd';
import { sendEnableUpdate } from '../../../api';

const EnableSwitch = ({ enable, title, color }) => {
  const { group_id, enable_id, enabled } = enable;
  return (
    <Row className={color ? 'enable-switch-row colored' : 'enable-switch-row'}>
      <Col span={12}>
        <Typography.Text>{title}</Typography.Text>
      </Col>
      <Col span={12}>
        <Switch
          checked={!!enabled}
          onClick={(e) => sendEnableUpdate({
            group_id,
            enable_id,
            enabled: e,
          })}
        />
      </Col>
    </Row>
  );
};

EnableSwitch.propTypes = {
  enable: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.bool.isRequired,
};

export default EnableSwitch;
