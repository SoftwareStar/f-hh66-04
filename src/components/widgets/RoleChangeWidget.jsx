import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Modal, Row, Typography, Icon, Select, message, Spin,
} from 'antd';
import { updateRole, updateRolePIN } from '../../actions/actions';

const { Option } = Select;

const { Paragraph } = Typography;
const RoleChangeWidget = () => {
  const dispatch = useDispatch();
  const connected = useSelector((state) => state.UI.connection.state);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [changePIN, setChangePIN] = useState(false);
  const [settingCurrentPIN, setSettingCurrentPIN] = useState(false);
  const [settingNewPIN, setSettingNewPIN] = useState(false);
  const [pin, setPIN] = useState('');
  const [currentPIN, setCurrentPIN] = useState('');
  const [newPIN, setNewPIN] = useState('');
  const user = useSelector((state) => state.UI.user);
  const [selectedRole, setSelectedRole] = useState('');
  const [pinToChange, setPINToChange] = useState('');
  const roles = ['Guest', 'Crew', 'Performance', 'Technical'];
  const resetPIN = () => {
    if (changePIN) {
      if (settingCurrentPIN) {
        setCurrentPIN('');
      }
      if (settingNewPIN) {
        setNewPIN('');
      }
    } else {
      setPIN('');
    }
  };
  const removeFromPIN = () => {
    if (changePIN) {
      if (settingCurrentPIN) {
        setCurrentPIN(currentPIN.substring(0, currentPIN.length - 1));
      }
      if (settingNewPIN) {
        setNewPIN(newPIN.substring(0, newPIN.length - 1));
      }
    } else {
      setPIN(pin.substring(0, pin.length - 1));
    }
  };
  const addToPIN = (num) => {
    if (changePIN) {
      if (settingCurrentPIN) {
        setCurrentPIN(currentPIN + num);
      }
      if (settingNewPIN) {
        setNewPIN(newPIN + num);
      }
    } else {
      setPIN(pin + num);
    }
  };
  const reset = () => {
    setPIN('');
    setCurrentPIN('');
    setNewPIN('');
    setChangePIN(false);
    setSettingCurrentPIN(false);
    setSettingNewPIN(false);
  };
  const handleRoleChangeResponse = (res) => {
    setLoading(false);
    if (res.authenticated) {
      message.success(`Role successfully changed to ${res.role}`, 3);
      reset();
      setVisible(false);
    } else {
      message.error('Failed to change', 3);
    }
  };
  const selectNewRole = () => {
    if (selectedRole && (selectedRole !== user.role)) {
      setLoading(true);
      dispatch(updateRole(selectedRole, pin)).then((res) => handleRoleChangeResponse(res));
    } else {
      setLoading(false);
      setVisible(false);
    }
    reset();
  };
  const selectNewRoleOrChangeToGuest = (role) => {
    if (role !== user.role) {
      setSelectedRole(role);
      if (role === 'Guest') {
        setLoading(true);
        dispatch(updateRole(role, '')).then((res) => handleRoleChangeResponse(res));
      }
    } else {
      setSelectedRole(role);
    }
    reset();
  };
  const changePINSubmit = () => {
    if (settingCurrentPIN) {
      setSettingCurrentPIN(false);
      setSettingNewPIN(true);
    }
    if (settingNewPIN) {
      setLoading(true);
      dispatch(updateRolePIN(pinToChange, currentPIN, newPIN)).then((res) => {
        if (res.changed) {
          message.success('PIN successfully changed', 3);
          setLoading(false);
          reset();
        } else {
          message.error('PIN changed failed', 3);
          setLoading(false);
          reset();
        }
      });
    }
  };

  const keypad = () => (
    <div>
      <Row type="flex" justify="center">
        <Button.Group className="role-code">
          <Button onClick={() => addToPIN('1')}>1</Button>
          <Button onClick={() => addToPIN('2')}>
            <span>2</span>
            <small className="numpad-letters">ABC</small>
          </Button>
          <Button onClick={() => addToPIN('3')}>
            <span>3</span>
            <small className="numpad-letters">DEF</small>
          </Button>
        </Button.Group>
      </Row>
      <Row type="flex" justify="center">
        <Button.Group className="role-code">
          <Button onClick={() => addToPIN('4')}>
            <span>4</span>
            <small className="numpad-letters">GHI</small>
          </Button>
          <Button onClick={() => addToPIN('5')}>
            <span>5</span>
            <small className="numpad-letters">JKL</small>
          </Button>
          <Button onClick={() => addToPIN('6')}>
            <span>6</span>
            <small className="numpad-letters">MNO</small>
          </Button>
        </Button.Group>
      </Row>
      <Row type="flex" justify="center">
        <Button.Group className="role-code">
          <Button onClick={() => addToPIN('7')}>
            <span>7</span>
            <small className="numpad-letters">PQRS</small>
          </Button>
          <Button onClick={() => addToPIN('8')}>
            <span>8</span>
            <small className="numpad-letters">TUV</small>
          </Button>
          <Button onClick={() => addToPIN('9')}>
            <span>9</span>
            <small className="numpad-letters">WXYZ</small>
          </Button>
        </Button.Group>
      </Row>
      <Row type="flex" justify="center">
        <Button.Group className="role-code">
          <Button onClick={removeFromPIN}>
            <Icon type="left-square-o" />
          </Button>
          <Button onClick={() => addToPIN('0')}>0</Button>
          <Button onClick={resetPIN}><Icon type="delete" /></Button>
        </Button.Group>
      </Row>
    </div>
  );


  const selectPINToChange = () => (
    <Select
      size="large"
      placeholder="Select Role"
      onChange={(e) => setPINToChange(e)}
      className="role-select"
      dropdownClassName="role-select-dropdown"
    >
      {roles.map((item) => <Option key={item} value={item}>{item}</Option>)}
    </Select>
  );

  const renderStep = () => {
    if (!pinToChange) {
      return "Select a role to change it's pin";
    }
    if (settingCurrentPIN) {
      return `Enter the current pin for ${pinToChange}, and press "Next"`;
    }
    return `Enter a new pin for ${pinToChange}, and press "Submit"`;
  };

  const changePINSection = () => (
    <div>
      <Paragraph className="pin-change-instructions">{renderStep()}</Paragraph>
      {selectPINToChange()}
      {pinToChange && (
        <div>
          <Paragraph className="pin-viewer">{`Current PIN: ${currentPIN}`}</Paragraph>
          <Paragraph className="pin-viewer">{`New PIN: ${newPIN}`}</Paragraph>
          {keypad()}
        </div>
      )}
    </div>
  );

  const renderFooter = () => {
    if (changePIN) {
      return (
        <Button.Group className="change-pin">
          <Button type="default" onClick={settingCurrentPIN ? reset : () => setSettingNewPIN(false)}>Back</Button>
          <Button type="primary" onClick={changePINSubmit}>{settingNewPIN ? 'Submit' : 'Next'}</Button>
        </Button.Group>
      );
    }
    return <Button type="default" onClick={selectNewRole}>{!selectedRole || (selectedRole === user.role) ? 'Done' : 'Submit'}</Button>;
  };

  const selectRoleList = () => (
    <Select
      size="large"
      value={selectedRole || user.role}
      onChange={(e) => selectNewRoleOrChangeToGuest(e)}
      className="role-select"
      dropdownClassName="role-select-dropdown"
    >
      {roles.map((item) => <Option key={item} value={item}>{item === user.role ? `Current - ${item}` : item}</Option>)}
    </Select>
  );


  const renderBody = () => {
    if (changePIN) {
      if ((user.role === selectedRole) || !selectedRole) { return changePINSection(); }
    }
    if (selectedRole && (selectedRole !== user.role)) {
      return (
        <div>
          {selectRoleList()}
          {pin ? <Paragraph className="pin-viewer">{pin}</Paragraph> : <Paragraph className="pin-instructions">Enter PIN & Submit To Change Role</Paragraph>}
          {keypad()}
        </div>
      );
    }

    return (
      <div>
        {selectRoleList()}
        {user.permissions.includes('Password_Control') && (
          <Button
            onClick={() => {
              setChangePIN(true);
              setSettingCurrentPIN(true);
            }}
            block
          >
          Change PINs
          </Button>
        )}
      </div>
    );
  };

  return (
    <div className="role-change-widget">
      <Button size="large" type="link" icon="user" onClick={() => setVisible(true)} disabled={!connected}>
        {user.role}
      </Button>
      <Modal
        className="role-change-widget-modal"
        title={<Paragraph className="role-change-widget-modal-title">Role Settings</Paragraph>}
        visible={visible}
        onOk={() => setVisible(true)}
        onCancel={() => {
          reset();
          setVisible(false);
        }}
        footer={renderFooter()}
      >
        <Spin spinning={loading}>
          {renderBody()}
        </Spin>
      </Modal>
    </div>
  );
};

export default RoleChangeWidget;
