var ceasContainer = document.querySelector(".ceas");

var putere2 = function (number) {
  var pow = 0, powNr;
  do {
    pow++;
    powNr = Math.pow(2, pow);
  } while (powNr < number);
  return pow;
}

var getCifre = function (number) {
  var cifre = [];
  while (Math.floor(number/10) > 0) {
    cifre.unshift(number%10);
    number = Math.floor(number/10);
  }
  cifre.unshift(number);
  return cifre;
}

var pozitiiPutere2 = function (number) {
  var positions = [], i = 0;
  
  putere2container = putere2(number);
  if (number === Math.pow(2, putere2container)) {
    positions.push(1);
    while (i < putere2container) {
      i++;
      positions.push(0);
    }
  } else {    
    while (Math.floor(number/2) > 0) {
      positions.unshift(number%2);
      number = Math.floor(number/2);
    }
    
    positions.unshift(number);
    if (positions.length === 1) {
      positions.unshift(0);
    }
  }
  return positions;
}



//console.log('jj ', pozitiiPutere2(4));
var drawTime = function (time) {
  ceasContainer.innerHTML = '';
var i=0, cols, 
    cifre = [], cifra = 0;

for (i = 0; i < time.length; i++) {
  var nC = time[i];
  cifre = getCifre(nC);
  for (cifra = 0; cifra < cifre.length; cifra++) {
    var coloana = document.createElement("div");
    coloana.className = 'coloana';
    ceasContainer.appendChild(coloana);
    
    
    
    
    
    var liniiPerCifra = 
        (putere2(cifre[cifra]) > 4) ? putere2(cifre[cifra]) : 4,        
        linii = 0;
    
    var cifraHelper = document.createElement('span');
    cifraHelper.textContent = cifre[cifra];
    //coloana.appendChild(cifraHelper);
    
    var pp2 = pozitiiPutere2(cifre[cifra]);
    
    console.log(pp2);
    
    var jj = 0;
    
    if (pp2.length !== 4) {
      while (jj < liniiPerCifra - pp2.length + 1) {
        pp2.unshift(0);
        jj++;
      }
    }
    
    console.log(pp2);
    
    for (linii = 0; linii < liniiPerCifra; linii++) {
      var linieBinara = document.createElement('div');
      if (pp2[linii] === 0) {
        linieBinara.className = 'linieBinara zero';
      } else {
        linieBinara.className = 'linieBinara unu';
      }
      coloana.appendChild(linieBinara);
    }
  }
}
}
var ceasInterval = setInterval(function () {
  var date = new Date;
  drawTime([date.getHours(), date.getMinutes(), date.getSeconds()]);
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}, 1000);

document.querySelector("#demoButton").addEventListener("click", function(){
    clearInterval(ceasInterval);
});


// extindere ----------------------------------------------
/*
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
//document.write("Ora: " + d.toLocaleTimeString());
}
*/
