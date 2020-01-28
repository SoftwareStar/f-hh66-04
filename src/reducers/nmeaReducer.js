import {
  RECEIVE_NMEA_UPDATE,
  RECEIVE_NMEA_DATA,
} from '../actions/types';

export default function NMEA(state = {}, action) {
  switch (action.type) {
    case RECEIVE_NMEA_DATA:
      return action.payload;
    case RECEIVE_NMEA_UPDATE:
      return {
        ...state,
        [action.payload.entity]: {
          ...state[action.payload.entity], ...action.payload.update,
        },
      };
    default: {
      return { ...state };
    }
  }
}
