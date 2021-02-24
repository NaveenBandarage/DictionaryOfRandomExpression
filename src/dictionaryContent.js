

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

//https://random-words-api.vercel.app/word - api to use
function DictionaryContent() {
  const [appState, setAppState] = useState({
    loading: true,
    repos: null,
  });
  useEffect(() => {
    let data = null;
    let promises = [];
    const apiUrl = `https://random-words-api.vercel.app/word`;
    axios.get(apiUrl).then((res) => {
      console.log(res);
      // res.data.forEach((id) => {
      //   promises.push(
      //     axios.get(
      //       sanitizeUrl(
      //         `https://hacker-news.firebaseio.com/v0/item/${id}​​​​​.json?print=pretty`
      //       )
      //     )
      //   );
      // });
      // Promise.all(promises)
      //   .then((res) => {
      //     console.log(Object.entries(res));
      //     setAppState({ loading: false, repos: res });
      //   })
      //   .catch((err) => console.log(err));
    });
  }, []);
  return (
    <div>
      <p>This is some test text</p>
    </div>
  );
}

export default DictionaryContent;

