'use strict';
//retailer object constructor
function Retailer(name, minCustomers, maxCustomers, openHour, closeHour, aveCookie){
  this.name = name;
  this.minCustomers =minCustomers;
  this.maxCustomers = maxCustomers;
  this.aveCookie = aveCookie;
  this.openHour = openHour;
  this.closeHour = closeHour;
  this.cookieArr = [];
  this.cookiesTotal = 0;
  this.cookiesPerHour = function(){
    return Math.floor((Math.floor((Math.random() * ((parseInt(this.maxCustomers) - parseInt(this.minCustomers)) + 1))) + parseInt(this.minCustomers)) * parseInt(this.aveCookie));
  };
}
//Populates object's cookieArr
Retailer.prototype.calculateCookies = function(){
  for(var i = 0; i < 24; i++){
    if(parseInt([i]) < this.openHour){
      this.cookieArr.push(0);
    }else if (parseInt([i]) > this.closeHour){
      this.cookieArr.push(0);
    }else{
      this.cookieArr.push(this.cookiesPerHour());
      this.cookiesTotal += this.cookiesPerHour();
    }
  }
};
//renders cookieArr data to a row on the table
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

  var newSales = document.createElement('tr');
  newSales.innerHTML = tableData.join('');
  tableSales.appendChild(newSales);
};
//Retailers


var firstPike = new Retailer('1st and Pike', 23, 65, 6, 20, 6.3);
var seaTac = new Retailer('SeaTac Airport', 3, 24, 6, 20, 1.2);
var seaCenter = new Retailer('Seattle Center', 11, 38, 6, 20, 3.7);
var capHill = new Retailer('Capitol Hill', 20, 38, 6, 20, 2.3);
var alki = new Retailer('Alki', 2, 16, 6, 20, 4.6);

var locations = [firstPike, seaTac, seaCenter, capHill, alki, ];
//returns Hourly sales table
function printSales(){
  for(var p = 0; p < locations.length; p++){
    locations[p].calculateCookies();
    locations[p].render();
  }
}
//Makes new object from form entry
var form = document.getElementById('retailer_form');
function formData(event) {
  event.preventDefault();

  var name = event.target.name.value;
  var minCustomers = event.target.minCustomers.value;
  var maxCustomers = event.target.maxCustomers.value;
  var openHour = event.target.openHour.value;
  var closeHour = event.target.closeHour.value;
  var aveCookie = event.target.aveCookie.value;

  locations.push(new Retailer(name, minCustomers, maxCustomers, openHour, closeHour, aveCookie));
  clearTable();
  printSales();
  footer();
  form.reset();
}
//Calculates hourly sum from all locations
function footer(){
  var locationsHourly = [];
  var hourlyTotals = [];
  var total = 0;

  for(var p = 0; p < locations.length; p++){
    locationsHourly.push(locations[p].cookieArr);
    total += locations[p].cookiesTotal;
  }

  for(var n = 0; n < 24; n++){
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

function clearTable(){
  for(var i = 0; i < locations.length; i++){
    locations[i].cookieArr = [];
  }
  var remove = document.getElementById('locations');
  remove.innerHTML = '';
}

form.addEventListener('submit', formData);
printSales();
footer();
