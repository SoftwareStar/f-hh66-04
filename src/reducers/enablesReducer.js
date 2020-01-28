import { RECEIVE_ENABLES_DATA, RECEIVE_ENABLE_UPDATE } from '../actions/types';

export default function Hydraulics(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENABLES_DATA:
      return action.payload;
    case RECEIVE_ENABLE_UPDATE: {
      return {
        ...state,
        [action.payload.group_id]: {
          ...state[action.payload.group_id],
          [action.payload.enable_id]: {
            ...state[action.payload.group_id][action.payload.enable_id],
            ...action.payload,
          },
        },
      };
    }
    default:
      return state;
  }
}
