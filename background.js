/*function printBookmarks(id) {
 chrome.bookmarks.getChildren(id, function(children) {
    children.forEach(function(bookmark) {

      chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      	if(tabs[0].url === bookmark.url )
      	{
      		console.log("Chirag");
      	}
      });
      printBookmarks(bookmark.id);
    });
 });
}

printBookmarks('0');
*/
var options = {
	type: "basic",
	title: "Read-Later",
	message: "You are scheduled to read an article",
	iconUrl: "icon.png",
	
	buttons: [{
		title: "Open Bookmark"
	}],
	//imageUrl: "icon.png"
};

chrome.notifications.create(options);
chrome.notifications.onButtonClicked.addListener(function(){
	window.open("https://www.facebook.com/"); //needs to be replaced by url of site...
});
