document.addEventListener(
	'DOMContentLoaded',
	function() {
		chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, 'hi', getPageId);
		});
		let hasRun = false;
		function getPageId(res) {
			const buttonLink = document.getElementById('url');
			buttonLink.setAttribute(
				'href',
				`https://hyperisland.wpengine.com/wp-admin/post.php?post=${res.adminUrl}&action=edit&lang=en`
			);
			hasRun = true;
		}
	},
	false
);
