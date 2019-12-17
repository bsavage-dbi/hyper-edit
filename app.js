document.addEventListener(
	'DOMContentLoaded',
	function() {
		let hasRun = false;
		let tabUrl;
		chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, 'hi', getPageId);
			tabUrl = tabs[0].url;
		});
		function getPageId(res) {
			if (!tabUrl.includes('www.hyperisland.com')) {
				document.getElementById('heythere').textContent =
					"Oh no. You're not on a Hyper Island web page 😔";
				document.getElementById('intro').style.display = 'none';
				document.getElementById('button-container').style.display = 'none';
			} else {
				const buttonLink = document.getElementById('url');
				buttonLink.setAttribute(
					'href',
					`https://wp.hyperisland.com/wp-admin/post.php?post=${res.adminUrl}&action=edit&lang=en`
				);
			}
			hasRun = true;
		}
	},
	false
);
