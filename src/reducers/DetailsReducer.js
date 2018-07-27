import {
  SET_DETAILS_SUCCESS,
  SET_COMPRESSION_SUCCESS,
  GET_UPDATE_SUCCESS,
  CLEAR_HISTORY
} from "../utils/types";

const INITIAL_STATE = {
  details: []
};

function detailsReducer(state = INITIAL_STATE, action: any) {
  console.log("Filtering", action.payload)
  switch (action.type) {
    case SET_DETAILS_SUCCESS:

      return {
        ...state,
        details: action.payload
      };
    case SET_COMPRESSION_SUCCESS:
      return Object.assign({}, state, {
        compression: action.payload
      });
    case GET_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        updated: action.payload
      });
    case CLEAR_HISTORY:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default detailsReducer;
