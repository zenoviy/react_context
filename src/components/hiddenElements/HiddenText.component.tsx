import { useContext } from "react";
import { helloText } from "../../constant/MainApp.constant";

import AppMainInterface from "../../interfaces/App.interface";
import MainContext from "../../context/App.context";

const HiddenTextComponent = () => {
  const {
    hiddenTextStatus,
    appShowHiddenTextAction
  }: AppMainInterface = useContext(MainContext);

  const hideShowText = () => {
    appShowHiddenTextAction(!hiddenTextStatus)
  }
  return (
    <>
      <button onClick={() => hideShowText()}>Show hidden text</button>
      { hiddenTextStatus ? <h4>{helloText}</h4> : null}
      
    </>
  )
}

export default HiddenTextComponent