import * as TYPES from "./types"
import * as CONSTANTS from "@/constants/index"

export function updateRank(rank: string): TYPES.UpdateRankAction {
  return {
    type: CONSTANTS.UPDATE_RANK,
    payload: {
      rank
    }
  }
}