/******/ (() => { // webpackBootstrap
/*!******************************!*\
  !*** ./public/background.js ***!
  \******************************/
// to create right-click context menu
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "selectText",
    title: "Create Flashcard!",
    contexts: ["selection"]
  });
});

// action when context menu item is clicked
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "selectText" && info.selectionText) {
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id
      },
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
let word = "";
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
let selectedText = "";
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
});

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQUEsTUFBTSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsQ0FBQ0MsV0FBVyxDQUFFLE1BQU07RUFDMUNILE1BQU0sQ0FBQ0ksWUFBWSxDQUFDQyxNQUFNLENBQUU7SUFDeEJDLEVBQUUsRUFBRSxZQUFZO0lBQ2hCQyxLQUFLLEVBQUUsbUJBQW1CO0lBQzFCQyxRQUFRLEVBQUUsQ0FBQyxXQUFXO0VBQzFCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7QUFFRjtBQUNBUixNQUFNLENBQUNJLFlBQVksQ0FBQ0ssU0FBUyxDQUFDTixXQUFXLENBQUUsQ0FBQ08sSUFBSSxFQUFFQyxHQUFHLEtBQUs7RUFDdEQsSUFBSUQsSUFBSSxDQUFDRSxVQUFVLEtBQUssWUFBWSxJQUFJRixJQUFJLENBQUNHLGFBQWEsRUFBRTtJQUN4RGIsTUFBTSxDQUFDYyxTQUFTLENBQUNDLGFBQWEsQ0FBQztNQUMzQkMsTUFBTSxFQUFFO1FBQUNDLEtBQUssRUFBRU4sR0FBRyxDQUFDTDtNQUFFLENBQUM7TUFDdkJZLFFBQVEsRUFBRUM7SUFDZCxDQUFDLENBQUM7RUFDTjtBQUNKLENBQUMsQ0FBQztBQUVGLFNBQVNBLGVBQWVBLENBQUEsRUFBRztFQUN2QixNQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUM7RUFDN0MsSUFBSUgsSUFBSSxFQUFFO0lBQ05JLEtBQUssQ0FBQyxpQkFBaUJKLElBQUksRUFBRSxDQUFDO0VBQ2xDO0FBQ0o7QUFFQSxJQUFJSyxJQUFJLEdBQUcsRUFBRTtBQUViLFNBQVNDLE9BQU9BLENBQUEsRUFBRztFQUNmLE9BQU9ELElBQUk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJRSxZQUFZLEdBQUcsRUFBRTtBQUNyQjNCLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDMkIsU0FBUyxDQUFDekIsV0FBVyxDQUFDLENBQUMwQixPQUFPLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxLQUFLO0VBQ3BFLElBQUlGLE9BQU8sQ0FBQ0csTUFBTSxLQUFLLFdBQVcsRUFBRTtJQUNoQ2hDLE1BQU0sQ0FBQ2dDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLENBQUM7SUFDekJOLFlBQVksR0FBR0UsT0FBTyxDQUFDVCxJQUFJO0lBQzNCcEIsTUFBTSxDQUFDQyxPQUFPLENBQUMyQixTQUFTLENBQUN6QixXQUFXLENBQUMsQ0FBQzBCLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEtBQUs7TUFDcEUsSUFBSUYsT0FBTyxDQUFDRyxNQUFNLEtBQUssVUFBVSxFQUFFO1FBQy9CRCxZQUFZLENBQUNKLFlBQVksQ0FBQztNQUM5QjtJQUNKLENBQUMsQ0FBQztFQUNOO0VBQ0E7QUFDSixDQUFDLENBQUM7O0FBR0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RCIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vLi9wdWJsaWMvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0byBjcmVhdGUgcmlnaHQtY2xpY2sgY29udGV4dCBtZW51XG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lciggKCkgPT4ge1xuICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKCB7IFxuICAgICAgICBpZDogXCJzZWxlY3RUZXh0XCIsXG4gICAgICAgIHRpdGxlOiBcIkNyZWF0ZSBGbGFzaGNhcmQhXCIsXG4gICAgICAgIGNvbnRleHRzOiBbXCJzZWxlY3Rpb25cIl1cbiAgICB9KTtcbn0pO1xuXG4vLyBhY3Rpb24gd2hlbiBjb250ZXh0IG1lbnUgaXRlbSBpcyBjbGlja2VkXG5jaHJvbWUuY29udGV4dE1lbnVzLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lciggKGluZm8sIHRhYikgPT4ge1xuICAgIGlmIChpbmZvLm1lbnVJdGVtSWQgPT09IFwic2VsZWN0VGV4dFwiICYmIGluZm8uc2VsZWN0aW9uVGV4dCkge1xuICAgICAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB7dGFiSWQ6IHRhYi5pZH0sXG4gICAgICAgICAgICBmdW5jdGlvbjogZ2V0U2VsZWN0ZWRUZXh0XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRTZWxlY3RlZFRleHQoKSB7XG4gICAgY29uc3QgdGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIGFsZXJ0KGBZb3Ugc2VsZWN0ZWQ6ICR7dGV4dH1gKTtcbiAgICB9XG59XG5cbmxldCB3b3JkID0gXCJcIlxuXG5mdW5jdGlvbiBnZXRXb3JkKCkge1xuICAgIHJldHVybiB3b3JkO1xufVxuXG4vLyBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4vLyAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNocm9tZS5hY3Rpb24pO1xuLy8gICAgIGNvbnNvbGUubG9nKC4uLmtleXMpO1xuLy8gICAgIGlmIChyZXF1ZXN0Lm1lc3NhZ2UgPT09ICdvcGVuIHBvcHVwJykge1xuLy8gICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4vLyAgICAgICAgICAgICBpZiAocmVxdWVzdC50ZXh0ID09PSBcImdldCB0ZXh0XCIpIHtcbi8vICAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmVzdGVkIHNlbGVjdGVkXCIsIHJlcXVlc3QpO1xuLy8gICAgICAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShyZXF1ZXN0LnRleHQpO1xuLy8gICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgY2hyb21lLmFjdGlvbi5vcGVuUG9wdXAoKTtcbi8vICAgICAgICAgfSlcbi8vICAgICB9XG4vLyB9KVxuXG4vLyBnZXQgdGV4dCBmcm9tIGNvbnRlbnRcbmxldCBzZWxlY3RlZFRleHQgPSBcIlwiXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcInNlbmQgdGV4dFwiKSB7XG4gICAgICAgIGNocm9tZS5hY3Rpb24ub3BlblBvcHVwKCk7XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IHJlcXVlc3QudGV4dDtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcImdldCB0ZXh0XCIpIHtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2Uoc2VsZWN0ZWRUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vc2VuZCBzZWxlY3RlZCB0byBwb3B1XG59KVxuXG5cbi8vIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbi8vICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hyb21lLmFjdGlvbik7XG4vLyAgICAgY29uc29sZS5sb2coLi4ua2V5cyk7IC8vIExpc3QgYXZhaWxhYmxlIGtleXMgZm9yIGRlYnVnZ2luZ1xuXG4vLyAgICAgaWYgKHJlcXVlc3QubWVzc2FnZSA9PT0gJ25vdGhpbmcgbXVjaCcpIHtcbi8vICAgICAgICAgLy8gQ2hhbmdlIHRoZSBhY3Rpb24gdGl0bGVcbi8vICAgICAgICAgY2hyb21lLmFjdGlvbi5zZXRUaXRsZSh7IHRpdGxlOiBcIm5vdHRleHQyZmxhc2hcIiB9KTtcblxuLy8gICAgICAgICAvLyBPcGVuIHRoZSBwb3B1cFxuLy8gICAgICAgICBjaHJvbWUuYWN0aW9uLm9wZW5Qb3B1cCgpO1xuLy8gICAgIH1cbi8vIH0pO1xuLy8gY291cnNlIG9mIGFjdGlvbiB0byBkaXNwbGF5IGluIHBvcCB1cDpcbi8vIHNlbmQgbWVzc2FnZSBpbiBhcHAuanNcbi8vIGxpc3RlbiBmb3IgbWVzc2FnZSBhbmQgc2VuZCBiYWNrIHRleHQgaW4gYmFja2dyb3VuZC5qcyJdLCJuYW1lcyI6WyJjaHJvbWUiLCJydW50aW1lIiwib25JbnN0YWxsZWQiLCJhZGRMaXN0ZW5lciIsImNvbnRleHRNZW51cyIsImNyZWF0ZSIsImlkIiwidGl0bGUiLCJjb250ZXh0cyIsIm9uQ2xpY2tlZCIsImluZm8iLCJ0YWIiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNjcmlwdGluZyIsImV4ZWN1dGVTY3JpcHQiLCJ0YXJnZXQiLCJ0YWJJZCIsImZ1bmN0aW9uIiwiZ2V0U2VsZWN0ZWRUZXh0IiwidGV4dCIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsInRvU3RyaW5nIiwiYWxlcnQiLCJ3b3JkIiwiZ2V0V29yZCIsInNlbGVjdGVkVGV4dCIsIm9uTWVzc2FnZSIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJhY3Rpb24iLCJvcGVuUG9wdXAiXSwic291cmNlUm9vdCI6IiJ9