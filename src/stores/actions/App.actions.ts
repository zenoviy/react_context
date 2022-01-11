const APP_MAIN_ACTION_TYPE = {
  CLICK_INCREASE: "CLICK_INCREASE",
  CLICK_DECREASE: "CLICK_DECREASE",
  CLICKS_ERASE: "CLICKS_ERASE",
  SHOW_HIDE_TEXT: "SHOW_HIDE_TEXT",
}

export const appClickIncreaseAction = (dispatch: any, clickValue: number) => {
  dispatch({
    type: APP_MAIN_ACTION_TYPE.CLICK_INCREASE,
    payload: clickValue
  });
}

export const appClickDecreaseAction = (dispatch: any, clickValue: number) => {
  dispatch({
    type: APP_MAIN_ACTION_TYPE.CLICK_DECREASE,
    payload: clickValue
  });
}

export const appClicksEraseAction = (dispatch: any) => {
  dispatch({
    type: APP_MAIN_ACTION_TYPE.CLICKS_ERASE
  });
}

export const appShowHiddenTextAction = (dispatch: any, textStatus: boolean) => {
  dispatch({
    type: APP_MAIN_ACTION_TYPE.SHOW_HIDE_TEXT,
    payload: textStatus
  })
}

export default APP_MAIN_ACTION_TYPE;