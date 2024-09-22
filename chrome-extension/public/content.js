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

    // let container = document.getElementById('flashcard');
    // if (!container){
    //     container = document.createElement('div');
    //     container.id = "flashcard";
    //     // container.style.posiiton = "fixed";
    //     // container.style.top = '0';
    //     // container.style.left = '0';
    //     // container.style.width = '100vw';
    //     // container.style.height = '100vh';
    //     // container.style.zIndex = '9999'; // Ensure it shows above all content
    //     document.body.appendChild(container);
    // }
    // window.postMessage( {type: "SHOW_FLASHCARD", text}, "*")
} 

// window.addEventListener("message", function(event) {
//     if (event.source !== window) return;
//     if (event.data.type === "SHOW_FLASHCARD") {
//         renderFlashcard(event.data.text);
//     }
// });