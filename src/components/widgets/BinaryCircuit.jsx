import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { postCircuitStateUpdate } from '../../api';
import { RECEIVE_CIRCUITS_UPDATE } from '../../actions/types';


const BinaryCircuit = ({
  circuit, disabled, partiallyOn,
}) => {
  const dispatch = useDispatch();
  const sendUpdate = (e) => {
    postCircuitStateUpdate({ ...circuit, state: e ? 1 : 0 })
      .then((res) => {
        if (res.acknowledged) {
          dispatch({ type: RECEIVE_CIRCUITS_UPDATE, payload: { type: 'loads', circuit: circuit.name, [circuit.name]: { state: e ? 1 : 0, actualState: e ? 1 : 0 } } });
        }
        // setTimeout(() => {}, 2000);
      });
  };
  return (
    <Switch
      className={(circuit.tripped || partiallyOn) ? 'binary-circuit-switch tripped' : 'binary-circuit-switch'}
      checked={circuit.actualState === 1}
      onChange={(e) => sendUpdate(e)}
      disabled={disabled}
    />
  );
};

BinaryCircuit.propTypes = {
  circuit: PropTypes.instanceOf(Object).isRequired,
  partiallyOn: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};

export default BinaryCircuit;
