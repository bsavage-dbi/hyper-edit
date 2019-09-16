chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	const regex = /"pageId":"(.*?)"/g;
	const found = document.body.innerHTML.match(regex);
	const clean = found[0].replace('pageId', '');
	const adminUrl = clean.replace(/[":]/g, '');
	sendResponse({ adminUrl: adminUrl });
});
