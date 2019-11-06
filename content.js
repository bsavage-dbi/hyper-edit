chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	const regex = /\"\$ROOT\_QUERY\.pages\.\w+\(\{\\"id\\":\\"(\d+)/;
	const adminUrl = document.body.innerHTML.match(regex)[0].match(/\d+/g);
	sendResponse({ adminUrl: adminUrl });
});
