import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Typography, Descriptions, PageHeader,
} from 'antd';
import RPM from './engine/RPM';

const { Paragraph } = Typography;

const EngineWidget = ({ engine, name, connected }) => {
  const {
    revolutions,
    fuel,
    runTime,
    engineLoad,
    // engineTorque,
    // coolantPressure,
    // alternatorVoltage,
    oilPressure,
    temperature,
  } = engine;
  return (
    <Row type="flex" justify="space-around" className="engine-widget">
      <RPM name={name} engineOn={connected.transmitting} rpm={revolutions && connected.transmitting ? ((revolutions.value * 60)).toFixed(0) : ''} />
      <Col span={24} style={{ textAlign: 'center' }}><Paragraph className="engine-name">{name}</Paragraph></Col>
      { (connected.transmitting && connected.lastMessage < 15000) && (
      <PageHeader className="engine-details">
        <Descriptions
          size="default"
          layout="vertical"
          colon={false}
          column={{
            xl: 3, xs: 2,
          }}
        >
          {fuel && (
          <Descriptions.Item label="Fuel Rate">{`${(fuel.rate.value * 3600000).toFixed(1)} LPM`}</Descriptions.Item>
          )}
          { fuel && (
          <Descriptions.Item label="Fuel Pressure">{`${(fuel.pressure.value / 100000).toFixed(1)} BAR`}</Descriptions.Item>
          )}
          {oilPressure && (
            <Descriptions.Item label="Oil Pressure">{`${(oilPressure.value / 100000000).toFixed(1)} BAR`}</Descriptions.Item>
          )}
          {temperature && (
            <Descriptions.Item label="Temperature">
              {`${(temperature.value.toFixed(0) - 273)} `}
              &deg;C
            </Descriptions.Item>
          )}
          {engineLoad && (
            <Descriptions.Item label="Engine Load">{`${(engineLoad.value * 100).toFixed(0)} %`}</Descriptions.Item>
          )}
          {runTime && (
            <Descriptions.Item label="Engine Hours">{`${((runTime.value / 60) / 60).toFixed(1)}`}</Descriptions.Item>
          )}
        </Descriptions>
      </PageHeader>
      )}
    </Row>
  );
};

EngineWidget.propTypes = {
  engine: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  connected: PropTypes.instanceOf(Object).isRequired,
};

export default EngineWidget;
