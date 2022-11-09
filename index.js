let claseRPG = 
  prompt(
    "Elige una clase para comenzar tu aventura: \n Guerrero \n Mago \n Tirador"
  )
; 

let clases = [prompt(
    "Elige una clase para comenzar tu aventura: \n Guerrero \n Mago \n Tirador"
  ), prompt(
    "Elige una clase para comenzar tu aventura: \n Guerrero \n Mago \n Tirador"
  ), prompt(
    "Elige una clase para comenzar tu aventura: \n Guerrero \n Mago \n Tirador"
  )];


alert("A continuación, procederás a preparar tu equipo");
let armaG;
let armaM;
let armaT;

const personajes = [];

class Personaje {
  constructor(clase, /*arma,*/ vida, poder) {
    this.clase = clase;
    //this.arma = arma;
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


const guerrero = new Personaje("Guerrero", 100, 80);
personajes.push(guerrero);

const mago = new Personaje(clases[1], 85, 90);
personajes.push(mago);

const tirador = new Personaje(clases[2], 75, 95);
personajes.push(tirador);

guerrero.elegirArma()
mago.elegirArma()
tirador.elegirArma()

console.log(personajes)



/*

  if (clase === guerrero.clase) {
    alert("A continuación, procederás a preparar tu equipo");
    armaG = prompt(
      "Selecciona tu arma inicial: \n Espada \n Lanza \n Hacha"
    );
  } else if (clase === mago.clase) {
    alert("A continuación, procederás a preparar tu equipo");
    armaM = prompt(
      "Selecciona tu arma inicial: \n Varita \n Báculo \n Libro"
    );
  } else if (clase === tirador.clase) {
    alert("A continuación, procederás a preparar tu equipo");
    armaT = prompt(
      "Selecciona tu arma inicial: \n aArco \n bResortera \n  Ballesta"
    );
  } else {
    alert("Por favor, selecciona una opción adecuada");
  }
*/

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
