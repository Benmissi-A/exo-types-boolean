let isRainy = false;
let isSunny = true;
let temperature = 15;
let clothes = '';

if (isRainy && !isSunny) {
  clothes += 'umbrella, '; // concatenation de string
}else if(!isRainy && isSunny){
  clothes += 'sunglasses, '; 
}

if (temperature < 15) {
  clothes += 'coat, ';
  clothes += 'sweater, ';
  clothes += 't-shirt, ';
} else if (temperature >= 15 && temperature <= 20) {
  clothes += 'sweater, ';
  clothes += 't-shirt, ';
} else {
  clothes += 't-shirt, ';
}
console.log(`Je vous recommande de porter: ${clothes}`);