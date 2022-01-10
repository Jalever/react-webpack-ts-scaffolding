import * as CONSTANTS from "@/constants/index"


export interface UpdateRankAction {
  type: typeof CONSTANTS.UPDATE_RANK,
  payload: RankState
}


export type RankActionTypes = UpdateRankAction;

export interface RankState {
  rank: string
}