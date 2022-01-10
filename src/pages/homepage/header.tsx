import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { colorState } from "@/store/color/types";
import { rootReducer, RootState } from '@/store/index'
import ShalloWTag from "./shallow-tag";
import styles from './header.less'

export interface iShallowTag {
  name: string
  bgColor: string
  fontColor: string
}

export interface iItem {
  img: string,
  name: string
}

const ParaComp: React.FC<iItem> = (item) => {
  return (
    <p className={styles.listpara}>
      <img src={item.img} className={styles.listimage} />
      <i className={styles.listname}>{item.name}</i>
    </p>
  );
}

const { useState, useEffect, useReducer, useRef } = React
const HeaderComp: React.FC<RootState> = (props) => {
  const { data, color } = props;
  const [list, setList] = useState<string[]>([]);
  const [bgColor, setBgColor] = useState<string>('');
  const [fontColor, setFontColor] = useState<string>('');
  const [paragraph, setParagraph] = useState<iItem[]>([]);

  useEffect(() => {
    const { bulletListIcon, shallowTagBg, shallowTagFont }: colorState = color;
    const icons = [bulletListIcon.rect, bulletListIcon.round, bulletListIcon.triagle];
    let { labels, description } = data;
    let arr = labels.split(','),
      items = description.split("<br/>").map((i: string, idx: number) => ({ img: icons[idx], name: i }));
    setList(arr);
    setBgColor(shallowTagBg)
    setFontColor(shallowTagFont);
    setParagraph(items);
  }, [props])


  return (
    <div className={styles.wrapper}>
      <div className={styles.labelsRow}>
        {
          list.map((name: string, idx: number) => {
            return (
              <ShalloWTag name={name} key={`${name}-${idx}`} bgColor={bgColor} fontColor={fontColor} />
            )
          })
        }
      </div>
      <div className={styles.list}>
        {
          paragraph.map((item: iItem, idx: number) => {
            return (
              item.name && <ParaComp {...item} key={`${item.name}-${item.img}`} />
            )
          })
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp)
