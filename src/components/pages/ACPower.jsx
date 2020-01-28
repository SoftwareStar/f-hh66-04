import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  Row, Col, Statistic, Typography, Divider,
} from 'antd';
import {
  ACA_Air_Con_Port_Aft,
  ACA_Air_Con_Saloon,
  ACA_Air_Con_Stbd_Aft,
  ACA_Dimming_Glass_Controller_Port,
  ACA_Dimming_Glass_Controller_Stbd,
  ACA_Ice_Maker,
  ACA_Satellite_Communication,
  ACA_Sockets_Cockpit,
  ACA_Sockets_Forepeak,
  ACA_Sockets_Port,
  ACA_Sockets_Saloon_Galley,
  ACA_Sockets_Stbd,
  ACA_Water_Heater,
  ACA_Wine_Chiller,
  ACB_Air_Con_Port_Aft,
  ACB_Air_Con_Saloon,
  ACB_Air_Con_Stbd_Aft,
  ACB_Dimming_Glass_Controller_Port,
  ACB_Dimming_Glass_Controller_Stbd,
  ACB_Ice_Maker,
  ACB_Satellite_Communication,
  ACB_Sockets_Cockpit,
  ACB_Sockets_Forepeak,
  ACB_Sockets_Port,
  ACB_Sockets_Saloon_Galley,
  ACB_Sockets_Stbd,
  ACB_Water_Heater,
  ACB_Wine_Chiller,
  ACC_Air_Con_Port_Aft,
  ACC_Air_Con_Saloon,
  ACC_Air_Con_Stbd_Aft,
  ACC_Dimming_Glass_Controller_Port,
  ACC_Dimming_Glass_Controller_Stbd,
  ACC_Ice_Maker,
  ACC_Satellite_Communication,
  ACC_Sockets_Cockpit,
  ACC_Sockets_Forepeak,
  ACC_Sockets_Port,
  ACC_Sockets_Saloon_Galley,
  ACC_Sockets_Stbd,
  ACC_Water_Heater,
  ACC_Wine_Chiller,
  Group_1_Shore_Detect,
  Group_2_Shore_Detect,
  Inverter_Output_Detect,
} from '../../api/circuits';
import ACCircuitWidget from '../widgets/ACCircuitWidget';

const { Paragraph } = Typography;

