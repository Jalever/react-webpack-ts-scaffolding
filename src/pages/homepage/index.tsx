import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RootState } from '@/store/index'
import UpperHeader from './upper-header'
import HeaderComp from './header'
import ContentComp from './content'
import styles from './index.less'

const { useState, useEffect, useReducer, useRef } = React
const Homepage: React.FC = (props: any) => {
  useEffect(() => {
  }, [props])


  return (
    <div className={styles.wrapper}>
      <UpperHeader />
      <HeaderComp />
      <ContentComp />

    </div>
  )
}

const mapStateToProps = (state: RootState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
