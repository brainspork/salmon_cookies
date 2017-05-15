'use strict';

var firstPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  openHour: 6,
  closeHour: 20,
  aveCookie: 6.3,
  cookieArr:[]
}

var seaTac = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  openHour: 6,
  closeHour: 20,
  aveCookie: 1.2,
  cookieArr:[],
  //cookiesPerHour: function(this.minCustomers, this.maxCustomers, this.aveCookie){
    //Math.floor((Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers)*this.aveCookie);
  //}
}

var seaCenter= {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  openHour: 6,
  closeHour: 20,
  aveCookie: 3.7,
  cookieArr:[],
  //cookiesPerHour: function(this.minCustomers, this.maxCustomers, this.aveCookie){
  //  Math.floor((Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers)*this.aveCookie);
  //}
}

var capHill = {
  name: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  openHour: 6,
  closeHour: 20,
  aveCookie: 2.3,
  cookieArr:[],
  //cookiesPerHour: function(this.minCustomers, this.maxCustomers, this.aveCookie){
    //Math.floor((Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers)*this.aveCookie);
  //}
}

var alki = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  openHour: 6,
  closeHour: 20,
  aveCookie: 4.6,
  cookieArr:[],
  //cookiesPerHour: function(this.minCustomers, this.maxCustomers, this.aveCookie){
  //  Math.floor((Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers)*this.aveCookie);
//  }
}

function calculate(store){
  var list = document.createElement('ul');
  var storeName = document.createElement('h3');
  var listArr = store.cookieArr;
  var startHour = parseInt(store.openHour);
  var cookiesTotal = 0;
  var cookiesPerHour = function(){
    return Math.floor((Math.ceil(Math.random() * (parseInt(store.maxCustomers) - parseInt(store.minCustomers))) + parseInt(store.minCustomers))*parseInt(store.aveCookie));
  }
  for(var i = 0; i < store.closeHour - store.openHour; i++){
    var hour = startHour + parseInt([i]);
    var sales = cookiesPerHour();
    listArr.push('<li>' + hour + ':00 : ' +sales+ '</li>');
    cookiesTotal += sales;
  }

  storeName.innerHTML = store.name;
  document.body.appendChild(storeName);
  var cookieList = store.cookieArr.join('');
  list.innerHTML = cookieList;
  document.body.appendChild(list);
  document.write('<p>Total: '+cookiesTotal+'</p>');
}

calculate(firstPike);
calculate(seaTac);
calculate(seaCenter);
calculate(capHill);
calculate(alki);
