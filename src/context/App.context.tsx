import { createContext, useReducer } from "react";
import {
  initialState,
  AppReducer
} from "../stores/reducers/App.reducer";
import {
  //click: number,
  appClickIncreaseAction,
  appClickDecreaseAction,
  appClicksEraseAction,
  appShowHiddenTextAction,
} from "../stores/actions/App.actions";

const MainContext = createContext(initialState);

const MainProvider = (props: any) => {
  const { children } = props;
  const [appState, dispatch] = useReducer(AppReducer, initialState);

  const value: any = {
    clicks: appState.clicks,
    hiddenTextStatus: appState.hiddenTextStatus,
    appClickIncreaseAction: (clickValue: number) => appClickIncreaseAction(dispatch, clickValue),
    appClickDecreaseAction: (clickValue: number) => appClickDecreaseAction(dispatch, clickValue),
    appClicksEraseAction: () => appClicksEraseAction(dispatch),
    appShowHiddenTextAction: (hiddenTextStatus: boolean) => appShowHiddenTextAction(dispatch, hiddenTextStatus),
  }
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

export default MainContext;

export { MainProvider }