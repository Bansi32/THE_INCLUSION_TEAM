import React,{useState,useEffect} from 'react';
import './App.css';
import alanButton from '@alan-ai/alan-sdk-web';
import Register from './Components/Register/Register';
const alanKey ="61e5ba924bae987f7daf9ab0eea834052e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  useEffect(() => {
    alanButton({
      key: alanKey,
      onCommand: ({ commandData }) => {
        switch (commandData) {
          case "testCommand":
            <Register/>
            break;
          default:
            alert("Wrong input");

          }      
      }
    })
  },[]) //runs only once our component mounts
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
