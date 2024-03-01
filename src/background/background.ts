chrome.contextMenus.create({
    id: "selectAndTranslate",
    title: "Capture Text",
    contexts: ["selection"],
});

async function storeSelectionText(text: any) {
    try {
        await chrome.storage.sync.set({ userData: text });
    } catch (error) {
        console.error("Error saving selection text:", error);
    }
}

chrome.contextMenus.onClicked.addListener(async (clickData: any, tab: any) => {
    if (clickData.menuItemId == "selectAndTranslate" && clickData.selectionText) {
        await storeSelectionText(clickData.selectionText);
    }

    chrome.tabs.sendMessage(tab.id, { action: "captureText" }, (response) => {
        // Use the captured text from the content script response (if applicable)
        chrome.windows.create({
          url: "popup.html",
          type: "popup",
          height: 570,
          width: 450,
        });
      });
});
