import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as CONSTANTS from '@/constants/index';
import { RootState } from '@/store/index'
import styles from './introduction.less'
const { useState, useEffect, useReducer, useRef } = React

export interface iIntroItem {
  name: string
  content: string
  tabBg?: string
}

export interface iProps extends RootState {
  goal: string
  guide: string
}

const TagComp: React.FC<{ name: string, tabBg: any }> = ({ name, tabBg }) => {
  return (
    <span className={styles.tagWrapper} style={{ backgroundColor: tabBg }}>
      <i className={styles.tagName}>{name}</i>
    </span>
  );
}

const IntroItem: React.FC<iIntroItem> = ({ name, content, tabBg }) => {
  return (
    <div className={styles.introItem}>
      <TagComp name={name} tabBg={tabBg} />
      <p className={styles.introContent}>{content}</p>
    </div>
  );
}

const IntroductionComp: React.FC<iProps> = (props) => {
  const { goal, guide, color } = props;
  const { tabbarColor } = color;
  console.log('color');
  console.log(color);
  console.log('\n');

  return (
    <div className={styles.wrapper}>
      <IntroItem name={CONSTANTS.LABEL_TARGET} content={goal} tabBg={tabbarColor} />
      <IntroItem name={CONSTANTS.LABEL_GUIDE} content={guide} tabBg={tabbarColor} />
    </div>
  )
}

const mapStateToProps = (state: RootState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(IntroductionComp)
