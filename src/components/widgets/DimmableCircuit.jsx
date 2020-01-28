import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Slider } from 'antd';
import PropTypes from 'prop-types';
import { postCircuitDimmingLevelUpdate } from '../../api';
import BinaryCircuit from './BinaryCircuit';

const DimmableCircuit = ({
  circuit, disabled, partiallyOn,
}) => {
  const [value, setValue] = useState(circuit.dimmingLevel);
  const [changing, setChanging] = useState(false);
  useEffect(() => {
    if (!changing) {
      if (value !== circuit.dimmingLevel) {
        setValue(circuit.dimmingLevel);
      }
    }
  }, [circuit.dimmingLevel, changing]);
  const sendDimmingUpdate = (e) => {
    postCircuitDimmingLevelUpdate({ ...circuit, dimmingLevel: e });
  };

  return (
    <div className="dimmable-circuit">
      <BinaryCircuit circuit={circuit} partiallyOn={partiallyOn} disabled={disabled} />
      { !!circuit.state && (
        <Slider
          style={{ maxWidth: 300 }}
          disabled={!circuit.state || disabled}
          tipFormatter={(e) => `${(Math.trunc(e * 100))}%`}
          max={1}
          min={0.01}
          step={0.01}
          value={value}
          onChange={(e) => {
            if (e !== value) {
              setChanging(true);
              sendDimmingUpdate(e);
              setValue(e);
            }
          }}
          // onAfterChange={() => setTimeout(() => setChanging(false), 500)}
        />
      )}
    </div>
  );
};

DimmableCircuit.propTypes = {
  circuit: PropTypes.instanceOf(Object).isRequired,
  partiallyOn: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default DimmableCircuit;
