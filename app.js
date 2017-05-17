'use strict';

function Retailer(name, minCustomers, maxCustomers, openHour, closeHour, aveCookie){
  this.name = name;
  this.minCustomers =minCustomers;
  this.maxCustomers = maxCustomers;
  this.openHour = openHour;
  this.closeHour = closeHour;
  this.aveCookie = aveCookie;
  this.cookieArr = [];
  this.hoursArr = [];
  this.cookiesTotal = 0;
  this.cookiesPerHour = function(){
    return Math.floor((Math.ceil((Math.random() * (this.maxCustomers - this.minCustomers + 1))) + this.minCustomers)*this.aveCookie);
  };
}
//calculates raw hourlysales and hours of operation to cookie arr
Retailer.prototype.calculate = function(){
  var tableArr = this.cookieArr;
  var timeArr = this.hoursArr;
  var startHour = this.openHour;

  for(var i = 0; i < this.closeHour - this.openHour; i++){
    var hour = startHour + parseInt([i]);
    var sales = this.cookiesPerHour();
    tableArr.push(sales);
    timeArr.push(hour);
    this.cookiesTotal += sales;
  }
};
//stores hourly sales data in cookieArr
Retailer.prototype.render = function(){
  var tableSales = document.getElementById('locations');
  var tableData = ['<td>' + this.name + '</td>',];
  for(var j = 0; j < this.cookieArr.length + 1; j++){
    if([j] < this.cookieArr.length){
      tableData.push('<td>' + this.cookieArr[j] + '</td>');
    }else{
      tableData.push('<td>' + this.cookiesTotal + '</td>');
    }
  }

  console.log(tableData);
  var newSales = document.createElement('tr');
  newSales.innerHTML = tableData.join('');
  tableSales.appendChild(newSales);
};

var firstPike = new Retailer('1st and Pike', 23, 65, 6, 20, 6.3);
var seaTac = new Retailer('SeaTac Airport', 3, 24, 6, 20, 1.2);
var seaCenter = new Retailer('Seattle Center', 11, 38, 6, 20, 3.7);
var capHill = new Retailer('Capitol Hill', 20, 38, 6, 20, 2.3);
var alki = new Retailer('Alki', 2, 16, 6, 20, 4.6);

var locations = [firstPike, seaTac, seaCenter, capHill, alki,];
//returns Hourly sales table
function printSales(){
  for(var p = 0; p < locations.length; p++){
    locations[p].calculate();
    locations[p].render();
  }
}
//returns times
function header(store){
  var timeSales = document.getElementById('time');
  var timeData = ['<td></td>',];
  for(var k = 0; k < store.hoursArr.length + 1; k++){
    if ([k] < store.hoursArr.length){
      timeData.push('<td>' + store.hoursArr[k] + ':00</td>');
    }else{
      timeData.push('<td>Location Totals</td>');
    }
  }
  timeSales.innerHTML = timeData.join('');
}
//returns hourly totals
function footer(){
  var locationsHourly = [];
  var hourlyTotals = [];
  var total = 0;

  for(var p = 0; p < locations.length; p++){
    locationsHourly.push(locations[p].cookieArr);
    total += locations[p].cookiesTotal;
  }

  for(var n = 0; n < 14; n++){
    var counter = 0;
    for(var m = 0; m < locationsHourly.length; m++){
      counter += locationsHourly[m][n];
    }
    hourlyTotals.push(counter);
  }

  var hourlyData = ['<td>Totals</td>',];
  for(var o = 0; o < hourlyTotals.length + 1; o++){
    if(o < hourlyTotals.length){
      hourlyData.push('<td>' + hourlyTotals[o] + '</td>');
    }else{
      hourlyData.push('<td>' + total + '</td>');
    }
  }

  var hourlySales = document.getElementById('locations');
  var newHourly = document.createElement('tr');
  newHourly.innerHTML = hourlyData.join('');
  hourlySales.appendChild(newHourly);
}

var form = document.getElementById('retailer_form');
var table = document.getElementById('retailer_table');
var data = [];
function formData(event) {
  event.preventDefault();

  var name = event.target.name.value;
  var minCustomers = event.target.minCustomers.value;
  var maxCustomers = event.target.maxCustomers.value;
  var closeHour = event.target.closeHour.value;
  var openHour = event.target.openHour.value;
  var aveCookie = event.target.aveCookie.value;

  data.push(new Retailer(name, minCustomers, maxCustomers, openHour, closeHour, aveCookie));
  locations.push(new Retailer(name, minCustomers, maxCustomers, closeHour, openHour, aveCookie));
  createTable();
  clearTable();
  printSales();
  footer();
  form.reset();
}
//creates form data
function createTable() {
  var row;
  for (var i = 0; i < data.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + data[i].name + '</td>' +
      '<td>' + data[i].minCustomers + '</td>' +
      '<td>' + data[i].maxCustomers + '</td>' +
      '<td>' + data[i].closeHour + '</td>' +
      '<td>' + data[i].openHour + '</td>' +
      '<td>' + data[i].aveCookie + '</td>';
  }

  table.appendChild(row);
}
console.log(locations);
form.addEventListener('submit', formData);

function clearTable(){
  for(var i = 0; i < locations.length; i++){
    locations[i].cookieArr = [];
  }
  var remove = document.getElementById('locations');
  remove.innerHTML = '';
}

printSales();
header(firstPike);
footer();
