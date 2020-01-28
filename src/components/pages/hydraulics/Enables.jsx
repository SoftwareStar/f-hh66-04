import React from 'react';
import { useSelector } from 'react-redux';
import {
  Row, Col, Typography, Collapse,
} from 'antd';
import EnableSwitch from '../../widgets/hydraulics/EnableSwitch';
import CommitParameters from '../../widgets/hydraulics/CommitParameters';

const { Panel } = Collapse;

const Enables = () => {
  const Hydro_Stop_Port_Helm = useSelector((state) => state.Enables[0][0]);
  const Hydro_Stop_Stbd_Helm = useSelector((state) => state.Enables[0][1]);
  const Hydro_Stop_Pit = useSelector((state) => state.Enables[0][2]);
  const Hydro_Stop_Nav = useSelector((state) => state.Enables[0][3]);
  const Reservoir_Ball_Valves = useSelector((state) => state.Enables[0][4]);
  const Reservoir_Fluid_Hot = useSelector((state) => state.Enables[0][5]);
  const Reservoir_Fluid_Low = useSelector((state) => state.Enables[0][6]);
  const PowerPack_Pumps = useSelector((state) => state.Enables[0][7]);
  const PowerPack_1_Hot = useSelector((state) => state.Enables[0][8]);
  const PowerPack_2_Hot = useSelector((state) => state.Enables[0][9]);
  const Traveler_Line_Driver = useSelector((state) => state.Enables[0][10]);
  const Main_Port = useSelector((state) => state.Enables[1][0]);
  const Main_Stbd = useSelector((state) => state.Enables[1][1]);
  const Main_Pit = useSelector((state) => state.Enables[1][2]);
  const Rudder_Port = useSelector((state) => state.Enables[1][3]);
  const Rudder_Stbd = useSelector((state) => state.Enables[1][4]);
  const Daggerboard_Port = useSelector((state) => state.Enables[1][5]);
  const Daggerboard_Stbd = useSelector((state) => state.Enables[1][6]);
  const Daggerboard_Nav = useSelector((state) => state.Enables[1][7]);
  const Pit_Port_13 = useSelector((state) => state.Enables[2][0]);
  const Pit_Port_2 = useSelector((state) => state.Enables[2][1]);
  const Pit_Stbd_13 = useSelector((state) => state.Enables[2][2]);
  const Pit_Stbd_2 = useSelector((state) => state.Enables[2][3]);
  const Traveler_Port_13 = useSelector((state) => state.Enables[2][4]);
  const Traveler_Port_2 = useSelector((state) => state.Enables[2][5]);
  const Traveler_Stbd_13 = useSelector((state) => state.Enables[2][6]);
  const Traveler_Stbd_2 = useSelector((state) => state.Enables[2][7]);
  const Primary_Port_13 = useSelector((state) => state.Enables[2][8]);
  const Primary_Port_2 = useSelector((state) => state.Enables[2][9]);
  const Primary_Stbd_13 = useSelector((state) => state.Enables[2][10]);
  const Primary_Stbd_2 = useSelector((state) => state.Enables[2][11]);
  const Mainsheet_Dump_Port_Helm = useSelector((state) => state.Enables[3][0]);
  const Mainsheet_Dump_Stbd_Helm = useSelector((state) => state.Enables[3][1]);
  const Mainsheet_Dump_Pit = useSelector((state) => state.Enables[3][2]);
  const Mainsheet_Dump_Nav = useSelector((state) => state.Enables[3][3]);
  const Joystick_Port = useSelector((state) => state.Enables[3][4]);
  const Joystick_Stbd = useSelector((state) => state.Enables[3][5]);

  const Columns = () => (
    <Row className="enable-switch-row">
      <Col span={12} className="enable-table-column">
        <Typography.Text>Name</Typography.Text>
      </Col>
      <Col span={12} className="enable-table-column">
        <Typography.Text>Enabled</Typography.Text>
      </Col>
    </Row>
  );
  return (
    <Row className="enables-page">
      <CommitParameters />
      <Collapse accordion>
        <Panel header="System" key="1">
          <Columns />
          <EnableSwitch color enable={Hydro_Stop_Port_Helm} title="Hydro Stop Port Helm" />
          <EnableSwitch color={false} enable={Hydro_Stop_Stbd_Helm} title="Hydro Stop Stbd Helm" />
          <EnableSwitch color enable={Hydro_Stop_Pit} title="Hydro Stop Pit" />
          <EnableSwitch color={false} enable={Hydro_Stop_Nav} title="Hydro Stop Nav" />
          <EnableSwitch color enable={Reservoir_Ball_Valves} title="Reservoir Ball Valves" />
          <EnableSwitch color={false} enable={Reservoir_Fluid_Hot} title="Reservoir Fluid Hot" />
          <EnableSwitch color enable={Reservoir_Fluid_Low} title="Reservoir Fluid Low" />
          <EnableSwitch color={false} enable={PowerPack_Pumps} title="PowerPack Pumps" />
          <EnableSwitch color enable={PowerPack_1_Hot} title="PowerPack 1 Hot" />
          <EnableSwitch color={false} enable={PowerPack_2_Hot} title="PowerPack 2 Hot" />
          <EnableSwitch color enable={Traveler_Line_Driver} title="Traveler Line Driver" />
        </Panel>
        <Panel header="Membrane Panels" key="2">
          <Columns />
          <EnableSwitch color enable={Main_Port} title="Main Port" />
          <EnableSwitch color={false} enable={Main_Stbd} title="Main Stbd" />
          <EnableSwitch color enable={Main_Pit} title="Main Pit" />
          <EnableSwitch color={false} enable={Rudder_Port} title="Rudder Port" />
          <EnableSwitch color enable={Rudder_Stbd} title="Rudder Stbd" />
          <EnableSwitch color={false} enable={Daggerboard_Port} title="Daggerboard Port" />
          <EnableSwitch color enable={Daggerboard_Stbd} title="Daggerboard Stbd" />
          <EnableSwitch color={false} enable={Daggerboard_Nav} title="Daggerboard Nav" />
        </Panel>
        <Panel header="Foot Switches" key="3">
          <Columns />
          <EnableSwitch color enable={Pit_Port_13} title="Pit Port 13" />
          <EnableSwitch color={false} enable={Pit_Port_2} title="Pit Port 2" />
          <EnableSwitch color enable={Pit_Stbd_13} title="Pit Stbd 13" />
          <EnableSwitch color={false} enable={Pit_Stbd_2} title="Pit Stbd 2" />
          <EnableSwitch color enable={Traveler_Port_13} title="Traveler Port 13" />
          <EnableSwitch color={false} enable={Traveler_Port_2} title="Traveler Port 2" />
          <EnableSwitch color enable={Traveler_Stbd_13} title="Traveler Stbd 13" />
          <EnableSwitch color={false} enable={Traveler_Stbd_2} title="Traveler Stbd 2" />
          <EnableSwitch color enable={Primary_Port_13} title="Primary Port 13" />
          <EnableSwitch color={false} enable={Primary_Port_2} title="Primary Port 2" />
          <EnableSwitch color enable={Primary_Stbd_13} title="Primary Stbd 13" />
          <EnableSwitch color={false} enable={Primary_Stbd_2} title="Primary Stbd 2" />
        </Panel>
        <Panel header="Discrete Buttons" key="4">
          <Columns />
          <EnableSwitch color enable={Mainsheet_Dump_Port_Helm} title="Mainsheet Dump Port Helm" />
          <EnableSwitch color={false} enable={Mainsheet_Dump_Stbd_Helm} title="Mainsheet Dump Stbd Helm" />
          <EnableSwitch color enable={Mainsheet_Dump_Pit} title="Mainsheet Dump Pit" />
          <EnableSwitch color={false} enable={Mainsheet_Dump_Nav} title="Mainsheet Dump Nav" />
          <EnableSwitch color enable={Joystick_Port} title="Joystick Port" />
          <EnableSwitch color={false} enable={Joystick_Stbd} title="Joystick Stbd" />
        </Panel>
      </Collapse>
    </Row>
  );
};

export default Enables;
