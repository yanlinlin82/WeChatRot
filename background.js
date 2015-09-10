chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "content_script.js"});
	//chrome.tabs.executeScript({code: 'document.body.style.backgroundColor="red"'});
});
