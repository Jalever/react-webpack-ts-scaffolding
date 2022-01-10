import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { colorState } from "@/store/color/types";
import { rootReducer, RootState } from '@/store/index'
import * as CONSTANTS from '@/constants/index';
import styles from './tab.less'
const { useState, useEffect, useReducer, useRef } = React
import { iTab } from "./content"

export interface iProps extends RootState {
  handleCurTab: (tab: string) => void
  tabs: iTab[]
  curTab: string
}
const TabComp: React.FC<iProps> = (props) => {
  const { handleCurTab, color } = props;
  const [tabColor, setTabColor] = useState<string>('')
  useEffect(() => {
    const { tabbarColor } = color;
    setTabColor(tabbarColor);
  }, [color])

  return (
    <div className={styles.wrapper}>
      {
        props.tabs.map((tab: iTab) => {
          const opacity = tab.type === props.curTab ? 1 : 0;
          return (
            <span key={tab.type} className={styles.tab} onClick={() => handleCurTab(tab.type)}>
              <i className={styles.name}>{tab.name}</i>
              <i className={styles.bottombar} style={{ opacity, backgroundColor: tabColor }}></i>
            </span>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state: RootState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TabComp)
