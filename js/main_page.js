function showItem() {
  if (document.getElementById("searchInput").style.visibility == "visible") {
    document.getElementById("searchInput").style.visibility = "hidden";
  } else {
    document.getElementById("searchInput").style.visibility = "visible";
  }
}

var searchInput = document.getElementById("searchInput");
var modal = document.getElementById("main_modal");
var close = document.getElementsByClassName("exit")[0];

close.onclick = function() {
  modal.style.display = "none";
}

function searchTable() {
  var table = document.getElementById('my_table')
  // var row = table.insertRow(1);
  //
  // var cell1 = row.insertCell(0);
  // var cell2 = row.insertCell(1);
  //
  // cell1.innerHTML = "New Cell";
  // cell2.innerHTML = "New Cell"

  // var heading = new Array();
  // heading[0] = 'Name';
  // heading[1] = 'Price';
  // heading[2] = 'Quantity';

  var searchStock = new Array();
  searchStock[0] = new Array('Item 1', '222', '357');
  searchStock[1] = new Array('Item 2', '346', '456');

  for (var i = 0; i < searchStock.length; i++) {
    var row = table.insertRow(i + 1);
    var nameCell = row.insertCell(0);
    var priceCell = row.insertCell(1);
    var quantityCell = row.insertCell(2);
    nameCell.innerHTML = searchStock[i][0];
    priceCell.innerHTML = searchStock[i][0];
    quantityCell.innerHTML = searchStock[i][0];
  }
}
searchInput.onsearch = function() {
  modal.style.display = "block";
  // searchTable();
}
