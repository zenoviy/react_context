import { useContext } from "react";
import AppMainInterface from "../interfaces/App.interface";
import MainContext from "../context/App.context";

const DecreaseClicksComponent = () => {
  const {
    appClickDecreaseAction
  }: AppMainInterface = useContext(MainContext);

  const decreaseClicks = (value: number) => {
    appClickDecreaseAction(value)
  }
  return (
    <>
      <div>
        <button onClick={() => decreaseClicks(1)}>-1</button>
        <button onClick={() => decreaseClicks(5)}>-5</button>
        <button onClick={() => decreaseClicks(10)}>-10</button>
        <hr />
      </div>
    </>
  )
}

export default DecreaseClicksComponent