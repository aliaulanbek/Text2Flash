/* global chrome */
import React, { useEffect, useState } from 'react';
function App() {
  const [word, setWord] = useState('');

  console.log("wait");
  useEffect(() => {
    chrome.runtime.sendMessage( {action: "get text"}, (text) => {
      setWord(text)
    })
      // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      //   setWord(request.text)
      // })
  }, []);

  return <h3>{word}</h3>;
}

export default App;