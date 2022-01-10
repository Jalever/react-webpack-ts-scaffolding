import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Cookies from 'js-cookie';
import { rootReducer, RootState } from "@/store/index";
import * as DataActions from "@/store/data/actions";
import * as RankActions from "@/store/rank/actions";
import * as ColorActions from "@/store/color/actions";
import { colorState } from "@/store/color/types";
import REQUEST from "@/request/index";
import { iParams } from "@/request/index";
import * as CONSTANTS from "@/constants/index";
import { useTheme } from "@/assets/selector";
import { renderRoutes } from 'react-router-config'
import { getQueryByKey } from "@utils"
import "normalize.css";
import "@/assets/css/reset.css";
import "@/assets/css/fonts.css";
import styles from "./App.less";
const { useState, useEffect, useReducer, useRef } = React;

export interface iListItem {
  activity: string,
  back: string,
  front: string,
  section: string
}

export interface iIntroduction {
  goal: string,
  guide: string
}

export interface iDataResp {
  description: string,
  introduction: iIntroduction,
  labels: string,
  list: iListItem[],
  name: string,
  title: string,
}

const initIntroduction = {
  goal: "",
  guide: ""
}

export const initListItem = {
  activity: "",
  back: "",
  front: "",
  section: "",
}

export const initData = {
  description: "",
  introduction: initIntroduction,
  labels: "",
  list: [initListItem],
  name: "",
  title: "",
}

export type tDataAction = | {
  type: typeof CONSTANTS.ACTION_UPDATEDATA,
  payload: iDataResp
}

//get token
const fetchData = async (num: number): Promise<iDataResp> => {
  const params: iParams = { num };
  const data = await REQUEST.getData(params);
  return data;
}

const selectRank = (rank: number): Promise<string> => {
  return new Promise((resolve) => {
    rank = rank * 1;
    if (rank < 6) return resolve(CONSTANTS.LABEL_RANKBEGINNER)
    if (rank < 12) return resolve(CONSTANTS.LABEL_RANKINTERMIDIATE)
    return resolve(CONSTANTS.LABEL_RANKADVANCED)
  })
}

const App = (props: any) => {
  const { route } = props;
  const [id, setId] = useState(getQueryByKey('id'));
  const [data, setData] = useState<iDataResp>(initData);
  const [mainTheme, setMainTheme] = useState<string>('');
  const { updateData, updateColor } = props;

  useEffect(() => {
    const onAsync = async () => {
      let resData = await fetchData(id);
      let rank = await selectRank(id);
      let theme = await useTheme(rank);
      setData(resData);
      updateData(resData);
      updateColor(theme);
    }
    onAsync();
  }, [id]);

  useEffect(() => {
    const { color } = props;
    const { mainBgColor } = color;
    setMainTheme(mainBgColor);
  }, [props]);

  return (
    <div className={styles.wrapper} style={{ backgroundColor: mainTheme }}>
      {renderRoutes(route.routes)}
    </div>
  )
}

const mapStateToProps = (state: RootState) => state;
const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateData: (data: iDataResp) => dispatch(DataActions.updateData(data)),
  updateRank: (rank: string) => dispatch(RankActions.updateRank(rank)),
  updateColor: (theme: colorState) => dispatch(ColorActions.updateColor(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);