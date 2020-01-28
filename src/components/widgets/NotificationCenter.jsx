import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, Typography } from 'antd';


const { Paragraph } = Typography;

const NotificationCenter = () => {
  const [visible, setVisible] = useState(false);
  const activeAlarms = useSelector((state) => state.Alarms.filter((alarm) => alarm.active));
  const trippedFuses = useSelector((state) => {
    if (visible) {
      if (state.Circuits.fuses) {
        return Object.filter(state.Circuits.fuses, (fuse) => fuse.tripped);
      }
    }
    return {};
  });
  return (
    <div className="role-change-widget">
      <Button size="large" type="link" icon={trippedFuses ? 'notification' : 'check'} onClick={() => setVisible(true)} />
      <Modal
        className="role-change-widget-modal"
        title={<Paragraph className="role-change-widget-modal-title">Role Settings</Paragraph>}
        visible={visible}
        onOk={() => setVisible(true)}
        onCancel={() => {
          setVisible(false);
        }}
        footer={null}
      >
        <div>
          {trippedFuses && Object.keys(trippedFuses).map((fuse, index) => console.log(fuse))}
          {activeAlarms.map((alarm) => (
            <div key={alarm.name}>
              {alarm.name}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default NotificationCenter;
