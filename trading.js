
let isBitcoinCheap = false;
let isBitcoinProfitable = true;


  if(isBitcoinCheap && isBitcoinProfitable){
    console.log('buy Bitcoins');
  }
    if(isBitcoinCheap && !isBitcoinProfitable){
    console.log('do nothing');
  }
  else if(!isBitcoinCheap && isBitcoinProfitable){
    console.log('sell Bitcoins');
  }
  else if(!isBitcoinCheap && !isBitcoinProfitable){
    console.log('do nothing');
  }


