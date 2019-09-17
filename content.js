chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	const regex = /\"\$ROOT\_QUERY\.pages\.default\(\{\\"id\\":(\d+)/g;
	const found = document.body.innerHTML.match(regex);
	const clean = found[0].replace('$ROOT_QUERY.pages.default({\\"id\\"', '');
	const adminUrl = clean.replace(/[":]/g, '');
	sendResponse({ adminUrl: adminUrl });
});
