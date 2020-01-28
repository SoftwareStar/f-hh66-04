import {
  RECEIVE_SERVER_STATE,
  RECEIVE_STATUS_UPDATE,
  RECEIVE_STATUS_MESSAGE_UPDATE,
  RECEIVE_NMEA_TIMESTAMP,
  RECEIVE_NMEA_ENTITIES,
  // RECEIVE_REPORT_UPDATE,
} from '../actions/types';

export default function ServerState(state = {
  version: null,
  dc: false,
  firmwareReady: false,
  hydraulics: false,
  topupMode: false,
  engineHitRPMThresholdAt: null,
  engineAlarmsEnabled: false,
  statusMessages: {},
  reports: {},
  nmeaStatus: {},
},
action) {
  switch (action.type) {
    case RECEIVE_SERVER_STATE:
      return action.payload;
    case RECEIVE_STATUS_MESSAGE_UPDATE: {
      const statusUpdate = {
        ...state.statusMessages[action.update.source], ...action.update.message,
      };
      return {
        ...state,
        statusMessages: { ...state.statusMessages, [action.update.source]: statusUpdate },
      };
    }
    case RECEIVE_STATUS_UPDATE: {
      return { ...state, ...action.result };
    }
    case RECEIVE_NMEA_ENTITIES:
      return { ...state, nmeaStatus: action.payload };
    case RECEIVE_NMEA_TIMESTAMP:
      return {
        ...state,
        nmeaStatus: {
          ...state.nmeaStatus,
          [action.payload.entity]: action.payload.timestamp,
        },
      };
    default:
      return state;
  }
}
