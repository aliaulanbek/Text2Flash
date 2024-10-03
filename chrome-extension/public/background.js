// to create right-click context menu
chrome.runtime.onInstalled.addListener( () => {
    chrome.contextMenus.create( { 
        id: "selectText",
        title: "Create Flashcard!",
        contexts: ["selection"]
    });
});

// action when context menu item is clicked
chrome.contextMenus.onClicked.addListener( (info, tab) => {
    if (info.menuItemId === "selectText" && info.selectionText) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: getSelectedText
        });
    }
});

function getSelectedText() {
    const text = window.getSelection().toString();
    if (text) {
        alert(`You selected: ${text}`);
    }
}

let word = ""

function getWord() {
    return word;
}

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     const keys = Object.keys(chrome.action);
//     console.log(...keys);
//     if (request.message === 'open popup') {
//         chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//             if (request.text === "get text") {
//                 chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//                     console.log("nested selected", request);
//                     chrome.runtime.sendMessage(request.text);
//                 });
//             }
//             chrome.action.openPopup();
//         })
//     }
// })

// get text from content
let selectedText = ""
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "send text") {
        chrome.action.openPopup();
        selectedText = request.text;
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (request.action === "get text") {
                sendResponse(selectedText);
            }
        });
    }
    //send selected to popu
})


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     const keys = Object.keys(chrome.action);
//     console.log(...keys); // List available keys for debugging

//     if (request.message === 'nothing much') {
//         // Change the action title
//         chrome.action.setTitle({ title: "nottext2flash" });

//         // Open the popup
//         chrome.action.openPopup();
//     }
// });
// course of action to display in pop up:
// send message in app.js
// listen for message and send back text in background.js