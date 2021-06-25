console.log("Hello from SW");
// Shorcuts
chrome.commands.getAll(function (data) {
  console.log(data);
});
chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.query({ currentWindow: true }, function (tabs) {
    // Sort tabs according to their index in the window.
    tabs.sort((a, b) => {
      return a.index < b.index;
    });
    let activeIndex = tabs.findIndex((tab) => {
      return tab.active;
    });
    let lastTab = tabs.length - 1;
    let newIndex = -1;
    if (command === "flip")
      newIndex = activeIndex === 0 ? lastTab : activeIndex - 1;
    // 'flip-tabs-backwards'
    else newIndex = activeIndex === lastTab ? 0 : activeIndex + 1;
    chrome.tabs.update(tabs[newIndex].id, { active: true, highlighted: true });
  });
});

// console.log("Is this running");
// To listen to whwat is typed in the search box
// console.log(chrome.omnibox);
chrome.omnibox.onInputEntered.addListener(function (text, f) {
  // f is enum value
  console.log(text, f);
});

// Run on initialization time
// chrome.runtime.onInstalled.addListener(function() {
//   // Context menu requires permission too.
//   chrome.contextMenus.create({
//     "id": "sampleContextMenu",
//     "title": "Sample Context Menu",
//     "contexts": ["selection"]
//   });
// });