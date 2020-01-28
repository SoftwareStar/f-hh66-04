import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  Row, Radio, Col,
} from 'antd';
import SummaryAlarmWidget from '../widgets/SummaryAlarmWidget';
import AlarmPageWidget from '../widgets/AlarmPageWidget';

const Alarms = () => {
  const [currentFilter, setCurrentFilter] = useState('ACTIVE');
  const alarmsList = useSelector((state) => state.Alarms);
  const alarms = useMemo(() => {
    switch (currentFilter) {
      case 'HCEC':
        return [...alarmsList.filter((item) => item.kind === 'HCEC')];
      case 'BILGE':
        return [...alarmsList.filter((item) => item.name.includes('Bilge'))];
      case 'BATTERIES':
        return [...alarmsList.filter((item) => item.path.includes('batteries'))];
      case 'ENGINE':
        return [...alarmsList.filter((item) => (item.source === 'Engine_Stbd' || item.source === 'Engine_Port'))];
      case 'TANKS':
        return [...alarmsList.filter((item) => item.path.includes('tanks'))];
      case 'ALL':
        return [...alarmsList];
      case 'ACTIVE':
        return [...alarmsList.filter((item) => (item.active === true))];
      default:
        return [...alarmsList];
    }
  }, [currentFilter, alarmsList]);
  // const columns = [
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //     key: 'name',
  //     align: 'center',
  //     render: (name) => name.replace(/_/g, ' '),
  //   },
  //   {
  //     title: 'Source',
  //     dataIndex: 'source',
  //     key: 'source',
  //     align: 'center',
  //     render: (source) => source.replace(/_/g, ' '),
  //   },
  //   {
  //     title: 'Enabled',
  //     dataIndex: 'enabled',
  //     key: 'enabled',
  //     align: 'center',
  //     sortDirections: ['descend'],
  //     sorter: (a, b) => a.enabled || b.enabled,
  //     render: (enabled) => <Button>{enabled ? 'True' : 'False'}</Button>,
  //   }, {
  //     title: 'Deferred',
  //     dataIndex: 'acknowledged',
  //     key: 'acknowledged',
  //     align: 'center',
  //     sorter: (a, b) => a.acknowledged || b.acknowledged,
  //     sortDirections: ['descend'],
  //     render: (acknowledged) => <Button>{acknowledged ? 'True' : 'False'}</Button>,
  //   }, {
  //     title: 'Audible',
  //     dataIndex: 'is_audible',
  //     key: 'is_audible',
  //     align: 'center',
  //     sortDirections: ['descend'],
  //     sorter: (a, b) => a.is_audible || b.is_audible,
  //     render: (audible) => <Button>{audible ? 'True' : 'False'}</Button>,
  //   }, {
  //     title: 'Active',
  //     dataIndex: 'active',
  //     key: 'active',
  //     align: 'center',
  //     sortDirections: ['descend'],
  //     sorter: (a, b) => a.active || b.active,
  //     render: (active) => (active ? 'True' : 'False'),
  //   },
  // ];
  return (
    <div className="alarms-page">
      <Row type="flex" justify="space-around">
        <Col span={24}>
          <SummaryAlarmWidget />
        </Col>
        <Col span={24} className="alarms-page-filter">
          <Radio.Group onChange={(e) => setCurrentFilter(e.target.value)} defaultValue="ACTIVE" size="medium" style={{ margin: '10px' }} value={currentFilter} buttonStyle="solid">
            <Radio.Button value="ALL">All</Radio.Button>
            <Radio.Button value="ACTIVE">Active</Radio.Button>
            <Radio.Button value="TANKS">Tanks</Radio.Button>
            <Radio.Button value="ENGINE">Engine</Radio.Button>
            <Radio.Button value="BATTERIES">Batteries</Radio.Button>
            <Radio.Button value="BILGE">Bilge</Radio.Button>
            <Radio.Button value="HCEC">HCEC</Radio.Button>
          </Radio.Group>
        </Col>
        {/* <Table className="alarms-table" columns={columns} dataSource={alarms} rowKey={(e, i) => e.id + i} pagination={false} rowClassName="row" size="small" /> */}
        {alarms.map((alarm, index) => {
          if (alarm.name === 'Summary') {
            return null;
          }
          return (
            <Col xl={8} lg={8} md={11} sm={11} xs={24} key={`${alarm.id}${index}`}>
              <AlarmPageWidget alarm={alarm} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Alarms;
