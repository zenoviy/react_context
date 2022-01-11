import React from 'react';
import logo from './logo.svg';
import './App.css';

import IncreaseClicksComponent from "./components/IncreaseClicks.component";
import DecreaseClicksComponent from "./components/DecreaseClicks.component";
import ClicksResultComponent from "./components/ClicksResult.component";

import HiddenTextComponent from "./components/hiddenElements/HiddenText.component";

import { MainProvider } from "./context/App.context";

function App() {
  return (
   <>
    <div>
      <MainProvider>
        <IncreaseClicksComponent />
        <ClicksResultComponent />
        <DecreaseClicksComponent />

        <hr/>
        <HiddenTextComponent />
      </MainProvider>
    </div>
   </>
  );
}

export default App;
