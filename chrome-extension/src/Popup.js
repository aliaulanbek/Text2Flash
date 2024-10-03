/* global chrome */
import React, { useEffect, useState } from 'react';
function App() {
  const [text, setText] = useState('');


  useEffect(() => {
    chrome.runtime.sendMessage( {action: "get text"}, (text) => {
      setText(text)
    })
  }, []);

  return <h3>{word}</h3>;
}

export default App;