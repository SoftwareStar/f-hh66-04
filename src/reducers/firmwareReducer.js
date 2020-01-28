import * as types from '../actions/types';

const firmwareInitialState = {
  updateReceived: false,
  transferProgress: 0,
  controllersListening: [],
  controllersConfirmed: [],
  unavailable: false,
  updateError: null,
  transferReady: false,
  flashingProgress: 0,
  updateDone: false,
  updateReadyForUpload: false,
  updateInProgress: false,
};

export default function firmware(state = firmwareInitialState, action) {
  switch (action.type) {
    case types.FIRMWARE_UNAVAILABLE:
      if (state.socketID === action.payload) {
        return { ...state, unavailable: false };
      }
      return { ...state, unavailable: true };

    case types.FIRMWARE_UPLOAD_RECEIVED:
      return { ...state, uploadReceived: action.payload };
    case types.FIRMWARE_CONTROLLERS_LISTENING:
      // console.log(action.payload);
      return { ...state, controllersListening: action.payload };
    case types.FIRMWARE_TRANSFER_READY:
      return { ...state, transferReady: action.payload };
    case types.FIRMWARE_TRANSFER_PROGRESS:
      return { ...state, transferProgress: action.payload };
    case types.FIRMWARE_CONTROLLERS_CONFIRMED:
      return { ...state, controllersConfirmed: action.payload };
    case types.FIRMWARE_UPDATE_ERROR:
      return { ...state, updateError: action.payload.message };
    case types.FIRMWARE_UPDATE_CANCELLED:
      return { ...firmwareInitialState };
    case types.FIRMWARE_FLASHING_PROGRESS:
      return { ...state, flashingProgress: action.payload };
    case types.FIRMWARE_UPDATE_DONE:
      return { ...state, updateDone: true };
    case types.FIRMWARE_UPDATE_IN_PROGRESS:
      return { ...state, updateInProgress: true };
    case types.FIRMWARE_UPDATE_READY_FOR_UPLOAD:
      return { ...state, updateReadyForUpload: true };
    default:
      return { ...state };
  }
}
