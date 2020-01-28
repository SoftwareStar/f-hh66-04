import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { postHydraulicAction } from '../../../api';
import { STOP } from '../../../api/hydraulicActions';

const TouchButton = ({
  name, disabled = false, signalName, action,
}) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [active, setActive] = useState(false);
  const actuation = useSelector((state) => state.Hydraulics[signalName].actuation);

  useEffect(() => {
    if (actuation === action) {
      setActive(true);
    } else (setActive(false));
  }, [actuation, action]);

  const activeType = name === 'Stop' ? 'danger' : 'primary';

  const startAction = () => {
    setActive(true);
    setMouseDown(true);
    postHydraulicAction(signalName, action);
  };

  const stopAction = () => {
    setActive(false);
    setMouseDown(false);
    postHydraulicAction(signalName, STOP);
  };

  return (
    <div className="touch-button">
      <Button
        type={active ? activeType : 'default'}
        size="large"
        onMouseDown={!disabled ? startAction : undefined}
        onTouchStart={!disabled ? startAction : undefined}
        onMouseUp={!disabled ? stopAction : undefined}
        onTouchEnd={(!disabled && mouseDown) ? stopAction : undefined}
        onMouseLeave={(!disabled && mouseDown) ? stopAction : undefined}
        disabled={disabled}
      >
        {name}
      </Button>
    </div>
  );
};

TouchButton.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  signalName: PropTypes.string.isRequired,
  action: PropTypes.number.isRequired,
};

export default TouchButton;
