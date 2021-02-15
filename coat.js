// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = true ;
let isWindy = false ;
let temperature = 18 ;

if ((isRainy || isWindy) && temperature <= 16) {
  console.log('Mettez votre manteau') ;
} else if((isRainy || isWindy) && temperature > 16){
  console.log('il fait chaud , un simple kway suffira') ;
}else{
  console.log(' pas de manteau ;)');
}