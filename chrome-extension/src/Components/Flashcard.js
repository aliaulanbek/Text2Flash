import React, { useState, useEffect, useRef } from 'react'

import '../Popup.css'

export default function Flashcard( props ) {
    const initialText = props.text;
    const [text, setText] = useState("");
    const textAreaRef = useRef(null);
    const flashCardRef = useRef(null);

    
    const handleInput = (e) => {
        setText(e.target.value);
    }

    useEffect( () => {
        textAreaRef.current.style.height = "auto"
        textAreaRef.current.style.height = Math.min(textAreaRef.current.scrollHeight, (flashCardRef.current.offsetHeight - 200)) + "px";
    }, [text])

    useEffect(() => {
        setText(initialText);
    }, [initialText]);

  return (
    <>
        <div className='flashcard' ref={flashCardRef}>
            <div className='titleDiv'>
                <h3 className='title'>Flashcard</h3>
            </div>
            <div className='card front'>
                <label className='label front'>Term</label>
                <input type="text" className='term' placeholder='Enter term..'/>
            </div>
            <div className='card back'>
                <label className='label back'>Definition</label>
                <textarea className='def' value = {text} onChange={handleInput} ref={textAreaRef}></textarea>
            </div>
        
        </div>
        <div className='buttons'>
            <button className='button cancel' >Cancel</button>
            <button className='button add'>Add</button>
        </div>
    </>
  )
}
