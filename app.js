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
}

var firstPike = new Retailer('1st and Pike', 23, 65, 6, 20, 6.3);
var seaTac = new Retailer('SeaTac Airport', 3, 24, 6, 20, 1.2);
var seaCenter = new Retailer('Seattle Center', 11, 38, 6, 20, 3.7);
var capHill = new Retailer('Capitol Hill', 20, 38, 6, 20, 2.3);
var alki = new Retailer('Alik', 2, 16, 6, 20, 4.6);
var locations = [firstPike, seaTac, seaCenter, capHill, alki];

function calculate(store){
  var tableArr = store.cookieArr;
  var timeArr = store.hoursArr;
  var startHour = store.openHour;
  var cookiesTotal = 0;
  var cookiesPerHour = function(){
    return Math.floor((Math.ceil((Math.random() * (store.maxCustomers - store.minCustomers))) + store.minCustomers)*store.aveCookie);
  }

  for(var i = 0; i < store.closeHour - store.openHour; i++){
    var hour = startHour + parseInt([i]);
    var sales = cookiesPerHour();
    tableArr.push(sales);
    timeArr.push(hour);
    cookiesTotal += sales;
  }

  var tableSales = document.getElementById('locations');
  var tableData = [store.name,];
  for(var j = 0; j < tableArr.length + 1; j++){
    if([j] < tableArr.length){
      tableData.push('<td>' + tableArr[j] + '</td>');
    }else{
      tableData.push('<td>' + cookiesTotal + '</td>');
    }
  }

  var timeSales = document.getElementById('time');
  var timeData = ['<td></td>',];
  for(var k = 0; k < timeArr.length + 1; k++){
    if ([k] < timeArr.length){
      timeData.push('<td>' + timeArr[k] + '</td>');
    }else{
      timeData.push('<td>Location Totals</td>');
    }
  }

  var newSales = document.createElement('tr');
  newSales.innerHTML = tableData.join('');
  tableSales.appendChild(newSales);
  console.log(tableSales);

  timeSales.innerHTML = timeData.join('');
  console.log(timeSales);
}

var locationsHourly = [];
for(var p = 0; p < locations.length; p++){
  calculate(locations[p]);
  locationsHourly.push(locations[p].cookieArr);
}

var hourlyTotals = [];
for(var n = 0; n < 14; n++){
  var counter = 0;
  for(var m = 0; m < locationsHourly.length; m++){
    counter += locationsHourly[m][n];
  }
  hourlyTotals.push(counter);
}
