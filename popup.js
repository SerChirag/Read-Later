/*document.getElementById("submit").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }
});

*/
var count=0;
var storage = chrome.storage.sync;
var sumbit = document.getElementById("submit");

submit.addEventListener("click", function(){
  chrome.tabs.getSelected(null, function(tab){
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var title = document.getElementById("title").value;
    var url = tab.url;
    var newlink;
    var i =0;
    /*for (i=0;i<5;i++)
    {
      newlink = {"count":i, "url": url ,"title":title,"time":time,"date":date};
      localStorage.setItem(i, JSON.stringify(newlink));
    }*/
    var dl = date.split("-");
    var tl = time.split(":");
    var g = new Date();
    var f = new Date();
    var currentTimeZoneOffsetInHours = f.getTimezoneOffset()*60000;
    
    g = Date.UTC(+dl[0], dl[1]-1, +dl[2], +tl[0], +tl[1], +0, +0);
    //alert(Date(f.getTime()));
    var lapse = (g - Date.now() + currentTimeZoneOffsetInHours);
    chrome.alarms.create("notification_delay",{
      "when": Date.now() + lapse

    })
    alert("Success");
    
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



	
	










