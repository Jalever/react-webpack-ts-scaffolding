import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { rootReducer, RootState } from '@/store/index'
import imgs from "./imgs";
import styles from './upper-header.less'

export interface iProps {
  title: string,
  [prop: string]: any
}

const { useState, useEffect } = React
const UpperHeader: React.FC<iProps> = (props) => {
  const [cloudbg, setCloudBg] = useState(imgs.beginner);
  const { color, data } = props;

  useEffect(() => {
    setCloudBg(color.cloudImg)
  }, [props])

  return (
    <div className={styles.wrapper}>
      <div className={styles.cloudBackground} style={{ backgroundImage: `url(${cloudbg})` }}>
        {/* {data.title} */}
        <p className={styles.bfFont}>{data.name}</p>
      </div>
      <div className={styles.portrait}>
        <img src={imgs.portrait} className={styles.img} />
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    data: state.data,
    color: state.color
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(UpperHeader)
