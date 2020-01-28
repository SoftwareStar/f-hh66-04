import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Icon } from 'antd';

const DigitalStatus = ({
  value,
  name,
  span,
  status,
  icon,
  format,
}) => (
  <Col xs={24} sm={12} md={span} lg={span} xl={span}>
    <Col span={24}>
      <h6 style={{ textAlign: 'center' }}>
        {`${name} ${format && <small>{format}</small>}`}
      </h6>
    </Col>
    <Col span={24} style={{ marginTop: '7px' }}>
      <Row type="flex" justify="space-around">
        <Col span={18}>
          {(value !== -1) ? (
            <p className="battery-number">
              <Icon type={icon} />
              {status}
            </p>
          ) : <p className="battery-number">N/A</p>}
        </Col>
      </Row>
    </Col>
  </Col>
);


DigitalStatus.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  format: PropTypes.string,
  span: PropTypes.number,
  value: PropTypes.number.isRequired,
};

export default DigitalStatus;
