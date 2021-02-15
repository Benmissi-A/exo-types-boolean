let turn_left = true;
let turn_right = true;

// choix de direction

if((turn_left || !turn_right) && (!turn_left || turn_right)){
  console.log((turn_left || !turn_right) ^ (!turn_left || turn_right));
  console.log('on peut tourner a gauche ou a droite');
}else{
  console.log((turn_left || !turn_right) ^ (!turn_left || turn_right));
  console.log('on a un probleme')
}