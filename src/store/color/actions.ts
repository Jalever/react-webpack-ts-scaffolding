import * as TYPES from "./types";
import * as CONSTANTS from "@/constants/index";

export function updateColor(colorState: TYPES.colorState): TYPES.iUpdateColorAction {
  return {
    type: CONSTANTS.UPDATE_COLOR,
    payload: colorState
  }
}