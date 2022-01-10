import { combineReducers, createStore } from "redux";
import RankReducer from "./rank/reducer";
import colorReducer from "./color/reducer";
import DataReducer from "./data/reducer";

export const rootReducer = combineReducers({
  rank: RankReducer,
  color: colorReducer,
  data: DataReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;