import React, { useMemo } from 'react';
import { Radio, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Blower_Bilge_Port, Bilge_Fan_Auto_Port } from '../../api/circuits';
import { postCircuitStateUpdate } from '../../api';
import { RECEIVE_CIRCUITS_UPDATE } from '../../actions/types';


const { Paragraph } = Typography;

const PortBilgeBlower = () => {
  const dispatch = useDispatch();
  const bilgeAuto = useSelector((state) => state.Circuits.loads[Bilge_Fan_Auto_Port]);
  const bilgeBlowerPort = useSelector((state) => state.Circuits.loads[Blower_Bilge_Port]);
  const sendUpdate = (circuit, state) => {
    console.log(circuit, state);
    postCircuitStateUpdate({ ...circuit, state })
      .then((res) => {
        if (res.acknowledged) {
          dispatch({ type: RECEIVE_CIRCUITS_UPDATE, payload: { type: 'loads', circuit: circuit.name, [circuit.name]: { ...circuit, state, actualState: state } } });
        }
      });
  };
  const handleChange = ({ target: { value } }) => {
    if (value === 'Off') {
      sendUpdate(bilgeAuto.name, 0);
      sendUpdate(bilgeBlowerPort.name, 0);
    } else if (value === 'On') {
      sendUpdate(bilgeAuto.name, 0);
      sendUpdate(bilgeBlowerPort.name, 1);
    } else if (value === 'Auto') {
      sendUpdate(bilgeAuto.name, 1);
      sendUpdate(bilgeBlowerPort.name, 0);
    }
  };
  const selectValue = useMemo(() => {
    if (!bilgeAuto.state) {
      if (bilgeBlowerPort.state) {
        return 'On';
      }
      return 'Off';
    }
    return 'Auto';
  }, [bilgeAuto, bilgeBlowerPort]);
  return (
    <div className="circuit-container">
      <Paragraph style={{ fontSize: 16 }}>Port Bilge Blower</Paragraph>
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
  );
};

export default PortBilgeBlower;
