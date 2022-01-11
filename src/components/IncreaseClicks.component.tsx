import { useContext } from "react";
import AppMainInterface from "../interfaces/App.interface";
import MainContext from "../context/App.context";

const IncreaseClicksComponent = () => {
  const {
    appClickIncreaseAction
  }: AppMainInterface = useContext(MainContext);

  const increaseClicks = (value: number) => {
    appClickIncreaseAction(value)
  }
  return (
    <>
      <div>
        <button onClick={() => increaseClicks(1)}>+1</button>
        <button onClick={() => increaseClicks(5)}>+5</button>
        <button onClick={() => increaseClicks(10)}>+10</button>
        <hr />
      </div>
    </>
  )
}

export default IncreaseClicksComponent