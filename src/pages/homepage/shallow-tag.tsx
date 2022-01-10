import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { rootReducer, RootState } from '@/store/index'
import { iShallowTag } from "./header";
import styles from './shallow-tag.less'
const { useState, useEffect, useReducer, useRef } = React
const ShalloTag: React.FC<iShallowTag> = (props) => {
  const { name, bgColor, fontColor } = props;
  useEffect(() => {
    // console.log('props');
    // console.log(props);
    // console.log('\n');

  }, [props])


  return (
    <div className={styles.wrapper} style={{ backgroundColor: bgColor }}>
      <i style={{ color: fontColor }}>{name}</i>
    </div>
  )
}

const mapStateToProps = (state: RootState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ShalloTag)
