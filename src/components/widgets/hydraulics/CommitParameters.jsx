import React from 'react';
import PropTypes from 'prop-types';
import { Button, message } from 'antd';
import { commitHydraulicParams } from '../../../api';

const CommitParameters = ({ actuator }) => (
  <div className="commit-parameters-div">
    <Button
      // className="commit-parameters-button"
      type="primary"
      icon="download"
      onClick={() => commitHydraulicParams(actuator).then((res) => res && message.success('Parameters Committed'))}
    >
      Commit
    </Button>
  </div>
);

CommitParameters.propTypes = {
  actuator: PropTypes.string.isRequired,
};

export default CommitParameters;
