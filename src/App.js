import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import React, { useEffect, useState } from "react";
import Timer from "./timer";

function App() {
   const [appState, setAppState] = useState({
     loading: true,
     wordData: null,
     wordDefintion: null,
   });
   useEffect(() => {
     const apiUrl = `https://random-words-api.vercel.app/word`;
     axios.get(apiUrl).then((res) => {
       console.log(res.data[0]);
       setAppState({
         loading: false,
         wordData: res.data[0].word,
         wordDefintion: res.data[0].definition,
       });
     });
   }, []);

   if (appState.loading) {
     return (
       <div className="wsb-div">
         <img src={logo} alt="loading..." />
       </div>
     );
   }
  return (
    <div>
      <div className="dictionaryText">
        <div class="inlineDiv">
          <p className="italicsP">w. </p>
          <p>{appState.wordData}</p>
        </div>
        <div class="inlineDiv">
          <p className="italicsP">d. </p>
          <p>{appState.wordDefintion}.</p>
        </div>
      </div>
      <div id="header-content">
        <p>Been</p>
        <p>on here since</p>
        <div class="inlineDiv">
          <Timer callQueuedTime="0" />
          <p> seconds ago .</p>
        </div>
      </div>
    </div>
  );
}

export default App;
