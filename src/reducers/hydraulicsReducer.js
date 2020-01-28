import { RECEIVE_HYDRAULICS_DATA, RECEIVE_ACTUATOR_UPDATE } from '../actions/types';

export default function Hydraulics(state = {}, action) {
  switch (action.type) {
    case RECEIVE_HYDRAULICS_DATA:
      return action.payload;
    case RECEIVE_ACTUATOR_UPDATE: {
      return {
        ...state,
        [action.update.name]:
        { ...state[action.update.name], ...action.update.newData },
      };
    }
    default:
      return state;
  }
}
