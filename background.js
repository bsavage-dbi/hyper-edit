//logo bs

//chrome.browserAction.setIcon({path: icon});

function error() {
	if (chrome.runtime.lastError) {
		console.log(chrome.runtime.lastError.message);
	}
}

chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
	if (tab.url == undefined) {
		return;
	}
	if (!tab.url.includes('www.hyperisland.com')) {
		chrome.browserAction.setIcon(
			{
				path: 'images/disabled-logo.png'
			},
			error
		);
	} else {
		chrome.browserAction.setIcon({ path: 'images/logo.png' }, error);
	}
});
