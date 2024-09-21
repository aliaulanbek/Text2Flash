let iconElement; 

document.addEventListener('mouseup', (event) => {
    const iconX = event.clientX + window.scrollX; 
    const iconY = event.clientY + window.scrollY;
    const selectedText = window.getSelection();

    if (!selectedText.isCollapsed) {
        
        if (!iconElement) {
            iconElement = document.createElement('img');
            iconElement.src = chrome.runtime.getURL("images/48px.png");
            iconElement.style.position = 'absolute';
            iconElement.style.zIndex = '1000';
            iconElement.style.width = '40px'; 
            iconElement.style.height = '40px'; 
            iconElement.style.cursor = 'pointer';
            document.body.appendChild(iconElement);

            // click event for icon
            iconElement.onclick = () => {
                createFlashcard(selectedText.toString());
                window.getSelection().removeAllRanges(); 
                removeIcon();
            };
        }
         // Position the icon above the highlighted text
        iconElement.style.left = `${iconX}px`;
        iconElement.style.top = `${iconY}px`;
        iconElement.style.display = 'block';
    
    } else {
        removeIcon();
    }
});

document.addEventListener('mousedown', (event) => {
    if (iconElement && event.target !== iconElement) {
        removeIcon();
    }
});

// Function to remove the icon
function removeIcon() {
    if (iconElement) {
        iconElement.remove();
        iconElement = null;
    }
}

function createFlashcard(text) {
    console.log("Text: ", text);

    fetch(chrome.runtime.getURL("src/flashcard.html"))
} 