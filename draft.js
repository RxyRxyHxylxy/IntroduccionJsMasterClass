var edad;
var embarazo;
var gestacion;

edad = prompt('Introduce tu edad','');
embarazo = prompt('¿Te encuentras embarazada? 1=SI 0=NO','');
if (embarazo = 1) {
    gestacion = prompt('¿Cuántas semanas de gestación tienes?','');
  } if (edad >= 18 && gestacion < 9) {
    console.log("Usted es apto/a para ir a vacunarse");
  } else {
    console.log("Lamentablemente, usted no es apto/a para vacunarse");
  }
