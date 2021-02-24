import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState } from "react";
import Timer from "./timer";
import DictionaryContent from "./dictionaryContent";

function App() {
  return (
    <div>
      <DictionaryContent />

      <div id="header-content">
        <p>This</p>
        <p>artwork was reborn</p>
        <div class="inlineDiv">
          <Timer callQueuedTime="0" />
          <p> seconds ago.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
