chrome.contextMenus.create({
    id: "selectAndTranslate",
    title: "Capture Text",
    contexts: ["selection"],
});

async function storeSelectionText(text: string) {
    try {
        await chrome.storage.sync.set({ sourceText: text });
    } catch (error) {
        console.error("Error saving selection text:", error);
    }
}

chrome.contextMenus.onClicked.addListener(async (clickData: any, tab: any) => {
    if (clickData.menuItemId == "selectAndTranslate" && clickData.selectionText) {
        await storeSelectionText(clickData.selectionText);
    }

    chrome.tabs.sendMessage(tab.id, { action: "captureText" }, async (response) => {
        chrome.windows.create({
          url: "popup.html",
          type: "popup",
          height: 550,
          width: 415,
        });
    });

    // chrome.tabs.update(tab.id, { url: "popup.html" });

    
    // chrome.tabs.sendMessage(tab.id, { action: "captureText" }, async (response) => {
    //     let popupId: any = null;
    //     if (popupId === null) {
    //         chrome.windows.create({
    //             url: "popup.html",
    //             type: "popup",
    //             height: 550,
    //             width: 415,
    //         }, (window) => {
    //             popupId = window?.id;
    //         });
    //     } else {
    //         chrome.windows.update(popupId, { focused: true }, (window) => {
    //             if (chrome.runtime.lastError) {
    //                 // If the window doesn't exist, create a new one.
    //                 chrome.windows.create({
    //                     url: "popup.html",
    //                     type: "popup",
    //                     height: 550,
    //                     width: 415,
    //                 }, (window) => {
    //                     popupId = window?.id;
    //                 });
    //             }
    //         });
    //     }
    // });


});
