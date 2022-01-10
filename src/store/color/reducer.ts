import * as CONSTANTS from "@/constants/index";
import * as TYPES from "./types";

const initBulletListIcon = {
  rect: "",
  round: "",
  triagle: "",
}

const initialState = {
  mainBgColor: '', //大背景中的主题色
  cloudImg: '',
  shallowTagBg: '',
  shallowTagFont: '',
  bulletListIcon: initBulletListIcon,
  deepTagBg: '',
  listFontColor: '',
  tabbarColor: '',
  listIcon: {
    up: '',
    down: '',
  }
};

const ColorReducer = (state = initialState, action: TYPES.iUpdateColorAction): TYPES.colorState => {
  switch (action.type) {
    case CONSTANTS.UPDATE_COLOR: {
      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state
  }
}

export default ColorReducer;