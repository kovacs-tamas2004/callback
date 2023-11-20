function osszead(data1, data2){
    return data1 + data2;
}

function kivonas(data1, data2){
    return data1 - data2;
}

function szorzas(data1, data2){
    return data1 * data2;
}

function osztas(data1, data2){
    return data1 / data2;
}

function szamol(muvelet, valtozo1, valtozo2, kiir){
    let eredmeny = muvelet(valtozo1, valtozo2);
    kiir(eredmeny);
}

szamol(osszead, 5, 3, function (result) {
    console.log('Az összeadás eredménye: ' + result);
  });
  
  szamol(kivonas, 8, 2, function (result) {
    console.log('A kivonás eredménye: ' + result);
  });
  
  szamol(szorzas, 4, 6, function (result) {
    console.log('A szorzás eredménye: ' + result);
  });
  
  szamol(osztas, 9, 3, function (result) {
    console.log('Az osztás eredménye: ' + result);
  });