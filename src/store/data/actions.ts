import * as TYPES from "./types"
import * as CONSTANTS from "@/constants/index"
import { iDataResp, tDataAction } from "@/App";

export function updateData(data: iDataResp): tDataAction {
  return {
    type: CONSTANTS.ACTION_UPDATEDATA,
    payload: {
      ...data,
    }
  }
}

// export function SendMessage(msg: TYPES.Message): TYPES.ChatActionTypes {
//   return {
//     type: CONSTANTS.SEND_MESSAGE,
//     payload: msg
//   }
// }