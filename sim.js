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
  for (ii=0; ii<=numHours; ii++){
      numCustomers = Math.floor(Math.random()*(this.maxCus-this.minCus+1)+this.minCus);

  //Calculate the number of donuts per hour and store them in array
  // testing if numCustomers was correctly installed: console.log(numCustomers);
    donutsPerHr = Math.round(numCustomers*this.avgSale);
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


function donutSimulation(hours){
  var ID = [["dt1", "dt2", "dt3", "dt4", "dt5", "dt6", "dt7", "dt8", "dt9", "dt10", "dt11", "dt12", "dtTotal"],
  ["ch1", "ch2", "ch3", "ch4", "ch5", "ch6", "ch7", "ch8", "ch9", "ch10", "ch11", "ch12", "chTotal"],
  ["sl1","sl2","sl3","sl4","sl5","sl6","sl7","sl8","sl9","sl10","sl11","sl12","slTotal"],
  ["w1","w2","w3","w4","w5","w6","w7","w8","w9","w10","w11","w12","wTotal"],
  ["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10","b11","b12","bTotal"]];
  var donutsLocations = Instantiate();
  for (var ii = 0; ii < ID.length; ii++){
    var place = donutsLocations[ii];
    console.log(typeof place);
    var Input = place.numDonuts(hours);

    for (var kk = 0; kk < ID[0].length; kk++){
      var data = document.getElementById(ID[ii][kk]);
      data.textContent = Input[kk];
    }
  }
}


/*
var donutsLocations = Instantiate();
//Wrapper function for this simulation
function donutSimulation(hours){
  printDT(hours);
  printCH(hours);
  printSL(hours);
  printW(hours);
  printB(hours);
}

//Printitng number of donuts per hour to the DownTown row
function printDT(hours){
  var DownTown = donutsLocations[0];
  var Input = DownTown.numDonuts(hours);
  var ID = ["dt1", "dt2", "dt3", "dt4", "dt5", "dt6", "dt7", "dt8", "dt9", "dt10", "dt11", "dt12", "dtTotal"];
  for (kk = 0; kk < Input.length; kk++){
    data = document.getElementById(ID[kk]);
    data.innerHTML = Input[kk];
  }
}

//Printing number of donuts per hour to the Capitol Hill row
function printCH(hours){
  var CapitolHill = donutsLocations[1];
  var Input = CapitolHill.numDonuts(hours);
  var ID =["ch1", "ch2", "ch3", "ch4", "ch5", "ch6", "ch7", "ch8", "ch9", "ch10", "ch11", "ch12", "chTotal"];
  for (kk = 0; kk < Input.length; kk++){
    data = document.getElementById(ID[kk]);
    data.innerHTML = Input[kk];
  }
}

//Printing number of donuts per hour to the South Lake row
function printSL(hours){
  var SouthLake = donutsLocations[2];
  var Input = SouthLake.numDonuts(hours);
  var ID = ["sl1","sl2","sl3","sl4","sl5","sl6","sl7","sl8","sl9","sl10","sl11","sl12","slTotal"];
  for (kk = 0; kk < Input.length; kk++){
    data = document.getElementById(ID[kk]);
    data.innerHTML = Input[kk];
  }
}

//Printing number of donuts per hour to the Wedgewood row
function printW(hours){
  var Wedgewood = donutsLocations[3];
  var Input = Wedgewood.numDonuts(hours);
  var ID = ["w1","w2","w3","w4","w5","w6","w7","w8","w9","w10","w11","w12","wTotal"];
  for (kk = 0; kk < Input.length; kk++){
    data = document.getElementById(ID[kk]);
    data.innerHTML = Input[kk];
  }
}

//Printing number of donuts per hour to the Ballard row
function printB(hours){
  var Ballard = donutsLocations[4];
  var Input = Ballard.numDonuts(hours);
  var ID = ["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10","b11","b12","bTotal"];
  for (kk = 0; kk < Input.length; kk++){
    data = document.getElementById(ID[kk]);
    data.innerHTML = Input[kk];
  }
}
*/
//Start the simulation
donutSimulation([7,18]);

//////////////////////////////// Testing:

a = Instantiate();
b = a[1].numDonuts([8, 12]);
//printDT([7, 18]);
//printCH([7,18]);



