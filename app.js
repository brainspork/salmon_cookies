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
    return Math.floor((Math.ceil((Math.random() * (this.maxCustomers - this.minCustomers))) + this.minCustomers)*this.aveCookie);
  };
}


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

  var timeSales = document.getElementById('time');
  var timeData = ['<td></td>',];
  for(var k = 0; k < this.hoursArr.length + 1; k++){
    if ([k] < this.hoursArr.length){
      timeData.push('<td>' + this.hoursArr[k] + ':00</td>');
    }else{
      timeData.push('<td>Location Totals</td>');
    }
  }

  var newSales = document.createElement('tr');
  newSales.innerHTML = tableData.join('');
  tableSales.appendChild(newSales);
  timeSales.innerHTML = timeData.join('');
};

var firstPike = new Retailer('1st and Pike', 23, 65, 6, 20, 6.3);
var seaTac = new Retailer('SeaTac Airport', 3, 24, 6, 20, 1.2);
var seaCenter = new Retailer('Seattle Center', 11, 38, 6, 20, 3.7);
var capHill = new Retailer('Capitol Hill', 20, 38, 6, 20, 2.3);
var alki = new Retailer('Alik', 2, 16, 6, 20, 4.6);

var locations = [firstPike, seaTac, seaCenter, capHill, alki];

function footer(){
  for(var p = 0; p < locations.length; p++){
    locations[p].calculate();
    locations[p].render();
  }

  var locationsHourly = [];
  var hourlyTotals = [];
  var total = 0;

  for(p = 0; p < locations.length; p++){
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

footer();
