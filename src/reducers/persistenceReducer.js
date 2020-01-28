import {
  RECEIVE_PERSISTENT_DATA,
} from '../actions/types';

export default function PersistentData(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PERSISTENT_DATA:
      return action.payload;
    default: {
      return { ...state };
    }
  }
}
