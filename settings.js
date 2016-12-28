
window.onload = function(){
  var newlink;
  var i;
  var table = document.getElementById("links");
  var tr = document.createElement('tr');
  for (i=0;i<5;i++)
  {
    var newlink = JSON.parse(localStorage.getItem(i));
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
  }  
};