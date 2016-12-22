
window.onload = function(){
  var newlink;
  var table = document.getElementById("links");
  var tr = document.createElement('tr');
  var i =0;
  var newlink = JSON.parse(localStorage.getItem(i));
  while(newlink!=null)
  {
    console.log(i);    
    var title = newlink.title;
    var url = newlink.url;
    var date = newlink.date;
    var time = newlink.time;
    tr = document.createElement('tr');
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    tr.cells[0].appendChild(checkbox); 
    tr.cells[1].appendChild(document.createTextNode(title));
    tr.cells[2].appendChild(document.createTextNode(url));
    tr.cells[3].appendChild(document.createTextNode(date));
    tr.cells[4].appendChild( document.createTextNode(time));
 
    table.appendChild(tr);
    i+=1;
    var newlink = JSON.parse(localStorage.getItem(i));
    
  }  
};