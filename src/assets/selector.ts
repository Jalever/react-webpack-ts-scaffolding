import * as CONSTANTS from '@/constants/index';
import { colorState } from "@store/color/types";
export const useTheme = (rank: string): Promise<colorState> => {
  return new Promise((resolve: any) => {
    switch (rank) {
      // case CONSTANTS.LABEL_RANKADVANCED:
      case CONSTANTS.LABEL_RANKINTERMIDIATE: {
        return resolve({
          mainBgColor: '#bae7ff', //大背景中的主题色
          cloudImg: require('./images/upper-header/bg_title_b@3x.png'),
          shallowTagBg: '#e5f4fc',
          shallowTagFont: '#00afec',
          bulletListIcon: {
            rect: require('./images/upper-header/num1b@3x.png'),
            round: require('./images/upper-header/num2b@3x.png'),
            triagle: require('./images/upper-header/num3b@3x.png'),
          },
          deepTagBg: '#00b9ef',
          listFontColor: '#00b9ef',
          tabbarColor: '#00b9ef',
          listIcon: {
            up: require('./images/list/ic_withdraw_b@2x.png'),
            down: require('./images/list/ic_detail_b@2x.png'),
          },
        })
      }

      case CONSTANTS.LABEL_RANKBEGINNER: {
        return resolve({
          mainBgColor: '#ffe883', //大背景中的主题色
          cloudImg: require('./images/upper-header/bg_title_a@3x.png'),
          shallowTagBg: '#fcf6d7',
          shallowTagFont: '#eaab3d',
          bulletListIcon: {
            rect: require('./images/upper-header/num1a@3x.png'),
            round: require('./images/upper-header/num2a@3x.png'),
            triagle: require('./images/upper-header/num3a@3x.png'),
          },
          deepTagBg: '#f6ac19',
          listFontColor: '#f6ac19',
          tabbarColor: '#f6ac19',
          listIcon: {
            up: require('./images/list/ic_withdraw_a@2x.png'),
            down: require('./images/list/ic_detail_a@2x.png'),
          },
        })
      }

      default: {
        return resolve({
          mainBgColor: '#ffd6e2', //大背景中的主题色
          cloudImg: require('./images/upper-header/bg_title_c@3x.png'),
          shallowTagBg: '#fceaef',
          shallowTagFont: '#ff8cbe',
          bulletListIcon: {
            rect: require('./images/upper-header/num1c@3x.png'),
            round: require('./images/upper-header/num2c@3x.png'),
            triagle: require('./images/upper-header/num3c@3x.png'),
          },
          deepTagBg: '#ff8cbe',
          listFontColor: '#ff8cbe',
          tabbarColor: '#ff8cbe',
          listIcon: {
            up: require('./images/list/ic_withdraw_c@2x.png'),
            down: require('./images/list/ic_detail_c@2x.png'),
          },
        })
      }
    }
  })
}