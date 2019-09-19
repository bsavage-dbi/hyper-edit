chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	const regex = /\"\$ROOT\_QUERY\.pages\.(locked|default|blogPost|eventPost|program|course)\(\{\\"id\\":(\d+)/g;
	const replace = /\$ROOT\_QUERY\.pages\.(.*?)\(\{\\"id\\"/g;
	const found = document.body.innerHTML.match(regex);
	const clean = found[0].replace(replace, '');
	const adminUrl = clean.replace(/[":]/g, '');
	sendResponse({ adminUrl: adminUrl });
});
