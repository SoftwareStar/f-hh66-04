import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Typography, Icon } from 'antd';
import { Link } from 'react-router-dom';
import DimmableCircuit from './DimmableCircuit';
import BinaryCircuit from './BinaryCircuit';

const { Paragraph } = Typography;

const RenderCircuitByType = ({
  circuitName, title, noDetails = false, privilege = 'Unrestricted', disabled = false,
}) => {
  const circuit = useSelector((state) => {
    const load = state.Circuits.loads[circuitName];
    const fuse = state.Circuits.fuses[circuitName];
    return { ...load, ...fuse };
  });
  const user = useSelector((state) => state.UI.user);
  const partiallyOn = useSelector((state) => {
    if (state.Circuits.loads[circuitName].meta.slaves) {
      const slaves = state.Circuits.loads[circuitName].meta.slaves.map((e) => e.replace('loads.', ''));
      const fuses = slaves.map((item) => state.Circuits.fuses[item]);
      return fuses.filter((e) => e.tripped).length > 0;
    }
    return false;
  });
  const showDetails = useMemo(() => {
    if (!noDetails && user.permissions.includes(privilege)) {
      return true;
    }
    return false;
  }, [privilege, user, noDetails]);
  const renderType = useMemo(() => {
    if (circuit) {
      const kind = circuit.meta.originalKind;
      if (kind.includes('Dim 1x')) {
        return (
          <DimmableCircuit circuit={circuit} partiallyOn={partiallyOn} disabled={disabled} />
        );
      }
      if (kind.includes('On/Off')) {
        return <BinaryCircuit circuit={circuit} partiallyOn={partiallyOn} disabled={disabled} />;
      }
      if (kind.includes('Slave')) {
        return <BinaryCircuit circuit={circuit} disabled={disabled} />;
      }
    }
    return null;
  }, [circuit, disabled, partiallyOn]);
  return (
    <div>
      <div className="circuit-container">
        {showDetails && <Link to={`/circuits/${circuit.name}`}><Icon style={{ float: 'left ' }} type={circuit.meta.originalKind.includes('Dim') || circuit.meta.originalKind.includes('IV') ? 'setting' : 'info-circle'} /></Link>}
        <Paragraph style={{ fontSize: 16 }}>{noDetails ? 'Circuit Control' : title}</Paragraph>
        {renderType}
      </div>
    </div>
  );
};

RenderCircuitByType.propTypes = {
  circuitName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  noDetails: PropTypes.bool,
  privilege: PropTypes.string,
  disabled: PropTypes.bool,
};

export default RenderCircuitByType;
