function Donuts(place, avgSale, minCus, maxCus){
  this.place = place;
  this.avgSale = avgSale;
  this.minCus = minCus;
  this.maxCus = maxCus;
}

Donuts.prototype.numDonuts = function (hours){
  var sales = [];
  var total = 0;

  numHours = hours[1]-hours[0];

  //Generate number of customers per hour based on min and max customers
  for (ii=1; ii<=numHours; ii++){
    do{
      numCustomers = Math.round(Math.random()*100);
    }
      while (numCustomers< this.minCus || numCustomers > this.maxCus)

  //Calculate the number of donuts per hour and store them in array
  donutsPerHr = numCustomers*this.avgSale;
  sales.push(donutsPerHr);
  total+=donutsPerHr;
  }
  sales.push(total);
  return sales;
}

//Storing all chain stores in object Chain
var Chain = {
  locations: ['downtown','99 Wall Street'],
  avgSale: [4,2],
  hours: [[8,18],[9,17]]
}

function Simulate(){

  for (jj=0; jj<Chain['locations'].length; jj++){
  var
  }
}

////////////////////////////////
Testing:
var x = new Donuts('downtown', 4, [8,18]);
y=x.place;
console.log(y);
z=x.numDonuts();
z;

