console.log("Content Script running");

window.addEventListener(
  "message",
  (event) => {
    // We only accept messages from ourselves
    if (event.source != window) return;

    if (event.data.type && event.data.type == "FROM_PAGE") {
      console.log("Content script received: " + event.data.text);
    }
  },
  false
);
