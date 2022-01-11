import APP_MAIN_ACTION_TYPE from "../actions/App.actions";

export const initialState = {
  clicks: 0,
  hiddenTextStatus: false,
}

export const AppReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case APP_MAIN_ACTION_TYPE.CLICK_INCREASE :
      return {
        ...state,
        clicks: state.clicks + action.payload,
      }
    case APP_MAIN_ACTION_TYPE.CLICK_DECREASE :
      return {
        ...state,
        clicks: state.clicks - action.payload,
      }
    case APP_MAIN_ACTION_TYPE.CLICKS_ERASE :
      return {
        ...state,
        clicks: 0,
      }
    case APP_MAIN_ACTION_TYPE.SHOW_HIDE_TEXT :
      return {
        ...state,
        hiddenTextStatus: action.payload,
      } 
    default: 
      return state;
  }
};