const ACPower = () => {
  const InverterPresent = useSelector((state) => state.Circuits.loads[Inverter_Output_Detect]);
  const ShoreAirConditioning = useSelector((state) => state.NMEA.Shore_Air_Con);
  const Shore1Present = useSelector((state) => state.Circuits.loads[Group_1_Shore_Detect]);
  const ShoreUtility = useSelector((state) => state.NMEA.Shore_Utility);
  const Shore2Present = useSelector((state) => state.Circuits.loads[Group_2_Shore_Detect]);
  const ACHouse = useSelector((state) => state.NMEA.AC_House);
  const NotConnected = () => (
    <Statistic
      title="Not Connected"
      valueStyle={{ color: 'transparent', cursor: 'default' }}
      value=""
    />
  );
  const ACStatistic = ({ value, suffix, title }) => (
    <Statistic
      title={title}
      valueStyle={{ color: 'rgba(255, 255, 255, 0.75)' }}
      value={value}
      suffix={suffix}
    />
  );
  ACStatistic.propTypes = {
    value: PropTypes.number.isRequired,
    suffix: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  return (
    <div className="ac-page">
      <Row type="flex" justify="space-around">
        <Col xs={24} md={8} className="ac-source-section">
          <div className={Shore1Present.actualState ? 'ac-source-values connected' : 'ac-source-values'}>
            <Paragraph className="ac-title">Shore 1</Paragraph>
            {Shore1Present.actualState ? (
              <Row type="flex" justify="space-around">
                <Col span={8}>
                  <ACStatistic
                    title="Voltage"
                    value={ShoreUtility.lineNeutralVoltage.value.toFixed(0)}
                    suffix="V"
                  />
                </Col>
                <Col span={8}>
                  <ACStatistic
                    title="Frequency"
                    value={ShoreUtility.frequency.value.toFixed(1)}
                    suffix="Hz"
                  />
                </Col>
                <Col span={8}>
                  <ACStatistic
                    title="Current"
                    value={ShoreUtility.current.value.toFixed(0)}
                    suffix="A"
                  />
                </Col>
              </Row>
            ) : (
              <NotConnected />
            )}
          </div>
        </Col>
        <Col xs={24} md={8} className="ac-source-section">
          <div className={Shore2Present.actualState ? 'ac-source-values connected' : 'ac-source-values'}>
            <Paragraph className="ac-title">Shore 2</Paragraph>
            {Shore2Present.actualState ? (
              <Row type="flex" justify="space-around">
                <Col span={8}>
                  <ACStatistic
                    title="Voltage"
                    value={ShoreAirConditioning.lineNeutralVoltage.value.toFixed(0)}
                    suffix="V"
                  />
                </Col>
                <Col span={8}>
                  <ACStatistic
                    title="Frequency"
                    value={ShoreAirConditioning.frequency.value.toFixed(1)}
                    suffix="Hz"
                  />
                </Col>
                <Col span={8}>
                  <ACStatistic
                    title="Current"
                    value={ShoreAirConditioning.current.value.toFixed(0)}
                    suffix="A"
                  />
                </Col>
              </Row>
            ) : (
              <NotConnected />
            )}
          </div>
        </Col>
        <Col xs={24} md={8} className="ac-source-section">
          <div className={InverterPresent.actualState ? 'ac-source-values connected' : 'ac-source-values'}>
            <Paragraph className="ac-title">Inverter</Paragraph>
            {InverterPresent.actualState ? (
              <Row type="flex" justify="space-around">
                <Col span={8}>
                  <ACStatistic
                    title="Voltage"
                    value={ACHouse.lineNeutralVoltage.value.toFixed(0)}
                    suffix="V"
                  />
                </Col>
                <Col span={8}>
                  <ACStatistic
                    title="Frequency"
                    value={ACHouse.frequency.value.toFixed(1)}
                    suffix="Hz"
                  />
                </Col>
                <Col span={8}>
                  <ACStatistic
                    title="Current"
                    value={ACHouse.current.value.toFixed(0)}
                    suffix="A"
                  />
                </Col>
              </Row>
            ) : (
              <NotConnected />
            )}
          </div>
        </Col>
      </Row>
      <Divider className="ac-divider" />
      <Row type="flex" justify="space-around">
        <Col md={8} xs={24}>
          <ACCircuitWidget
            name="A/C Port Aft"
            shore={ACC_Air_Con_Port_Aft}
            inverter={ACB_Air_Con_Port_Aft}
            circuit={ACA_Air_Con_Port_Aft}
          />
        </Col>
        <Col md={8} xs={24}>
          <ACCircuitWidget
            name="A/C Stbd Aft"
            shore={ACC_Air_Con_Stbd_Aft}
            inverter={ACB_Air_Con_Stbd_Aft}
            circuit={ACA_Air_Con_Stbd_Aft}
          />
        </Col>
        <Col md={8} xs={24}>
          <ACCircuitWidget
            name="A/C Saloon"
            shore={ACC_Air_Con_Saloon}
            inverter={ACB_Air_Con_Saloon}
            circuit={ACA_Air_Con_Saloon}
          />
        </Col>
        <Divider className="ac-divider" />
        <Col md={12} xs={24}>
          <ACCircuitWidget
            name="Dimmable Glass Port"
            shore={ACC_Dimming_Glass_Controller_Port}
            inverter={ACB_Dimming_Glass_Controller_Port}
            circuit={ACA_Dimming_Glass_Controller_Port}
          />
        </Col>
        <Col md={12} xs={24}>
          <ACCircuitWidget
            name="Dimmable Glass Stbd"
            shore={ACC_Dimming_Glass_Controller_Stbd}
            inverter={ACB_Dimming_Glass_Controller_Stbd}
            circuit={ACA_Dimming_Glass_Controller_Stbd}
          />
        </Col>
        <Divider className="ac-divider" />
        <Col md={8} xs={24}>
          <ACCircuitWidget
            name="Sockets Cockpit"
            shore={ACC_Sockets_Cockpit}
            inverter={ACB_Sockets_Cockpit}
            circuit={ACA_Sockets_Cockpit}
          />
        </Col>
        <Col md={8} xs={24}>
          <ACCircuitWidget
            name="Sockets Forepeak"
            shore={ACC_Sockets_Forepeak}
            inverter={ACB_Sockets_Forepeak}
            circuit={ACA_Sockets_Forepeak}
          />
        </Col>
        <Col md={8} xs={24}>
          <ACCircuitWidget
            name="Sockets Saloon / Galley"
            shore={ACC_Sockets_Saloon_Galley}
            inverter={ACB_Sockets_Saloon_Galley}
            circuit={ACA_Sockets_Saloon_Galley}
          />
        </Col>
        <Col md={12} xs={24}>
          <ACCircuitWidget
            name="Sockets Port"
            shore={ACC_Sockets_Port}
            inverter={ACB_Sockets_Port}
            circuit={ACA_Sockets_Port}
          />
        </Col>
        <Col md={12} xs={24}>
          <ACCircuitWidget
            name="Sockets Stbd"
            shore={ACC_Sockets_Stbd}
            inverter={ACB_Sockets_Stbd}
            circuit={ACA_Sockets_Stbd}
          />
        </Col>
        <Divider className="ac-divider" />
        <Col md={12} xs={24}>
          <ACCircuitWidget
            name="Satellite Communication"
            shore={ACC_Satellite_Communication}
            inverter={ACB_Satellite_Communication}
            circuit={ACA_Satellite_Communication}
          />
        </Col>
        <Col md={12} xs={24}>
          <ACCircuitWidget
            name="Ice Maker"
            shore={ACC_Ice_Maker}
            inverter={ACB_Ice_Maker}
            circuit={ACA_Ice_Maker}
          />
        </Col>
        <Col md={12} xs={24}>
          <ACCircuitWidget
            name="Water Heater"
            shore={ACC_Water_Heater}
            inverter={ACB_Water_Heater}
            circuit={ACA_Water_Heater}
          />
        </Col>
        <Col md={12} xs={24}>
          <ACCircuitWidget
            name="Wine Chiller"
            shore={ACC_Wine_Chiller}
            inverter={ACB_Wine_Chiller}
            circuit={ACA_Wine_Chiller}
          />
        </Col>
      </Row>
    </div>
  );
};
export default ACPower;
