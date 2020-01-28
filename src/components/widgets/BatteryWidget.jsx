import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Progress,
  Col,
  Typography,
  Button,
  PageHeader,
  Descriptions,
} from 'antd';
import { Link } from 'react-router-dom';

const { Paragraph, Text } = Typography;


const BatteryWidget = ({
  battery, name, connected, showDetails = true,
}) => {
  const {
    current = {},
    voltage = {},
    temperature = {},
    stateOfCharge = {},
    timeRemaining = {},
    // stateOfHealth = {},
  } = battery;

  const chargePercent = useMemo(() => {
    if (stateOfCharge.value) {
      return stateOfCharge.value * 100;
    }
    return 0;
  },
  [stateOfCharge]);

  const renderTimeRemaining = useMemo(() => {
    if (timeRemaining.value) {
      let m = timeRemaining.value / 60;
      const h = Math.floor(m / 60);
      m %= 60;
      if (m === 0) { m = '00'; }
      return (
        <div>
          <Text className="battery-widget-hours">{h}</Text>
          <Text className="battery-unit">Hrs</Text>
          <Text className="battery-widget-minutes">{m}</Text>
          <Text className="battery-unit">Mins</Text>
        </div>
      );
    }
    if (current.value > 0) {
      return <div>Charging</div>;
    }
    return <div>0</div>;
  }, [timeRemaining, current]);

  // const renderCurrentText = useMemo(() => {
  //   if (current.value > 0) {
  //     return 'Charging:';
  //   }
  //   if (current.value < 0) {
  //     return 'Discharging:';
  //   }
  //   return 'Current:';
  // }, [current.value]);

  const renderVoltage = useMemo(() => {
    if (voltage.value) {
      return voltage.value.toFixed(2);
    }
    return 0;
  }, [voltage]);

  const renderCurrent = useMemo(() => {
    if (current.value) {
      return current.value.toFixed(1);
    }
    return 0;
  }, [current.value]);

  const renderTemperature = useMemo(() => {
    if (temperature.value) {
      return (temperature.value - 273).toFixed(2);
    }
    return 0;
  }, [temperature.value]);


  return (
    <Col xs={24} md={8}>
      <div className="battery-widget">
        <Paragraph className="battery-widget-title">
          {name.replace('_', ' ')}
          {showDetails && <Link to={`/batteries/${name}`}><Button type="link" icon="setting" /></Link>}
        </Paragraph>
        { connected.transmitting ? (
          <Progress
            className="battery-widget-progress-bar"
            percent={chargePercent}
            format={(percent) => `${percent.toFixed(1)}%`}
            gapDegree={0}
            strokeWidth={25}
            status={chargePercent < 10 ? 'exception' : null}
            strokeColor="#6f92a2"
          />
        ) : (
          <Progress
            className="battery-widget-progress-bar"
            format={() => 'No Data'}
            gapDegree={0}
            strokeWidth={25}
            strokeColor="#6f92a2"
          />
        )}
        { connected.transmitting && (
          <PageHeader className="battery-details">
            <Descriptions
              size="default"
              layout="vertical"
              colon={false}
              column={1}
            >
              <Descriptions.Item label="Time Remaining">{renderTimeRemaining}</Descriptions.Item>
              <Descriptions.Item label="Voltage">
                {renderVoltage}
                <Text className="battery-unit">V</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Current: ">
                {renderCurrent}
                <Text className="battery-unit">A</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Temperature">
                {renderTemperature}
                <Text className="battery-unit">&deg;C</Text>
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
        )}
      </div>
    </Col>
  );
};

BatteryWidget.propTypes = {
  connected: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  battery: PropTypes.instanceOf(Object).isRequired,
  showDetails: PropTypes.bool,
};

export default BatteryWidget;
