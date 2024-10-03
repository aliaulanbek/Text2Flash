import React, { useState } from "react";

export default function Flashcard({text}) {
    const [flashcard, setFlashcard] = useState(false);

    return (
        <> 
            <h2>New flashcard</h2>
            <p>{text}</p>
            <button onClick={() => document.getElementById('flashcard').remove()}>Close</button>
        </>
    )
}
