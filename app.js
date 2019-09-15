const hasRun = false;
const adminUrl;
window.onload = function() {
	if (!hasRun) {
		const regex = /"pageId":"(.*?)"/g;
		const found = document.body.innerHTML.match(regex);
		if (found) {
			const clean = found[0].replace('pageId', '');
			adminUrl = clean.replace(/[":]/g, '');
			console.log(
				'%c Hyper Wordpress edit link 👇',
				'background: #222; color: #bada55'
			);
			console.log(
				'🌍 ' +
					'https://hyperisland.wpengine.com/wp-admin/post.php?post=' +
					adminUrl +
					'&action=edit&lang=en'
			);
			hasRun = true;
		}
	}
};
