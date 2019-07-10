var hasRun = false;
var adminUrl;
window.onload = function() {
	if (!hasRun) {
		var regex = /"pageId":"(.*?)"/g;
		var found = document.body.innerHTML.match(regex);
		var clean = found[0].replace("pageId", "");
		var adminUrl = clean.replace(/[":]/g, "")
		console.log("https://hyperisland.wpengine.com/wp-admin/post.php?post=" + adminUrl + "&action=edit&lang=en");
		hasRun = true;
	}
}