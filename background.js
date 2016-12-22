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

chrome.alarms.onAlarm.addListener(function(e){
	if(e.name== "notification_delay")
	{
	  var tzoffset = (new Date()).getTimezoneOffset() * 60000; 
      var date2 = (new Date(Date.now() - tzoffset)).toISOString().substr(0, 16).replace('T', ' ');

	  var i = 0;
	  url = "settings.html";
	  title = "Default";
	  var oldlink = JSON.parse(localStorage.getItem(i));
	  while(oldlink!=null)
	 {

	    var date = oldlink.date;
	    var time = oldlink.time;
	    var combo = date+" "+time;
	    console.log(combo);
	    console.log(date2);
	    if(combo == date2 )
	    {
	    	title = oldlink.title;
            url = oldlink.url;
	    	break;

	    }
	    else
	    {
	    	i+=1;
	    	var oldlink = JSON.parse(localStorage.getItem(i));

	    }
	    
	  }
	  var options = {
		type: "image",
		title: "Read-Later",
		message: title,
		contextMessage :"You are scheduled to visit this link now",
		iconUrl: "icon.png",
		buttons: [{
			title: "Open Bookmark"
		}],
		imageUrl: "icon.png"
	  };
	  chrome.notifications.create(options);
      chrome.notifications.onButtonClicked.addListener(function(){
    	window.open(url); //needs to be replaced by url of site...
      });



	}
	
});

/*chrome.notifications.create(options);
chrome.notifications.onButtonClicked.addListener(function(){
	window.open("https://www.facebook.com/"); //needs to be replaced by url of site...
});*/
