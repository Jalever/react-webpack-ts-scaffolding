import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { colorState } from '@/store/color/types'
import { rootReducer, RootState } from '@/store/index'
import { iListItem, initListItem } from '@/App'
import * as CONSTANTS from '@/constants/index';
import HalfLine from '@components/HalfLine'
import styles from './list.less'
const { useState, useEffect, useReducer, useRef } = React

export interface iProps extends RootState {
  list: iListItem[]
}

export interface iListItemWith extends iListItem {
  isExpanded?: boolean
  icons?: any
  fontColor?: string
  handleCurItem?: (i: string) => void
  deepTagBg?: string
}
// iListItemWith

const TagComp: React.FC<{ name: string, color?: string, isFirst: boolean, deepTagBg: string }> = ({ name, isFirst, deepTagBg }) => {
  const marginTop = isFirst ? 4 : 12;

  return (
    <span className={styles.tagWrapper} style={{ marginTop: `${marginTop}px`, backgroundColor: deepTagBg }}>
      <i className={styles.tagName}>{name}</i>
    </span>
  )
}

const ItemComp: React.FC<{ name: string, content: string, isFirst: boolean, isExpanded: boolean, deepTagBg: string }> = ({
  name,
  content,
  isFirst,
  isExpanded,
  deepTagBg
}) => {
  const para = content.split('<br/>')
  let t = {};
  if (isExpanded) t = { height: 'auto' }

  return (
    <div className={`${styles.itemCompWrapper} ${isExpanded ? styles.dynamicContent : ''}`}>
      {
        <TagComp name={name} isFirst={isFirst} deepTagBg={deepTagBg} />
      }

      {
        para.map((p: string) => {
          return <p className={`${styles.itemCompContent} ${isExpanded ? styles.dynamicContent : ''}`} key={p}>{p}</p>
        })
      }
    </div>
  )
}

const ItemHeader: React.FC<{
  name: string
  img: string
  isExpanded: boolean
  handleCurItem: (i: string) => void
  fontColor: string
}> = ({ name, img, isExpanded, handleCurItem, fontColor }) => {

  return (
    <div
      className={styles.itemHeaderWrapper}
      onClick={(e: React.MouseEvent) => handleCurItem(name)}
    >
      <div>
        <i className={styles.listHeaderName} style={{ color: fontColor }}>{name}</i>
        <img
          src={img}
          className={`${styles.listHeaderImg} ${styles.curItem}`}
          style={{ transform: isExpanded ? 'rotate(180deg)' : '' }}
        />
      </div>
      {
        // (!isExpanded) && <HalfLine />
      }

      {
        <HalfLine childStyle={`${isExpanded ? styles.shrink : styles.expand}`} />
      }
    </div>
  )
}

const ListItem: React.FC<iListItemWith> = (props) => {
  const {
    activity,
    back,
    front,
    section,
    isExpanded,
    icons,
    fontColor,
    handleCurItem,
    deepTagBg,
  }: any = props
  const isActiveItem = isExpanded ? styles.activeListItemWrapper : '';
  useEffect(() => {
    // if (isExpanded) console.log('ListItem - props')
    // if (isExpanded) console.log(props)
  }, [props])

  return (
    <div className={`${styles.listItemWrapper} ${isActiveItem}`}>
      <ItemHeader
        name={section}
        img={icons.down}
        isExpanded={isExpanded}
        handleCurItem={handleCurItem}
        fontColor={fontColor}
      />

      {
        <ItemComp name={CONSTANTS.LABEL_FRONTGUIDE} content={front} isFirst={true} isExpanded={isExpanded} deepTagBg={deepTagBg} />
      }

      {
        <ItemComp name={CONSTANTS.LABEL_BACKGUIDE} content={back} isFirst={false} isExpanded={isExpanded} deepTagBg={deepTagBg} />
      }

      {
        <ItemComp name={CONSTANTS.LABEL_ACTIVITYREFERENCE} content={activity} isFirst={false} isExpanded={isExpanded} deepTagBg={deepTagBg} />
      }

    </div>
  )
}

const ListComp: React.FC<iProps> = (props) => {
  const { list, color } = props
  const [curItem, setCurItem] = useState<any>(null)
  const [icons, setIcons] = useState<any>({})
  const [fontColor, setFontColor] = useState<string>('')
  const [tabBg, setTagBg] = useState<string>('')
  const [newList, setNewList] = useState<any>(list)

  useEffect(() => {
    const { listIcon, listFontColor, deepTagBg } = color

    setIcons(listIcon)
    setFontColor(listFontColor)
    setTagBg(deepTagBg)
  }, [color])

  useEffect(() => {
    // setCurItem(list[0])
    const curItemName = curItem ? curItem.section : '';
    const tempList: iListItemWith[] = list.map((i: iListItem) => ({
      ...i,
      isExpanded: i.section === curItemName,
    }))
    setNewList(tempList)
  }, [list])

  useEffect(() => {
    let curItemName = curItem ? curItem.section : '';
    const tempList: iListItemWith[] = newList.map((i: iListItem) => ({
      ...i,
      isExpanded: i.section === curItemName,
    }))
    setNewList(tempList)
  }, [curItem]);

  const onClickItem = (name: string): void => {
    if (curItem && curItem.section === name) return setCurItem(null);
    let item = newList.find((i: iListItemWith) => i.section === name)
    setCurItem(item);
  }

  return (
    <div className={styles.wrapper}>
      {newList &&
        newList.map((i: iListItemWith) => (
          <ListItem
            {...i}
            key={i.section}
            icons={icons}
            fontColor={fontColor}
            handleCurItem={onClickItem}
            deepTagBg={tabBg}
          />
        ))}
    </div>
  )
}

const mapStateToProps = (state: RootState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ListComp)
