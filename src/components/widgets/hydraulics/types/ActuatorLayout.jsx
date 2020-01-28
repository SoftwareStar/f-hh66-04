import React from 'react';
import { Collapse } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Actions from './Actions';
import Sensors from './Sensors';
import Parameters from './Parameters';

const { Panel } = Collapse;

const ActuatorLayout = () => {
  const { id } = useParams();
  const type = useSelector((state) => state.Hydraulics[id].kind);
  const actuator = useSelector((state) => state.Hydraulics[id].name);
  return (
    <div>
      <Collapse bordered={false} defaultActiveKey={['0', '1']}>
        <Panel header="Actions" key="0">
          <Actions type={type} actuator={actuator} />
        </Panel>
        <Panel header="Sensors" key="1">
          <Sensors type={type} actuator={actuator} />
        </Panel>
        <Panel header="Parameters" key="2">
          <Parameters type={type} actuator={actuator} />
        </Panel>
      </Collapse>
    </div>
  );
};

export default ActuatorLayout;
