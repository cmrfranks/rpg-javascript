let clase = parseInt(
  prompt(
    "Elige una clase para comenzar tu aventura: \n Guerrero \n Mago \n Tirador"
  )
); 

const personajes = [];

class Personaje {
  constructor(clase, arma, vida, poder) {
    this.clase = clase;
    this.arma = arma;
    this.vida = vida;
    this.poder = poder;
  }
}

const guerrero = new Personaje(guerrero, `${armaG}`, 100, 80);
personajes.push(guerrero);

const mago = new Personaje(mago, `${armaM}`, 85, 90);
personajes.push(mago);

const tirador = new Personaje(tirador, `${armaT}`, 75, 95);
personajes.push(tirador);

for (let personaje of personajes) {
  if (clase === guerrero.clase) {
    let mensaje = alert("A continuación, procederás a preparar tu equipo");
    let armaG = prompt(
      "Selecciona tu arma inicial: \n a- Espada \n b- Lanza \n c- Hacha"
    );
  } else if (clase === mago.clase) {
    let mensaje = alert("A continuación, procederás a preparar tu equipo");
    let armaM = prompt(
      "Selecciona tu arma inicial: \n a- Varita \n b- Báculo \n c- Libro"
    );
  } else if (clase === tirador.clase) {
    let mensaje = alert("A continuación, procederás a preparar tu equipo");
    let armaT = prompt(
      "Selecciona tu arma inicial: \n a- Arco \n b- Resortera \n c- Ballesta"
    );
  } else {
    let invalid = alert("Por favor, selecciona una opción adecuada");
  }
}

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
