/*document.getElementById("submit").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }
});

*/
var count=0;
var storage = chrome.storage.sync;
var sumbit = document.getElementById("submt");

submit.addEventListener("click", function(){
  chrome.tabs.getSelected(null, function(tab){
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var title = document.getElementById("title").value;
    var url = tab.url;
    var newlink;
    var i =0;
    for (i=0;i<5;i++)
    {
      newlink = {"count":i, "url": url ,"title":title,"time":time,"date":date};
      localStorage.setItem(i, JSON.stringify(newlink));
    }   
    
  });
});


window.onload = function(){
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    document.getElementById("title").value = (tabs[0].title);
  });
  /*var date = new Date();
  dateFormat(date, "mm, dd, yyyy, hh:MM ");
  document.getElementById("time").value = date.setTime(date.getTime());
  document.getElementById("date").value = date.setDate(date.getDate() + 1);
  */
    
  };

/*function myFunction(url,title) {
	chrome.bookmarks.create({url: url, title: title});
	console.log(url);  
}*/



	
	










