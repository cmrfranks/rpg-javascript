let clase = prompt("Elige una clase para comenzar tu aventura: \n Guerrero \n Mago \n Tirador");

alert("A continuación, procederás a preparar tu equipo");
let armaG;
let armaM;
let armaT;

const personajes = [];

class Personaje {
  constructor(clase, vida, poder) {
    this.clase = clase;
    this.vida = vida;
    this.poder = poder;
  }

  elegirArma(){
    if(this.clase === "Guerrero"){
        armaG = prompt(
            "Selecciona tu arma inicial: \n Espada \n Lanza \n Hacha"
          );
    } else if(this.clase === "Mago"){
        armaM = prompt(
            "Selecciona tu arma inicial: \n Varita \n Báculo \n Libro"
          );
    } else if (this.clase === "Tirador") {
        armaT = prompt(
          "Selecciona tu arma inicial: \n Arco \n Resortera \n  Ballesta"
        );
    } else {
        alert("Por favor, selecciona una opción adecuada");
      }
  }
}

if(clase === "Guerrero"){
  const personaje1 = new Personaje(clase, 100, 80);
  personajes.push(personaje1);
  personaje1.elegirArma()
} else if(clase === "Mago"){
  const personaje2 = new Personaje(clase, 85, 90);
  personajes.push(personaje2);
  personaje2.elegirArma()
} else{
  const personaje3 = new Personaje(clase, 75, 95);
  personajes.push(personaje3);
  personaje3.elegirArma()
}

console.log(personajes)


let aventura = alert("¡Comienza tu aventura!");

function figth() {
  var x = Math.ceil(Math.random() * 10);
  if (x === 6) {
    alert("Un monstruo se acerca");
    var y = prompt("¿Qué decides? ¿Atacar o Piedad?");
    if (y === "atacar") {
      var a = Math.ceil(Math.random() * 10);
      alert("Ganas " + a + " puntos de xp");
    }
  }
  if (y === "piedad") {
    alert("Bien, ganas 0 puntos de xp, pero una amistad");
  }
}
setInterval(figth, 100);
