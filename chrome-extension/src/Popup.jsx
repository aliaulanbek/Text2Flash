/* global chrome */
import React, { useEffect, useState } from 'react';
import Flashcard from './Components/Flashcard';
import "./Popup.css"

function App() {
  const [text, setText] = useState('');


  useEffect(() => {
    chrome.runtime.sendMessage( {action: "get text"}, (text) => {
      setText(text)
    })
  }, []);

  return (
    <>
      <div className='popup'>
        <Flashcard text = {text} onChange = {setText} />
      </div>
    </>

  );
}

export default App;