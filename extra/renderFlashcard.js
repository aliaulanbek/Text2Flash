import React from 'react'
import { createRoot }from 'react-dom';
import Flashcard from './Flashcard/Flashcard';

export default function renderFlashcard() {
    const container = document.getElementById("flashcard")
    
    if (container) {
        const root = createRoot(container);
        root.render(<Flashcard text = {text} />);
    }
}
