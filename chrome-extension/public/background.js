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