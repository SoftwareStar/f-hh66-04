import { combineReducers } from 'redux';
import NMEA from './nmeaReducer';
import UI from './uiReducer';
import Circuits from './circuitsReducer';
import Hydraulics from './hydraulicsReducer';
import Firmware from './firmwareReducer';
import Alarms from './alarmsReducer';
import ServerState from './serverStatusReducer';
import PersistentData from './persistenceReducer';
import Enables from './enablesReducer';

const rootReducer = combineReducers({
  Circuits,
  NMEA,
  Hydraulics,
  Firmware,
  UI,
  Alarms,
  ServerState,
  // PersistentData,
  Enables,
});

export default rootReducer;
