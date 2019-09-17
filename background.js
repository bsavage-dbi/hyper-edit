//this file is not finished and not used in production

//chrome.browserAction.setIcon({path: icon});
chrome.tabs.query(
	{
		active: true,
		currentWindow: true
	},
	function(tabs) {
		var tab = tabs[0];
		var url = tab.url;
		chrome.browserAction.setBadgeText({ text: url });
	}
);
