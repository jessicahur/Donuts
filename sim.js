function Donuts(place, avgSale, maxCus, minCus){
  this.place = place;
  this.avgSale = avgSale;
  this.maxCus = maxCus;
  this.minCus = minCus;
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
  // testing if numCustomers was correctly installed: console.log(numCustomers);
  donutsPerHr = numCustomers*this.avgSale;
  sales.push(donutsPerHr);
  total+=donutsPerHr;
  }
  sales.push(total);
  return sales;
}


//Storing all chain stores in object Chain and instantiate 5 objects
var Chain = {
  locations: ['Down Town', 'Capitol Hill', 'South Lake Union', 'Wedgewood', 'Ballard'],
  avgSale: [4.5, 2, 6.33, 1.25, 3.75],
  maxCus: [43, 37, 23, 28, 58],
  minCus: [8, 4, 9, 2, 8]
}

function Instantiate(){ //Instantiate donut location objects
  var DownTown, CapitolHill, SouthLake, Wedgewood, Ballard;
  var donutsLocations = [DownTown, CapitolHill, SouthLake, Wedgewood, Ballard];
  for (jj=0; jj<Chain['locations'].length; jj++){
  donutsLocations[jj] = new Donuts(Chain.locations[jj], Chain.avgSale[jj], Chain.maxCus[jj], Chain.minCus[jj]);
  }
  return donutsLocations;
}

//////////////////////////////// Testing:

a = Instantiate();
b = a[1].numDonuts([8, 12]);



