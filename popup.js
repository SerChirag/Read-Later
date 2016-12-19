/*document.getElementById("submit").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }
});

*/
window.onload = function(){
  document.getElementById("submit").onclick = function(){
    alert("Success");
  };
};

/*function myFunction(url,title) {
	chrome.bookmarks.create({url: url, title: title});
	console.log(url);  
}*/


/*{
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		myFunction(tabs[0].url,tabs[0].title);
	});
	
}*/









