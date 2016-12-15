chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
     myFunction(tabs[0].url,tabs[0].title);
});


function myFunction(url,title) {
	chrome.bookmarks.create({url: url, title: title});
	console.log(url);  
}





