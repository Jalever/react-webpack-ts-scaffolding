import * as CONSTANTS from "@/constants/index";
// import { UPDATE_COLOR } from "./types";

export interface iBulletListIcon {
  rect: string
  round: string
  triagle: string
}


export interface ilistIcon {
  up: string
  down: string
}

export interface colorState {
  mainBgColor: string //大背景中的主题色
  cloudImg: string
  shallowTagBg: string
  shallowTagFont: string
  bulletListIcon: iBulletListIcon
  deepTagBg: string
  listFontColor: string
  tabbarColor: string,
  listIcon: ilistIcon
}

export interface iUpdateColorAction {
  type: typeof CONSTANTS.UPDATE_COLOR,
  payload: colorState
}

export type ColorActionTypes = iUpdateColorAction;
