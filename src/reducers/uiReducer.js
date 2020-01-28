import {
  TOGGLE_SIDEBAR,
  UPDATE_ROLE,
  SET_WINDOW_WIDTH,
  SET_CONNECTION,
  SET_CONNECTING,
  UPDATE_ENDPOINT,
  RECEIVE_MESSAGE,
  RESET_LAST_MESSAGE,
} from '../actions/types';
import ENDPOINT from '../api/addresses';

export default function UI(state = {
  user: { role: 'Guest', permissions: ['Lighting', 'Unrestricted'] },
  sidebar: { collapsed: true },
  connection: {
    state: false, lastMessage: null, endpoint: ENDPOINT, connecting: false, messagesReceived: 0,
  },
  width: window.innerWidth,
},
action) {
  switch (action.type) {
    case UPDATE_ROLE:
      return {
        ...state,
        user: action.payload,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: { ...state.sidebar, collapsed: !state.sidebar.collapsed },
      };
    case SET_WINDOW_WIDTH:
      return {
        ...state,
        width: action.payload,
      };
    case SET_CONNECTION:
      return {
        ...state,
        connection: {
          ...state.connection, state: action.payload,
        },
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        connection: {
          ...state.connection, lastMessage: Date.now(),
        },
      };
    case RESET_LAST_MESSAGE:
      return {
        ...state,
        connection: {
          ...state.connection, lastMessage: null,
        },
      };
    case UPDATE_ENDPOINT:
      return {
        ...state,
        connection: {
          ...state.connection, endpoint: action.payload,
        },
      };
    case SET_CONNECTING:
      return {
        ...state,
        connection: {
          ...state.connection, connecting: action.payload,
        },
      };
    default:
      return state;
  }
}
