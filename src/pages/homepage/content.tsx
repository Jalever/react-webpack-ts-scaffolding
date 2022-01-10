import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { colorState } from '@/store/color/types'
import { rootReducer, RootState } from '@/store/index'
import { iListItem, initListItem } from "@/App"
import * as CONSTANTS from '@/constants/index'
import TabComp from './tab'
import IntroductionComp from './introduction'
import ListComp from './list'
import styles from './content.less'
import imgs from "./imgs";
const { useState, useEffect, useReducer, useRef } = React
const {
  LABEL_INTRODUCTIONNAME,
  LABEL_INTRODUCTIONTYPE,
  LABEL_LISTNAME,
  LABEL_LISTTYPE,
} = CONSTANTS

export interface iTab {
  type: string
  name: string
}

const tabs: iTab[] = [
  {
    type: LABEL_LISTTYPE,
    name: LABEL_LISTNAME,
  },
  {
    type: LABEL_INTRODUCTIONTYPE,
    name: LABEL_INTRODUCTIONNAME,
  },
]

const ContentComp: React.FC<RootState> = (props) => {
  // LABEL_INTRODUCTIONTYPE
  const [curTab, setCurTab] = useState<string>(LABEL_LISTTYPE)
  const [goalTxt, setGoalTxt] = useState<string>('')
  const [guideTxt, setGuideTxt] = useState<string>('')
  const [listdata, setListData] = useState<iListItem[]>([initListItem])
  const pbottom = curTab === LABEL_INTRODUCTIONTYPE ? 30 : 8
  const isIntroTab = curTab === LABEL_INTRODUCTIONTYPE
  useEffect(() => {
    const { data } = props
    const { introduction, list } = data
    const { goal, guide } = introduction
    setGoalTxt(goal)
    setGuideTxt(guide)
    setListData(list)
  }, [props])

  const onCurTab = (tab: string) => setCurTab(tab)

  return (
    <>
      <div className={styles.wrapper} style={{ paddingBottom: pbottom }}>
        <TabComp
          handleCurTab={onCurTab}
          tabs={tabs}
          curTab={curTab}
          key={curTab}
        />
        {curTab === LABEL_INTRODUCTIONTYPE ? (
          <IntroductionComp goal={goalTxt} guide={guideTxt} />
        ) : (
            <ListComp list={...listdata} />
          )}
      </div>
      {
        isIntroTab ? <img src={imgs.bottomimg} className={styles.bottomimg} /> : <div className={styles.bottomblock}></div>
      }
    </>
  )
}

const mapStateToProps = (state: RootState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ContentComp)
