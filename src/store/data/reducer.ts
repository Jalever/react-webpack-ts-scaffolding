import * as TYPES from "./types";
import {
  iDataResp,
  initData,
  tDataAction,
} from "@/App";
import * as CONSTANTS from "@/constants/index"

const initialState: iDataResp = initData

const DataReducer = (state = initialState, action: tDataAction): iDataResp => {
  switch (action.type) {
    case CONSTANTS.ACTION_UPDATEDATA: {
      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state;
  }
}

export default DataReducer;