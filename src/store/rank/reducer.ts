import * as TYPES from "./types";
import * as CONSTANTS from "@/constants/index"

const initialState: TYPES.RankState = {
  rank: CONSTANTS.LABEL_RANKBEGINNER
};

const RankReducer = (state = initialState, action: TYPES.RankActionTypes): TYPES.RankState => {
  switch (action.type) {
    case CONSTANTS.UPDATE_RANK: {
      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state;
  }
}

export default RankReducer;