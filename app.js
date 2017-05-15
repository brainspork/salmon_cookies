'use strict';

var firstPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  aveCookie: 6.3,
  cookiesPerHour: function(minCustomers, maxCustomers, aveCookie){
    Math.floor((Math.ceil(Math.random() * (maxCustomers - minCustomers)) + minCustomers)*aveCookie);
  }
}

var seaTac = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  aveCookie: 1.2,
  cookiesPerHour: function(minCustomers, maxCustomers, aveCookie){
    Math.floor((Math.ceil(Math.random() * (maxCustomers - minCustomers)) + minCustomers)*aveCookie);
  }
}

var seaCenter= {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  aveCookie: 3.7,
  cookiesPerHour: function(minCustomers, maxCustomers, aveCookie){
    Math.floor((Math.ceil(Math.random() * (maxCustomers - minCustomers)) + minCustomers)*aveCookie);
  }
}

var capHill = {
  name: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  aveCookie: 2.3,
  cookiesPerHour: function(minCustomers, maxCustomers, aveCookie){
    Math.floor((Math.ceil(Math.random() * (maxCustomers - minCustomers)) + minCustomers)*aveCookie);
  }
}

var alki = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  aveCookie: 4.6,
  cookiesPerHour: function(minCustomers, maxCustomers, aveCookie){
    Math.floor((Math.ceil(Math.random() * (maxCustomers - minCustomers)) + minCustomers)*aveCookie);
  }
}
