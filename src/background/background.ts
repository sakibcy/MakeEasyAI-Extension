chrome.runtime.onInstalled.addListener(() => {
    console.log("Hello background");
})

chrome.bookmarks.onCreated.addListener(() => {
    console.log("I just bookmarked");
})