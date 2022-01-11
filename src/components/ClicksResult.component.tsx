import { useContext } from "react";
import AppMainInterface from "../interfaces/App.interface";
import MainContext from "../context/App.context";

const ClicksResultComponent = () => {
  const {
    clicks,
    appClicksEraseAction
  }: AppMainInterface = useContext(MainContext);

  const eraseClicks = () => {
    appClicksEraseAction();
  }
  return (
    <>
      <h2>Clicks : {clicks}</h2>
      <button onClick={() => eraseClicks()}>Erase</button>
    </>
  ) 
}

export default ClicksResultComponent;