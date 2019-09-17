//this file is not finished and not used in production

//chrome.browserAction.setIcon({path: icon});
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
	var currTab = tabs[0];
	if (currTab) {
		console.log(window.location);
	}
});
